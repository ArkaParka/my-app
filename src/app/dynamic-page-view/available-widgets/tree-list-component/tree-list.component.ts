import {Component, Input, OnInit} from "@angular/core";
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
  styleUrls: ['./tree-list.component.scss']
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
        key: treeNode.id.toString(),
        children: this.getTreeNodeChildren(treeNode.children)
      });
      this.treeDataTypes.push({id: treeNode.id.toString(), dataType: treeNode.dataType});
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
        key: node.id.toString(),
        children: this.getTreeNodeChildren(node.children)
      });
      this.treeDataTypes.push({id: node.id.toString(), dataType: node.dataType});
    });
    return result;
  }

  treeNodeClicked($event: NzFormatEmitEvent) {
    this.events.filter(event => event.eventType === EEventTypes.ON_SELECT)
      .filter(event => event.dataType === this.treeDataTypes.find(dataType => dataType.id === $event.node.key).dataType)
      .forEach(event => {
        let storeData: IWidgetEventAction[] = [];
        event.actions.forEach(action => storeData.push(action));
        this.dpStore.setState({widgetAction: storeData});
      })
  }
}
