import {ChangeDetectorRef, Component} from '@angular/core';
import {DynamicMenuService} from '../../services/dynamic-menu.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IModuleInfo} from '../../models/IModuleInfo';
import {RoutingService} from '../../services/routing.service';
import {delay, mergeMap, takeUntil, tap} from 'rxjs/operators';
import {ModuleActionsResponse, ModuleActionType} from '../../models/ModuleActionsResponse';
import {NzNotificationService, NzTreeNode, NzTreeNodeOptions} from 'ng-zorro-antd';
import last from 'lodash/last';
import isEmpty from 'lodash/isempty';
import {combineLatest, from, Observable, of} from 'rxjs';
import {DocumentBaseComponent} from '../document-base.component';
import {BreadcrumbsStoreService} from '../../services/breadcrumbs-store.service';

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

  constructor(private dynamicMenuService: DynamicMenuService,
              private route: ActivatedRoute,
              private router: Router,
              private cd: ChangeDetectorRef,
              private rs: RoutingService,
              private notificator: NzNotificationService,
              private bcStore: BreadcrumbsStoreService) {
    super();

    combineLatest(this.dynamicMenuService.getModules(), this.rs.routeChanged$).pipe(
      mergeMap(([moduleResponse, routerParams]) => {
        this.setupActiveModules(moduleResponse);
        return this.setupRouterParams(routerParams);
      }),
      tap(moduleActionsResponse => {
        if (moduleActionsResponse) {
          this.getModuleAction(moduleActionsResponse, this.activeModule.key);
        }
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
            this.router.navigate(['home'], {relativeTo: this.route});
          });

          return of(null);
        }
        this.bcStore.setState({
          module: {title: this.activeModule.title, key: this.activeModule.key},
          pages: [],
          tab: {title: '', key: ''},
          tree_lists: []
        });
        this.activePage = null;

        if (routerParams['configPath'] && routerParams['id']) {
          this.activePage = routerParams['configPath'] + '/' + routerParams['id'];
        } else if (routerParams['configPath']) {
          this.activePage = routerParams['configPath'];
        }

        return this.dynamicMenuService.getModuleActions(routerParams['moduleKey']);
      }
    } else {
      this.bcStore.setState({module: {title: 'Home', key: '/home'}, pages: [], tab: {title: '', key: ''}, tree_lists: []});
      this.availableModulePages = [];
    }
    return of(null);
  }

  private getModuleAction(moduleActionsResponse: ModuleActionsResponse[], moduleKey: string) {
    this.availableModulePages = [];
    moduleActionsResponse.forEach(mar => {
      const id = mar.id ? mar.id : ``;
      this.availableModulePages.push({
        title: mar.displayName,
        expanded: false,
        key: mar.type === ModuleActionType.ROOT ? null : `${moduleKey}/${mar.actionName}/${id}`,
        children: mar.childActions?.length ? this.getModuleActionChildren(mar, moduleKey, mar.actionName) : null
      });
    });
  }

  private getModuleActionChildren(moduleAction: ModuleActionsResponse, moduleKey: string, parentKey: string): NzTreeNodeOptions[] {
    const children: NzTreeNodeOptions[] = [];
    moduleAction.childActions.forEach(childAction => {
      const id = childAction.id ? childAction.id : ``;
      children.push({
        title: childAction.displayName,
        expanded: false,
        key: childAction.type === ModuleActionType.ROOT ? null : `${moduleKey}/${parentKey}.${childAction.actionName}/${id}`,
        children: childAction?.childActions?.length ? this.getModuleActionChildren(childAction, moduleKey, childAction.actionName) : null
      });
    });
    return children.length ? children : null;
  }

  moduleClicked($event: IModuleInfo) {
    const route = $event.key.split('/').filter(r => r !== '');
    console.log('moduleClicked', route);
    this.router.navigate(route, {relativeTo: this.route});
  }

  navItemClicked($event: NzTreeNode[]) {
    const route = last($event).key.split('/').filter(r => r !== '');
    this.router.navigate(route, {relativeTo: this.route});
  }

  navigationLoaded($event: NzTreeNode[]) {
    const breadcrumbsPages = [];
    $event.forEach(node => {
      breadcrumbsPages.push({title: node.title, key: node.key});
    });
    this.bcStore.setState({pages: breadcrumbsPages});
    this.cd.detectChanges();
  }
}
