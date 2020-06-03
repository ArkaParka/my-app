import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DynamicLayoutConfig} from "../../../models/DynamicLayoutConfig";

@Component({
  selector: 'app-form-loader',
  templateUrl: './dynamic-layout-example.component.html',
  styleUrls: ['./dynamic-layout-example.component.scss']
})
export class DynamicLayoutExampleComponent {
  gridTemplate: any;

  gridConfig1: Array<DynamicLayoutConfig> = [
    {
      breakPoint: "(max-width: 767px)",
      areaNames: [],
      gridItems: [
        {
          areaName: "hd",
          alias: "viewComponent",
          services: []
        },
        {
          areaName: "sb",
          alias: "viewComponent",
          services: []
        },
        {
          areaName: "main",
          alias: "viewComponent",
          services: []
        },
        {
          areaName: "ft",
          alias: "viewComponent",
          services: []
        },
      ],
      gridTemplate: [
        "hd hd",
        "sb asb",
        "main main",
        "ft ft"
      ]
    },
    {
      breakPoint: "(min-width: 768px)",
      areaNames: [],
      gridItems: [
        {
          areaName: "hd",
          alias: "viewComponent",
          services: []
        },
        {
          areaName: "sb",
          alias: "viewComponent",
          services: []
        },
        {
          areaName: "main",
          alias: "viewComponent",
          services: []
        },
        {
          areaName: "ft",
          alias: "viewComponent",
          services: []
        },
      ],
      gridTemplate: [
        "hd hd hd hd",
        "sb  sb main main",
        "sb sb main main",
        "ft ft . ."
      ]
    }
  ];

  gridConfig2: Array<DynamicLayoutConfig> = [
    {
      breakPoint: "(max-width: 767px)",
      areaNames: [],
      gridItems: [
        {
          areaName: "hd",
          alias: "viewComponent",
          services: []
        },
        {
          areaName: "sb",
          alias: "viewComponent",
          services: []
        },
        {
          areaName: "main",
          alias: "viewComponent",
          services: []
        },
        {
          areaName: "ft",
          alias: "viewComponent",
          services: []
        },
        {
          areaName: "asb",
          alias: "viewComponent",
          services: []
        },
      ],
      gridTemplate: [
        "hd hd",
        "asb sb",
        "main main",
        "ft ft"
      ]
    },
    {
      breakPoint: "(min-width: 768px)",
      areaNames: [],
      gridItems: [
        {
          areaName: "hd",
          alias: "viewComponent",
          services: []
        },
        {
          areaName: "sb",
          alias: "viewComponent",
          services: []
        },
        {
          areaName: "main",
          alias: "viewComponent",
          services: []
        },
        {
          areaName: "ft",
          alias: "viewComponent",
          services: []
        },
        {
          areaName: "asb",
          alias: "viewComponent",
          services: []
        },
      ],
      gridTemplate: [
        "hd hd hd",
        "main main sb",
        "main main sb",
        "asb asb  ft"
      ]
    }
  ];



  constructor(private route: ActivatedRoute) {
    this.gridTemplate = this.gridConfig2
  }

  template1 = () => {
    this.gridTemplate=this.gridConfig1
  };
  template2 = () => {
    this.gridTemplate=this.gridConfig2
  };


}
