import {Component, Input, OnInit} from "@angular/core";
import {IWidgetConfig} from "../../interfaces/IWidgetConfig";
import {IWidgetEvent} from "../../interfaces/IWidgetEvent";
import {NzFormatEmitEvent, NzTreeNodeOptions} from "ng-zorro-antd";
import {IWidgetEventAction} from "../../interfaces/IWidgetEventAction";
import {DynamicPageStoreService} from "../dynamic-page-services/dynamic-page-store.service";

@Component({
  selector: 'app-dynamic-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.scss']
})
export class TreeListComponent implements OnInit {
  private _treeListConfig: IWidgetConfig = null;
  private events: IWidgetEvent[];

  private listMock: NzTreeNodeOptions[] = [
    {
      title: 'Node1',
      key: '1',
      children: [
        {
          title: 'Node1-1',
          key: ''
        },
        {
          title: 'Node1-2',
          key: ''
        },
        {
          title: 'Node1-3',
          key: ''
        },
        {
          title: 'Node1-4',
          key: ''
        },
        {
          title: 'Node1-5',
          key: ''
        },
      ]
    },
    {
      title: 'Node2',
      key: '2',
      children: [
        {
          title: 'Node2-1',
          key: ''
        },
        {
          title: 'Node2-2',
          key: ''
        },
        {
          title: 'Node2-3',
          key: ''
        },
        {
          title: 'Node2-4',
          key: ''
        },
        {
          title: 'Node2-5',
          key: ''
        },
        {
          title: 'Node2-6',
          key: ''
        },
        {
          title: 'Node2-7',
          key: ''
        },
        {
          title: 'Node2-8',
          key: ''
        },
        {
          title: 'Node2-9',
          key: ''
        },
        {
          title: 'Node2-10',
          key: ''
        },
      ]
    },

  ];

  @Input('treeListConfig') set treeListConfig(value: IWidgetConfig) {
    this._treeListConfig = value;
    this.events = this.treeListConfig.options.events.value;
  };

  get treeListConfig() {
    return this._treeListConfig;
  }


  constructor(private dpStore: DynamicPageStoreService) {
  }

  ngOnInit(): void {
  }

  treeNodeClicked($event: NzFormatEmitEvent) {
    if (!$event.node.children.length) {
      this.events.filter(event => event.eventType == 'ON_SELECT').forEach(event => {
        let storeData: IWidgetEventAction[] = [];
        event.actions.forEach(action => storeData.push(action));
        this.dpStore.setState({widgetAction: storeData});
      })
    }
  }
}
