import {Component} from "@angular/core";
import {DynamicMenuService} from "../../services/dynamic-menu.service";
import {ActivatedRoute, Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {IBreadCrumbsItem} from "../../models/IBreadCrumbsItem";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss']
})
export class HomePageComponent {
  private availableModules = [];

  private breadcrumbsModule: IBreadCrumbsItem = null;

  constructor(private dynamicMenuService: DynamicMenuService,
              private route: ActivatedRoute,
              private router: Router,) {
    this.route.params.pipe(
      tap(params=>{
        console.log('url params',params)
      })
    ).subscribe()

    this.dynamicMenuService.getModules().subscribe(moduleResponse => {
      moduleResponse.forEach(mr => {
        this.availableModules.push({
          title: mr.module.moduleDisplayName,
          nodeName: mr.nodeName,
          key: `/form-loader/${mr.nodeName}`
        });
      })
    });
  }
}
