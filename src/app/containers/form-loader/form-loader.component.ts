import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ModulePageConfiguration} from '../../models/ModulePageConfiguration.interface';
import {takeUntil} from 'rxjs/operators';
import {DynamicMenuService} from '../../services/dynamic-menu.service';
import {RoutingService} from "../../services/routing.service";
import {DocumentBaseComponent} from "../document-base.component";

@Component({
  selector: 'app-form-loader',
  templateUrl: './form-loader.component.html',
  styleUrls: ['./form-loader.component.scss']
})
export class FormLoaderComponent extends DocumentBaseComponent {

  private moduleKey: string;
  private configPath: string;
  public viewType;
  public dataForComponent: {
    moduleKey: string,
    configPath: string,
    pageConfiguration: ModulePageConfiguration
  };
  public isFormLoading: boolean = true;


  loadForm() {
    this.isFormLoading = false;
    this.dynamicMenuService.getModulePageConfiguration(this.moduleKey, this.configPath).pipe(
      takeUntil(this.destroy$)
    ).subscribe(resp => {
      this.dataForComponent = {
        moduleKey: this.moduleKey,
        configPath: this.configPath,
        pageConfiguration: resp
      };
      this.viewType = resp.viewConfig.type;
      this.isFormLoading = false;
    })
  }


  constructor(private dynamicMenuService: DynamicMenuService,
              private rs: RoutingService,
              private route: ActivatedRoute) {
    super();

    this.route.params.subscribe(params => {
      this.moduleKey = params['moduleKey'];
      this.configPath = params['configPath'];
      this.rs.emit(params);
      this.loadForm();
    })
  }
}
