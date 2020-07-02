import {Component, HostBinding, Inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {NavData, navItems} from '../../_nav';
import {DynamicMenuService} from '../../services/dynamic-menu.service';
import {Observable, Subject, zip} from "rxjs";
import {switchMap, takeUntil, tap} from "rxjs/operators";
import {ModuleActionsResponse} from "../../models/ModuleActionsResponse";
import {NzTreeNodeOptions} from "ng-zorro-antd";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnDestroy, OnInit {

  private navigationLoading: boolean = true;
  private destroy$ = new Subject();
  private nzNavMenu: NzTreeNodeOptions[] = [];
  private changes: MutationObserver;

  constructor(@Inject(DOCUMENT) _document?: any,
              private dynamicMenuService?: DynamicMenuService) {
    this.dynamicMenuChildren();
  }

  ngOnInit() {
  }

  private dynamicMenuChildren() {
    this.dynamicMenuService.getModules().pipe(
      switchMap(modulesResponse => this.getModules(modulesResponse)),
      tap(res => this.getModuleActions(res)),
      takeUntil(this.destroy$)
    ).subscribe(() => {
    });
  }

  private getModules(modulesResponse): Observable<any> {
    let moduleActionsRequest = [];
    modulesResponse.forEach(mr => {
      this.nzNavMenu.push({
          title: mr.module.moduleDisplayName,
          key: `/form-loader/${mr.nodeName}`,
          expanded: false,
          children: []
        }
      );
      moduleActionsRequest.push(this.dynamicMenuService.getModuleActions(mr.nodeName));
    });
    return zip(...moduleActionsRequest);
  }

  private getModuleActions(res): void {
    res.forEach((moduleActionsResponse: Array<ModuleActionsResponse>, i) => {
      moduleActionsResponse.forEach(mar => {
        this.nzNavMenu[i].children.push({
          title: mar.displayName,
          key: `${this.nzNavMenu[i].key}/${mar.actionName}`,
          expanded: false,
          children: this.getNzNavChildren(mar, `${this.nzNavMenu[i].key}/${mar.actionName}`),
        });
      });
    });
    this.navigationLoading = false;
  }

  private getNzNavChildren(moduleAction: ModuleActionsResponse, parentKey: string): NzTreeNodeOptions[] {
    let children = [];
    moduleAction.childActions.forEach(childAction => {
      children.push({
        title: childAction.displayName,
        key: `${parentKey}.${childAction.actionName}`,
        expanded: false,
        children: this.getNzNavChildren(childAction, `${parentKey}.${childAction.actionName}`),
      })
    });
    return children.length ? children : null;
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.changes.disconnect();
  }
}
