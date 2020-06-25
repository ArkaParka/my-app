import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {NzNotificationService} from "ng-zorro-antd";
import {Injectable} from "@angular/core";

@Injectable()
export class DynamicMenuServiceInterceptor implements HttpInterceptor {
  constructor(private notificator: NzNotificationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (request.url.includes('pbs/modules'))
      return next.handle(request)
        .pipe(
          catchError((error) => {
            if (error instanceof HttpErrorResponse) {
              let errorMsg = error.message;
              this.notificator.error('Во время загрузки произошла ошибка!', errorMsg);
              return of({})
            }
          })
        );
    else return next.handle(request)
  }
}
