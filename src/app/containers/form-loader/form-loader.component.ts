import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DynamicMenuService} from "../../services/dynamic-menu.service";

@Component({
  selector: 'app-form-loader',
  templateUrl: './form-loader.component.html',
  styleUrls: ['./form-loader.component.scss']
})
export class FormLoaderComponent {
  moduleKey: string;
  configPath: string;


  constructor(private route: ActivatedRoute, private dynamicMenuService: DynamicMenuService) {
    this.dynamicMenuService.test().subscribe(res => {
      console.log(res);
    });

    route.params.subscribe((params) => {
      this.moduleKey = params['moduleKey'];
      this.configPath = params['configPath'];
    });
  }


}
