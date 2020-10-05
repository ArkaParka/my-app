import {Component} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {IModulePageConfiguration} from '../../models/IModulePageConfiguration';
import {mergeMap, takeUntil, tap} from 'rxjs/operators';
import {DynamicMenuService} from '../../services/dynamic-menu.service';
import {RoutingService} from "../../services/routing.service";
import {DocumentBaseComponent} from "../document-base.component";
import {Observable} from "rxjs";

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
    pageConfiguration: IModulePageConfiguration
  };
  public isFormLoading: boolean = true;

  constructor(private dynamicMenuService: DynamicMenuService,
              private rs: RoutingService,
              private route: ActivatedRoute) {
    super();

    this.route.params.pipe(
      mergeMap(params => this.setupRouteParams(params)),
      tap(resp => this.loadForm(resp))
    ).subscribe();
  }

  setupRouteParams(params: Params): Observable<any> {
    this.moduleKey = params['moduleKey'];
    this.configPath = params['configPath'];
    this.rs.emit(params);
    this.isFormLoading = true;
    return this.dynamicMenuService.getModulePageConfiguration(this.moduleKey, this.configPath)
  }

  loadForm(resp) {
    this.dataForComponent = {
      moduleKey: this.moduleKey,
      configPath: this.configPath,
      pageConfiguration: resp
    };
    this.viewType = resp.viewConfig.type;
    this.isFormLoading = false;
  }
}
