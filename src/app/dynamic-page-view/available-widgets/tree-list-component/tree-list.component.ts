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
  private _treeListData: NzTreeNodeOptions[] = [];
  private events: IWidgetEvent[];

  @Input('treeListConfig') set treeListConfiguration(value: { widgetConfig: IWidgetConfig, widgetData: ITreeListDataResponse}) {
    this._treeListConfig = value.widgetConfig;
    this.events = this.treeListConfig.options.events.value;

    value.widgetData.data.forEach(treeNode => {
      this._treeListData.push({
        title: treeNode.title,
        key: treeNode.id.toString(),
        children: this.getTreeNodeChildren(treeNode.children)
      })
    });

    console.log(value.widgetData)
  };


  get treeListConfig() {
    return this._treeListConfig;
  }

  constructor(private dpStore: DynamicPageStoreService) {
  }

  private getTreeNodeChildren(treeNode: ITreeListDataValue[]): NzTreeNodeOptions[] {
    let result: NzTreeNodeOptions[] = [];
    treeNode.forEach(node => result.push(
      {
        title: node.title,
        key: node.id.toString(),
        children: this.getTreeNodeChildren(node.children)
      }
    ));
    return result;
  }

  treeNodeClicked($event: NzFormatEmitEvent) {
    if (!$event.node.children.length) {
      this.events.filter(event => event.eventType == EEventTypes.ON_SELECT).forEach(event => {
        let storeData: IWidgetEventAction[] = [];
        event.actions.forEach(action => storeData.push(action));
        this.dpStore.setState({widgetAction: storeData});
      })
    }
  }
}
