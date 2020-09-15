import {Component, Input, OnInit} from "@angular/core";
import {ITabTreeWidgetOptions} from "../../interfaces/ITabTreeWidgetOptions";
import {IWidgetConfig} from "../../interfaces/IWidgetConfig";

@Component({
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabTreeComponent implements OnInit {
  @Input() widgetOptions: ITabTreeWidgetOptions;

  private tabs: { title: string, config: { widgetConfig: IWidgetConfig } }[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.tabs = this.widgetOptions.tabs.value;
  }
}
