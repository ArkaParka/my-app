import {
  Component,
  Inject,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterContentChecked
} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {DynamicMenuService} from '../../services/dynamic-menu.service';
import {BehaviorSubject, Subject} from "rxjs";
import {takeUntil, tap} from "rxjs/operators";
import {ModuleActionsResponse, ModuleActionType} from "../../models/ModuleActionsResponse";
import {NzTreeNodeOptions} from "ng-zorro-antd";


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnDestroy, AfterContentChecked {
  public navigationLoading = true;
  private menuOverflow$ = new BehaviorSubject<boolean>(false);
  private destroy$ = new Subject();
  private activeModules = [];
  private moduleMenuChildren: NzTreeNodeOptions[] = [];

  @ViewChild('widgetsContent') public widgetsContent: ElementRef<any>;

  constructor(@Inject(DOCUMENT) _document?: any,
              private dynamicMenuService?: DynamicMenuService) {
    this.dynamicMenuChildren();
  }

  //TODO: Заменить хук на что нибудь нормальное
  ngAfterContentChecked() {
    if (this.widgetsContent && this.widgetsContent.nativeElement)
      if (this.widgetsContent.nativeElement.offsetHeight < this.widgetsContent.nativeElement.scrollHeight ||
        this.widgetsContent.nativeElement.offsetWidth < this.widgetsContent.nativeElement.scrollWidth)
        this.menuOverflow$.next(false);
      else this.menuOverflow$.next(true);
  }

  private dynamicMenuChildren() {
    this.dynamicMenuService.getModules()
      .pipe(takeUntil(this.destroy$))
      .subscribe(modulesResponse => this.getModules(modulesResponse));
  }

  private getModules(modulesResponse): void {
    modulesResponse.forEach(mr => {
      this.activeModules.push({
        title: mr.module.moduleDisplayName,
        nodeName: mr.nodeName,
        key: `/form-loader/${mr.nodeName}`
      });
    });
    this.navigationLoading = false;
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

  private moduleClicked(nodeName: string, moduleKey: string) {
    this.dynamicMenuService.getModuleActions(nodeName)
      .pipe(takeUntil(this.destroy$))
      .subscribe(moduleActionsResponse => {
        this.getModuleAction(moduleActionsResponse, moduleKey);
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
