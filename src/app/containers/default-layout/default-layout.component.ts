import {Component, OnDestroy, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {navItems, NavData} from '../../_nav';
import {DynamicMenuService} from '../../services/dynamic-menu.service';
import {Observable, Subject, zip} from "rxjs";
import {switchMap, takeUntil, tap} from "rxjs/operators";
import {ModuleActionsResponse} from "../../models/ModuleActionsResponse";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy, OnInit {

  private destroy$ = new Subject();
  public customNavItems;
  private dynamicMenu: NavData[] = [];
  public sidebarMinimized = true;
  public childrensForMenu;
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
    ).subscribe();
  }

  private getModules(modulesResponse): Observable<any> {
    let moduleActionsRequest = [];
    modulesResponse.forEach(mr => {
      this.dynamicMenu.push(
        {
          name: mr.module.moduleDisplayName,
          url: `/${mr.module.moduleKey}`,
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

  private getChildren(moduleAction: ModuleActionsResponse, parentUrl: string): NavData[] {
    let children = [];
    moduleAction.childActions.forEach(childAction => {
      children.push({
        name: childAction.displayName,
        url: `${parentUrl}/${childAction.actionName}`,
        icon: 'icon-puzzle',
        children: this.getChildren(childAction, `${parentUrl}/${childAction.actionName}`),
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.changes.disconnect();
  }
}
