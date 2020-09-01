import {ChangeDetectorRef, Component} from "@angular/core";
import {DynamicMenuService} from "../../services/dynamic-menu.service";
import {ActivatedRoute, Params, Router, UrlSegment} from "@angular/router";
import {IBreadCrumbsItem} from "../../models/IBreadCrumbsItem";
import {IModuleInfo} from "../../models/IModuleInfo";
import {RoutingService} from "../../services/routing.service";
import {delay, mergeMap, switchMap, takeUntil, takeWhile, tap} from "rxjs/operators";
import {ModuleActionsResponse, ModuleActionType} from "../../models/ModuleActionsResponse";
import {NzNotificationService, NzTreeNode, NzTreeNodeOptions} from "ng-zorro-antd";
import last from 'lodash/last';
import isEmpty from 'lodash/isempty'
import {combineLatest, from, Observable, of, zip} from "rxjs";
import {DocumentBaseComponent} from "../document-base.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'skeleton.component.html',
  styleUrls: ['skeleton.component.scss'],
})
export class SkeletonComponent extends DocumentBaseComponent {
  private availableModules: IModuleInfo[] = [];
  private availableModulePages: NzTreeNodeOptions[] = [];

  private activeModule: IModuleInfo = null;
  private activePage: string = null;

  private breadcrumbsModule: IBreadCrumbsItem = null;
  private breadcrumbsPages: IBreadCrumbsItem[] = [];

  constructor(private dynamicMenuService: DynamicMenuService,
              private route: ActivatedRoute,
              private router: Router,
              private cd: ChangeDetectorRef,
              private rs: RoutingService,
              private notificator: NzNotificationService) {
    super();

    combineLatest(this.dynamicMenuService.getModules(), this.rs.routeChanged$).pipe(
      mergeMap(([moduleResponse, routerParams]) => {
        this.setupActiveModules(moduleResponse);
        return this.setupRouterParams(routerParams);
      }),
      tap(moduleActionsResponse=> {
        if (moduleActionsResponse)
          this.getModuleAction(moduleActionsResponse, this.activeModule.key);
      }),
      takeUntil(this.destroy$),
    ).subscribe();
  }

  private setupActiveModules(moduleResponse) {
    this.availableModules = [];
    moduleResponse.forEach(mr => {
      this.availableModules.push({
        title: mr.module.moduleDisplayName,
        nodeName: mr.nodeName,
        key: `/module/${mr.nodeName}`
      });
    });
  }

  setupRouterParams(routerParams): Observable<ModuleActionsResponse[]> {
    if (!isEmpty(routerParams)) {
      if (routerParams['moduleKey']) {
        this.activeModule = this.availableModules.find(module => module.nodeName === routerParams['moduleKey']);
        if (!this.activeModule) {

          this.notificator.error(`Произошла ошибка при загрузке модуля!`, `Переход на главную страницу...`);
          from([null]).pipe(delay(1500)).subscribe(() => {
            this.router.navigate(['home'], {relativeTo: this.route})
          });

          return of(null);
        }
        this.breadcrumbsModule = {title: this.activeModule.title, key: this.activeModule.key};
        this.breadcrumbsPages = [];
        this.activePage = null;

        if (routerParams['configPath']) {
          this.activePage = routerParams['configPath']
        }

        return this.dynamicMenuService.getModuleActions(routerParams['moduleKey']);
      }
    } else {
      this.breadcrumbsModule = {title: 'Home', key: '/home'};
      this.breadcrumbsPages = [];
      this.availableModulePages = [];
    }
    return of(null);
  }

  private getModuleAction(moduleActionsResponse: ModuleActionsResponse[], moduleKey: string) {
    this.availableModulePages = [];
    moduleActionsResponse.forEach(mar => {
      this.availableModulePages.push({
        title: mar.displayName,
        expanded: false,
        key: mar.type === ModuleActionType.ROOT ? null : `${moduleKey}/${mar.actionName}`,
        children: mar.type === ModuleActionType.ROOT ? this.getModuleActionChildren(mar, moduleKey, mar.actionName) : null
      });
    })
  }

  private getModuleActionChildren(moduleAction: ModuleActionsResponse, moduleKey: string, parentKey: string,): NzTreeNodeOptions[] {
    let children: NzTreeNodeOptions[] = [];
    moduleAction.childActions.forEach(childAction => {
      children.push({
        title: childAction.displayName,
        expanded: false,
        key: childAction.type === ModuleActionType.ROOT ? null : `${moduleKey}/${parentKey}.${childAction.actionName}`,
        children: childAction.type === ModuleActionType.ROOT ? this.getModuleActionChildren(childAction, moduleKey, childAction.actionName) : null
      })
    });
    return children.length ? children : null;
  }

  moduleClicked($event: IModuleInfo) {
    let route = $event.key.split('/').filter(r => r !== '');
    this.router.navigate(route, {relativeTo: this.route});
  }

  navItemClicked($event: NzTreeNode[]) {
    let route = last($event).key.split("/").filter(r => r !== "");
    this.router.navigate(route, {relativeTo: this.route});
  }

  navigationLoaded($event: NzTreeNode[]) {
    this.breadcrumbsPages = [];
    $event.forEach(node => {
      this.breadcrumbsPages.push({title: node.title, key: node.key})
    });
    this.cd.detectChanges();
  }
}
