import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IModulePageConfiguration} from '../../models/IModulePageConfiguration';
import {DynamicPageStoreService} from '../dynamic-page-services/dynamic-page-store.service';
import {EActionConfigType} from '../../models/IActions';
import {DynamicMenuService} from '../../services/dynamic-menu.service';
import {combineLatest, of, zip} from 'rxjs';
import {IPageActionResponse} from '../interfaces/IPageActionResponse';
import {filter, map, skipUntil, switchMap, takeUntil} from 'rxjs/operators';
import {ITypePageViewConfig} from '../interfaces/ITypePageViewConfig';
import {IWidgetDataRequest} from '../interfaces/IWidgetDataRequest';
import {IAreasConfig} from '../interfaces/IAreasConfig';
import {IWidgetData} from '../interfaces/IWidgetData';
import {DocumentBaseComponent} from '../../containers/document-base.component';
import {log} from 'ng-zorro-antd';
import {ModalComponent} from '../available-widgets/modal/modal.component';
import {IFormWidget} from '../interfaces/IFormWidget';
import {EActionTypes} from '../interfaces/EEventTypes';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dynamic-page-view',
  template: `
    <div *ngIf="!(dpStore.select('isInitialDataLoaded')|async)" class="spinner-border" role="status"></div>
    <app-widget-list *ngIf="dpStore.select('isInitialDataLoaded')|async" [pageConfig]="pageConfig"></app-widget-list>`,
  styles: [`:host {
    display: block;
    height: 100%
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicPageComponent extends DocumentBaseComponent {
  private moduleKey: string = null;
  private configPath: string = null;
  private _pageConfig: any = null;

  private dialogRef: MatDialogRef<any>;

  public get pageConfig() {
    return this._pageConfig;
  }

  public set pageConfig(value) {
    this._pageConfig = value;
  }

  constructor(public dpStore: DynamicPageStoreService,
              private dynamicMenuService: DynamicMenuService,
              public dialog: MatDialog) {
    super();
    this.addEventListener();
  }

  @Input('dataForComponent') set dataForComponent(data: { moduleKey: string, configPath: string, pageConfiguration: IModulePageConfiguration }) {
    this.moduleKey = data.moduleKey;
    this.configPath = data.configPath;
    this.pageConfig = data.pageConfiguration;
    this.getPageUID(this.pageConfig.typePageViewConfigs);
    this.dpStore.setState({typePageViewConfigs: this.pageConfig.typePageViewConfigs, forms: data.pageConfiguration.forms});

    console.log('data', data);

    this.executeInitialDataActions();
    this.getInitialWidgetsData();
    this.getWidgetsData();
  }

  private getPageUID(typePageViewConfigs: any) {
    for (const pageConf of typePageViewConfigs) {
      pageConf.viewConfig.areasConfig.forEach(areaConf => {
        if ((areaConf.widgetConfig.type).toUpperCase() === 'BUTTON') {
          areaConf.widgetConfig.options?.events?.value.forEach(val => {
            val.actions.forEach(action => {
              action.options.pageUID = pageConf.pageUID;
            });
          });
        }
        if ((areaConf.widgetConfig.type).toUpperCase() === 'SIMPLE_LINK') {
          areaConf.widgetConfig.options.pageUID = {value: pageConf.pageUID};
        }
      });
    }
  }

  private executeInitialDataActions(): void {
    const initialDataActions = this.pageConfig.actions.filter(action => action.configType === EActionConfigType.GET_DATA_REQUEST);
    if (initialDataActions && initialDataActions.length) {
      this.dpStore.setState({isInitialDataLoaded: false});
      const requests = [];
      initialDataActions.forEach(action => requests.push(this.dynamicMenuService.executePageAction(this.moduleKey, action.actionName, action.execConfig.pageUID)));
      zip(...requests).subscribe((result: IPageActionResponse[]) => {
        const initialData: { dataPath: string, data: any }[] = [];
        result.forEach(res => initialData.push({dataPath: res.actionType, data: res.value}));
        this.dpStore.setState({initialWidgetData: initialData, isInitialDataLoaded: true});
      });
    } else {
      this.dpStore.setState({isInitialDataLoaded: true});
    }
  }

  private getInitialWidgetsData(): void {
    this.dpStore.select('typePageViewConfigs').pipe(
      filter(data => !!data),
      switchMap((typePageViewConfigs: ITypePageViewConfig[]) => {
        const initialWidgetDataRequests = [];
        this.pageConfig.viewConfig.config.areasConfig
          .filter((area: IAreasConfig) => area.widgetConfig?.options?.needsDataPreload)
          .forEach((area: IAreasConfig) => {
            const typePageViewConfig: ITypePageViewConfig = typePageViewConfigs.find(config => config.key === area.widgetConfig.options.page_key.value);
            initialWidgetDataRequests.push(this.dynamicMenuService.getFormDataInstance(this.moduleKey, typePageViewConfig.pageUID, typePageViewConfig.key, null));
          });
        return combineLatest(initialWidgetDataRequests);
      }),
      takeUntil(this.destroy$)
    ).subscribe((initWidgetData: IWidgetData[]) => {
      this.dpStore.setState({widgetData: initWidgetData});
    });
  }

  private getWidgetsData(): void {
    const widgetsDataRequest: IWidgetDataRequest = {id: null, type: null, key: null};
    this.dpStore.select('widgetDataRequest').pipe(
      filter(data => !!data),
      switchMap((wdr: IWidgetDataRequest) => {
        widgetsDataRequest.id = wdr.id;
        widgetsDataRequest.type = wdr.type;
        return this.dpStore.select('typePageViewConfigs');
      }),
      filter(data => !!data),
      switchMap((typePageViewConfigs: ITypePageViewConfig[]) => {
        widgetsDataRequest.key = typePageViewConfigs.find(config => config.key === widgetsDataRequest.type)?.pageUID;
        return this.dynamicMenuService.getFormDataInstance(this.moduleKey, widgetsDataRequest.key, widgetsDataRequest.type, widgetsDataRequest.id);
      }),
      takeUntil(this.destroy$)
    ).subscribe((widgetData: IWidgetData) => {
      this.dpStore.setState({widgetData: [widgetData]});
    });
  }

  private addEventListener() {
    this.dpStore.select('activeWidgetAction').pipe(
      filter(data => !!data),
      filter(data => !!!data.find(action => {
        console.log(action);
        return action.actionType === EActionTypes.DISPLAY_FORM;
      })),
      switchMap(data => {
        const actionRequest = data
          .map(action => this.dynamicMenuService
            .executePageAction(this.moduleKey, action.options.actionKey, action.options.pageUID));
        return combineLatest(actionRequest);
      }),
      takeUntil(this.destroy$)
    ).subscribe(actions => {
      console.log('NOT DISPLAY_FORM actions', actions);
      this.dpStore.setState({activeWidgetAction: []});
    }); // нужен ли ключ при удалении формы

    combineLatest(this.dpStore.select('activeWidgetAction'), this.dpStore.select('forms')).pipe(
      filter(data => !!data),
      filter(([actions, data]) => !!actions.find(action => action.actionType === EActionTypes.DISPLAY_FORM)),
      switchMap(([actions, data]) => {
        const key = actions.find(action => action.actionType === EActionTypes.DISPLAY_FORM).options.formKey;
        const formData = data.find(obj => obj.key === key);
        this.openDialog(formData);
        const action = actions.find(action => action.actionType === EActionTypes.CREATE || action.actionType === EActionTypes.UPDATE);
        return combineLatest(of(action), this.dialogRef.afterClosed());
      }),
      filter(([action, onSubmit]) => {
        this.dpStore.setState({activeWidgetAction: []});
        return !!onSubmit;
      }),
      switchMap(([action, onSubmit]) => {
        // skipUntil(of(onSubmit));
        console.log('after submit', action);
        console.log('after submit 2', onSubmit);
        return [action, onSubmit];
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  openDialog(data: IFormWidget): void {
    this.dialogRef = this.dialog.open(ModalComponent, {
      width: "50%",
      data: data
    });
  }
}
