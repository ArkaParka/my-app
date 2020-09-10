import {Component, Input, OnInit} from "@angular/core";
import {ITabTree} from "../../interfaces/ITabTree";
import {IWidgetConfig} from "../../interfaces/IWidgetConfig";

@Component({
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabTreeComponent implements OnInit {
  @Input() widgetOptions: ITabTree;

  private tabs: { title: string, config: { widgetConfig: IWidgetConfig } }[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.tabs = this.widgetOptions.tabs.value;
  }
}
