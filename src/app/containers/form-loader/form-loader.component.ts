import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ModulePageConfiguration} from '../../models/ModulePageConfiguration.interface';
import {Subject} from 'rxjs';
import {switchMap, takeUntil, tap} from 'rxjs/operators';
import {DynamicMenuService} from '../../services/dynamic-menu.service';
import {log} from "ng-zorro-antd";

@Component({
  selector: 'app-form-loader',
  templateUrl: './form-loader.component.html',
  styleUrls: ['./form-loader.component.scss']
})
export class FormLoaderComponent implements OnDestroy {

  @Input('moduleKey') set moduleKey(value) {
    this._moduleKey = value;
  }

  @Input('configPath') set configPath(value) {
    this._configPath = value;
    this.loadForm();
  }

  get moduleKey() {
    return this._moduleKey;
  }

  get configPath() {
    return this._configPath;
  }

  _moduleKey: string;
  _configPath: string;
  public viewType;
  public dataForComponent: {
    moduleKey: string,
    configPath: string,
    pageConfiguration: ModulePageConfiguration
  };
  public isFormLoading: boolean = true;

  destroy$: Subject<boolean> = new Subject<boolean>();


  loadForm() {
    this.isFormLoading = false;
    this.dynamicMenuService.getModulePageConfiguration(this.moduleKey, this.configPath).pipe(
      takeUntil(this.destroy$)
    ).subscribe(resp => {
      this.dataForComponent = {
        moduleKey: this._moduleKey,
        configPath: this._configPath,
        pageConfiguration: resp
      };
      this.viewType = resp.viewConfig.type;
      this.isFormLoading = false;
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  constructor(private dynamicMenuService: DynamicMenuService, private route: ActivatedRoute) {}
}
