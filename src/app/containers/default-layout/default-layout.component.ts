import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  AfterContentInit, AfterContentChecked
} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {DynamicMenuService} from '../../services/dynamic-menu.service';
import {BehaviorSubject, Subject} from "rxjs";
import {takeUntil, tap} from "rxjs/operators";
import {ModuleActionsResponse} from "../../models/ModuleActionsResponse";
import {NzTreeNodeOptions} from "ng-zorro-antd";
import {AppHeaderComponent} from "@coreui/angular";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnDestroy, AfterContentChecked {
  private navigationLoading = true;
  private menuOverflow$ = new BehaviorSubject<boolean>(false);
  private destroy$ = new Subject();
  private activeModules = [];
  private menuChildren: NzTreeNodeOptions[] = [];

  @ViewChild('widgetsContent') public widgetsContent: ElementRef<any>;

  constructor(@Inject(DOCUMENT) _document?: any,
              private dynamicMenuService?: DynamicMenuService) {
    this.dynamicMenuChildren();
  }

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

  private getModuleAction(moduleActionsResponse: Array<ModuleActionsResponse>, moduleKey: string): void {
    this.menuChildren = [];
    moduleActionsResponse.forEach((mar, i) => {
      this.menuChildren.push({
        title: mar.displayName,
        key: `${moduleKey}/${mar.actionName}`,
        expanded: false,
        children: this.getNzNavChildren(mar, `${moduleKey}/${mar.actionName}`),
      });
    });
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

  private moduleClicked(nodeName: string, moduleKey: string) {
    this.dynamicMenuService.getModuleActions(nodeName)
      .pipe(takeUntil(this.destroy$))
      .subscribe(moduleActionsResponse => this.getModuleAction(moduleActionsResponse, moduleKey))
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
