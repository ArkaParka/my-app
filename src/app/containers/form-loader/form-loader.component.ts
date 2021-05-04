import {Component} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {IModulePageConfiguration} from '../../models/IModulePageConfiguration';
import {mergeMap, tap} from 'rxjs/operators';
import {DynamicMenuService} from '../../services/dynamic-menu.service';
import {RoutingService} from '../../services/routing.service';
import {DocumentBaseComponent} from "../document-base.component";
import {Observable} from "rxjs";
import {BreadcrumbsStoreService} from '../../services/breadcrumbs-store.service';

@Component({
  selector: 'app-form-loader',
  templateUrl: './form-loader.component.html',
  styleUrls: ['./form-loader.component.scss']
})
export class FormLoaderComponent extends DocumentBaseComponent {

  private moduleKey: string;
  private configPath: string;
  private id: string;
  public viewType;
  public dataForComponent: {
    moduleKey: string,
    configPath: string,
    id: string,
    pageConfiguration: IModulePageConfiguration
  };
  public isFormLoading: boolean = true;

  constructor(private dynamicMenuService: DynamicMenuService,
              private rs: RoutingService,
              private route: ActivatedRoute,
              private bcStore: BreadcrumbsStoreService) {
    super();

    this.route.params.pipe(
      mergeMap(params => this.setupRouteParams(params)),
      tap(resp => this.loadForm(resp))
    ).subscribe();
  }

  setupRouteParams(params: Params): Observable<any> {
    this.moduleKey = params['moduleKey'];
    this.configPath = params['configPath'];
    this.id = params['id'];
    this.rs.emit(params);
    this.bcStore.setState({tab: {title: '', key: ''}, tree_lists: []});
    this.isFormLoading = true;
    return this.dynamicMenuService.getModulePageConfiguration(this.moduleKey, this.configPath);
  }

  loadForm(resp) {
    this.dataForComponent = {
      moduleKey: this.moduleKey,
      configPath: this.configPath,
      id: this.id,
      pageConfiguration: resp
    };
    this.viewType = resp.viewConfig.type;
    this.isFormLoading = false;
  }
}
