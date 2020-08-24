import {
  Component,
  Inject,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterContentChecked, ChangeDetectorRef
} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {DynamicMenuService} from '../../services/dynamic-menu.service';
import {BehaviorSubject, Subject} from "rxjs";
import {map, switchMap, takeUntil, tap} from "rxjs/operators";
import {ModuleActionsResponse, ModuleActionType} from "../../models/ModuleActionsResponse";
import {NzTreeNode, NzTreeNodeOptions} from "ng-zorro-antd";
import {ActivatedRoute, Router} from "@angular/router";
import last from 'lodash/last'


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnDestroy, AfterContentChecked {
  public appLoading = true;
  private menuOverflow$ = new BehaviorSubject<boolean>(false);
  private destroy$ = new Subject();
  private availableModules = [];
  private moduleMenuChildren: NzTreeNodeOptions[] = [];

  private activeModule: string = null;
  private activePage: string = null;
  private activeModulePages: NzTreeNode[] = [];

  private moduleKey: string = "";
  private configPath: string = "";

  @ViewChild('widgetsContent') public widgetsContent: ElementRef<any>;

  constructor(@Inject(DOCUMENT) _document?: any,
              private dynamicMenuService?: DynamicMenuService,
              private router?: Router,
              private route?: ActivatedRoute,
              private cd?:ChangeDetectorRef) {
    this.route.params.pipe(
      takeUntil(this.destroy$),
      switchMap((params) => {
        this.moduleKey = params['moduleKey'];
        this.configPath = params['configPath'];
        return this.dynamicMenuService.getModules()
      }),
      switchMap((modulesResponse) => {
        this.setActiveModules(modulesResponse);
        this.activeModule = this.getActiveModule(this.moduleKey).title;
        this.activePage = this.configPath;
        return this.dynamicMenuService.getModuleActions(this.moduleKey)
      }),
      tap((moduleActionsResponse) => {
        this.getModuleAction(moduleActionsResponse, this.getActiveModule(this.moduleKey).key);
      })
    ).subscribe()
  }

  //TODO: Заменить хук на что нибудь нормальное
  ngAfterContentChecked() {
    if (this.widgetsContent && this.widgetsContent.nativeElement)
      if (this.widgetsContent.nativeElement.offsetHeight < this.widgetsContent.nativeElement.scrollHeight ||
        this.widgetsContent.nativeElement.offsetWidth < this.widgetsContent.nativeElement.scrollWidth)
        this.menuOverflow$.next(false);
      else this.menuOverflow$.next(true);
  }

  private getActiveModule(moduleKey: string) {
    return this.availableModules.find(module => module.key.includes(moduleKey));
  }

  private setActiveModules(modulesResponse): void {
    this.availableModules = [];
    modulesResponse.forEach(mr => {
      this.availableModules.push({
        title: mr.module.moduleDisplayName,
        nodeName: mr.nodeName,
        key: `/form-loader/${mr.nodeName}`
      });
    });
    this.appLoading = false;
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: (this.widgetsContent.nativeElement.scrollLeft + 150),
      behavior: 'smooth'
    });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: (this.widgetsContent.nativeElement.scrollLeft - 150),
      behavior: 'smooth'
    });
  }


  private getModuleAction(moduleActionsResponse: ModuleActionsResponse[], moduleKey: string) {
    this.moduleMenuChildren = [];
    moduleActionsResponse.forEach(mar => {
      this.moduleMenuChildren.push({
        title: mar.displayName,
        expanded: false,
        key: mar.type === ModuleActionType.ROOT ? null : `${moduleKey}/${mar.actionName}`,
        children: mar.type === ModuleActionType.ROOT ? this.getModuleActionChildren(mar, moduleKey, mar.actionName) : null
      });
    })
  }

  getModuleActionChildren(moduleAction: ModuleActionsResponse, moduleKey: string, parentKey: string,): NzTreeNodeOptions[] {
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

  private moduleClicked(nodeName: string, moduleKey: string, moduleTitle: string) {
    this.dynamicMenuService.getModuleActions(nodeName)
      .pipe(
        takeUntil(this.destroy$),
        tap(() => this.activeModule = moduleTitle))
      .subscribe(moduleActionsResponse => {
        this.getModuleAction(moduleActionsResponse, moduleKey);
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  navItemClicked($event: NzTreeNode[]) {
    let route = last($event).key.split("/").filter(r => r !== "");
    this.router.navigate(route);
  }

  navigationLoaded($event: NzTreeNode[]) {
    this.activeModulePages=[...$event];
    this.cd.detectChanges();
  }
}
