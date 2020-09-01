import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {RoutingService} from "../../services/routing.service";
import {tap} from "rxjs/operators";

@Component({
  template: `<p>Заглавная страница модуля "{{currentModule}}"</p>`,
})
export class ModuleHomePageComponent {
  private currentModule: string;

  constructor(private route: ActivatedRoute,
              private rs: RoutingService) {
    this.route.params.pipe(
      tap(params => {
        this.currentModule = params['moduleKey'];
        this.rs.emit(params)
      }),
    ).subscribe()

  }
}
