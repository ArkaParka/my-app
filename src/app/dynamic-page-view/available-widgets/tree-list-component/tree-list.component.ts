import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {IWidgetConfig} from "../../interfaces/IWidgetConfig";
import {EEventTypes, IWidgetEvent} from "../../interfaces/IWidgetEvent";
import {NzFormatEmitEvent, NzTreeNodeOptions} from "ng-zorro-antd";
import {IWidgetEventAction} from "../../interfaces/IWidgetEventAction";
import {DynamicPageStoreService} from "../../dynamic-page-services/dynamic-page-store.service";
import {ITreeListDataResponse} from "../../interfaces/ITreeListDataResponse";
import {ITreeListDataValue} from "../../interfaces/ITreeListDataValue";

@Component({
  selector: 'app-dynamic-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeListComponent {
  private _treeListConfig: IWidgetConfig = null;
  private events: IWidgetEvent[];
  private treeDataTypes: { id: string, dataType: string }[] = [];
  public _treeListData: NzTreeNodeOptions[] = [];

  @Input('treeListConfig') set treeListConfiguration(value: { widgetConfig: IWidgetConfig, widgetData: ITreeListDataResponse }) {
    this._treeListConfig = value.widgetConfig;
    this.events = this.treeListConfig.options.events.value;

    value.widgetData.data.forEach(treeNode => {
      this._treeListData.push({
        title: treeNode.title,
        key: String(treeNode?.id?.id) + '/' + treeNode?.id?.type,
        children: this.getTreeNodeChildren(treeNode.children)
      });
      this.treeDataTypes.push({id: String(treeNode?.id?.id), dataType: treeNode?.id?.type});
    });
  };


  get treeListConfig() {
    return this._treeListConfig;
  }

  constructor(private dpStore: DynamicPageStoreService) {
  }

  private getTreeNodeChildren(treeNode: ITreeListDataValue[]): NzTreeNodeOptions[] {
    let result: NzTreeNodeOptions[] = [];
    treeNode.forEach(node => {
      result.push({
        title: node.title,
        key: String(node?.id?.id) + '/' + node?.id?.type,
        children: this.getTreeNodeChildren(node.children)
      });
      this.treeDataTypes.push({id: String(node?.id?.id), dataType: node?.id?.type});
    });
    return result;
  }

  treeNodeClicked($event: NzFormatEmitEvent) {
    let dataType = this.treeDataTypes.find(dataType => $event.node.key === dataType.id + '/' + dataType.dataType);
    this.events.filter(event => event.eventType === EEventTypes.ON_SELECT)
      .filter(event => event.dataType === dataType.dataType)
      .forEach(event => {
        let storeData: IWidgetEventAction[] = [];
        event.actions.forEach(action => storeData.push(action));
        this.dpStore.setState({widgetAction: storeData});
      });

    if (dataType.id)
      this.dpStore.setState({widgetDataRequest: {id: dataType.id, type: dataType.dataType, key: null}});
  }
}
