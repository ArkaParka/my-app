import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-form-loader',
  templateUrl: './form-loader.component.html',
  styleUrls: ['./form-loader.component.scss']
})
export class FormLoaderComponent {
  moduleKey: string;
  configPath: string;

  gridTemplate: any;

  gridTemplate1 = {
    gridTemplateBig:
      [
        `"hd hd hd hd hd"`,
        `"sd main main main asd"`,
        `'sd main main main asd'`,
        `"ft ft ft ft ft"`,
      ],
    gridTemplateSmall: [
      `"hd hd"`,
      `"sd sd"`,
      `"main asd"`,
      `"ft ft"`
    ],
    gridTemplateExtraSmall: [
      `"hd"`,
      `"sd"`,
      `"main"`,
      `"asd"`,
      `"ft"`
    ]
  };

  gridTemplate2 = {
    gridTemplateBig:
      [
        `"hd hd hd"`,
        `"sd main main"`,
        `'asd main main'`,
        `"asd ft ft"`,
      ],
    gridTemplateSmall: [
      `"hd hd"`,
      `"sd sd"`,
      `"main asd"`,
      `"ft ft"`
    ],
    gridTemplateExtraSmall: [
      `"hd"`,
      `"sd"`,
      `"main"`,
      `"asd"`,
      `"ft"`
    ]
  };

  constructor(private route: ActivatedRoute) {
    this.gridTemplate = this.gridTemplate1;
    route.params.subscribe((params) => {
      this.moduleKey = params['moduleKey'];
      this.configPath = params['configPath'];
    });
  }

  template1 = () => {
    this.gridTemplate = {...this.gridTemplate1}
  };
  template2 = () => {
    this.gridTemplate = {...this.gridTemplate2}
  };


}
