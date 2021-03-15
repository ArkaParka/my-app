import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {IWidgetConfig} from '../../interfaces/IWidgetConfig';
import {EEventTypes, IWidgetEvent} from '../../interfaces/IWidgetEvent';
import {NzFormatEmitEvent, NzTreeComponent, NzTreeNode, NzTreeNodeOptions} from 'ng-zorro-antd';
import {IWidgetEventAction} from '../../interfaces/IWidgetEventAction';
import {DynamicPageStoreService} from '../../dynamic-page-services/dynamic-page-store.service';
import {ITreeListDataResponse} from '../../interfaces/ITreeListDataResponse';
import {ITreeListDataValue} from '../../interfaces/ITreeListDataValue';
import {switchMap} from 'rxjs/operators';
import {EActionTypes} from '../../interfaces/EActionTypes';
import {of} from 'rxjs';

@Component({
  selector: 'app-dynamic-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeListComponent  {
  private _treeListConfig: IWidgetConfig = null;
  private events: IWidgetEvent[];
  private treeDataTypes: { id: string, dataType: string }[] = [];
  public _treeListData: NzTreeNodeOptions[] = [];

  @Input('index') index: any;
  @Output() onChanged = new EventEmitter<number>();
  change(index: number) {
    this.onChanged.emit(index);
  }
  @ViewChild('tree') nzTree: NzTreeComponent;

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
  }

  get treeListConfig() {
    return this._treeListConfig;
  }

  constructor(private dpStore: DynamicPageStoreService) {
    this.changeNode();
  }

  private changeNode() {
    this.dpStore.select('widgetAction').pipe(
      switchMap((events: IWidgetEventAction[]) => {
        const displayEvent: IWidgetEventAction = events
          .find(event => event.actionType === EActionTypes.DISPLAY_WIDGET);
        return of(displayEvent?.options?.widgetConfig?.options?.page_id?.value ? displayEvent : null);
      }),
    ).subscribe((displayEvent: IWidgetEventAction) => {
      if (displayEvent) {
        const id = displayEvent.options.widgetConfig.options.page_id.value;
        const type = displayEvent.options.widgetConfig.options.page_key.value;
        const key = id + '/' + type;

        let activePage: NzTreeNode = null;
        this.nzTree.getTreeNodes().forEach(rootNode => {
          activePage = this.getNodeWithChildren(rootNode).find(node => node.key === key);
          if (activePage)
            this.getNodeWithChildren(rootNode).forEach(node => node.isSelected = false);
        });

        if (activePage) {
          this.change(this.index);
          activePage.isChecked = true;
          activePage.isSelected = true;

          [...this.getNodeParents(activePage)].forEach((node: NzTreeNode) => node.isExpanded = true);
        }
      }
    });
  }

  getNodeWithChildren(node: any): NzTreeNode[] {
    const array = [node];
    if (node.children) { node.children.forEach(childNode => array.push(...this.getNodeWithChildren(childNode))); }
    return array;
  }

  getNodeParents(node: NzTreeNode): NzTreeNode[] {
    return node.parentNode
      ? [...this.getNodeParents(node.parentNode), node.parentNode]
      : [];
  }

  private getTreeNodeChildren(treeNode: ITreeListDataValue[]): NzTreeNodeOptions[] {
    const result: NzTreeNodeOptions[] = [];
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
    const dataType = this.treeDataTypes.find(dataType => $event.node.key === dataType.id + '/' + dataType.dataType);
    this.events.filter(event => event.eventType === EEventTypes.ON_SELECT)
      .filter(event => event.dataType === dataType.dataType)
      .forEach(event => {
        const storeData: IWidgetEventAction[] = [];
        event.actions.forEach(action => storeData.push(action));
        this.dpStore.setState({widgetAction: storeData});
      });

    if (dataType.id) {
      this.dpStore.setState({widgetDataRequest: {id: dataType.id, type: dataType.dataType, key: null}});
    }
  }
}
