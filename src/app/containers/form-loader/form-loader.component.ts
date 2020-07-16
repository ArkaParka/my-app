import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ModulePageConfiguration } from '../../models/ModulePageConfiguration.interface';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { DynamicMenuService } from '../../services/dynamic-menu.service';

@Component({
  selector: 'app-form-loader',
  templateUrl: './form-loader.component.html',
  styleUrls: ['./form-loader.component.scss']
})
export class FormLoaderComponent {

  moduleKey: string;
  configPath: string;
  public viewType;
  public dataForComponent: {
    moduleKey: string,
    configPath: string,
    pageConfiguration: ModulePageConfiguration
  };
  //public pageConfiguration: ModulePageConfiguration;
  public isFormLoading: boolean = true;

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  constructor(private dynamicMenuService: DynamicMenuService, private route: ActivatedRoute) {
    route.params.pipe(
      switchMap((params) => {
        this.isFormLoading = false;
        this.moduleKey = params['moduleKey'];
        this.configPath = params['configPath'];
        return this.dynamicMenuService.getModulePageConfiguration(this.moduleKey, this.configPath);
      }),
      takeUntil(this.destroy$)
    )
    .subscribe(resp =>{
      this.dataForComponent = {
        moduleKey: this.moduleKey,
        configPath: this.configPath,
        pageConfiguration: resp
      };
      this.viewType = resp.viewConfig.type; 
    });
  }

}
