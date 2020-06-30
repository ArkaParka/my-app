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
  encapsulation: ViewEncapsulation.None
})
export class DefaultLayoutComponent implements OnDestroy, OnInit {
  @HostBinding('class.app-tree-node') public _nzTreeNodeClass = true;

  private destroy$ = new Subject();
  public customNavItems;
  private nzNavMenu: NzTreeNodeOptions[] = [];

  private dynamicMenu: NavData[] = [];
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;

  constructor(@Inject(DOCUMENT) _document?: any, private dynamicMenuService?: DynamicMenuService) {
    this.dynamicMenuChildren();
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnInit() {
    //this.dynamicMenuChildrens();
  }

  private dynamicMenuChildren() {
    this.dynamicMenuService.getModules().pipe(
      switchMap(modulesResponse => this.getModules(modulesResponse)),
      tap(res => this.getModuleActions(res)),
      tap(() => this.setDynamicMenu()),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      console.log(this.nzNavMenu)
    });
  }

  private getModules(modulesResponse): Observable<any> {
    let moduleActionsRequest = [];
    modulesResponse.forEach(mr => {
      this.nzNavMenu.push({
          title: mr.module.moduleDisplayName,
          key: mr.nodeName,
          expanded: false,
          children: []
        }
      );

      this.dynamicMenu.push(
        {
          name: mr.module.moduleDisplayName,
          url: `/form-loader/${mr.nodeName}`,
          icon: 'icon-puzzle',
          children: [],
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
          key: mar.actionName,
          expanded: false,
          children: this.getNzNavChildren(mar),
        });

        this.dynamicMenu[i].children.push(
          {
            name: mar.displayName,
            url: `/${this.dynamicMenu[i].url}/${mar.actionName}`,
            icon: 'icon-puzzle',
            children: this.getChildren(mar, `/${this.dynamicMenu[i].url}/${mar.actionName}`),
          }
        );
      });
    })
  }

  private getNzNavChildren(moduleAction: ModuleActionsResponse): NzTreeNodeOptions[] {
    let children = [];
    moduleAction.childActions.forEach(childAction => {
      children.push({
        title: childAction.displayName,
        key: childAction.actionName,
        expanded: false,
        children: this.getNzNavChildren(childAction),
      })
    });
    return children.length ? children : null;
  }

  private getChildren(moduleAction: ModuleActionsResponse, parentUrl: string): NavData[] {
    let children = [];
    moduleAction.childActions.forEach(childAction => {
      children.push({
        name: childAction.displayName,
        url: `${parentUrl}.${childAction.actionName}`,
        icon: 'icon-puzzle',
        children: this.getChildren(childAction, `${parentUrl}.${childAction.actionName}`),
      })
    });
    return children.length ? children : null;
  }

  private setDynamicMenu(): void {
    this.customNavItems = navItems;

    const duplicateDetected = this.dynamicMenu.some(elem => {
      return this.customNavItems.some(item => {
        return elem.name == item.name;
      })
    });

    if (!duplicateDetected) {
      this.dynamicMenu.forEach((elem, i) => {
        this.customNavItems.splice(i + 1, 0, elem);
      });
    }
  }

  nzNavItemClicked(e): void {
    if (e.node.children && e.node.children.length)
      e.node.isExpanded = !e.node.isExpanded;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.changes.disconnect();
  }
}
