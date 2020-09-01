import {Subject} from "rxjs";
import {OnDestroy} from "@angular/core";

export class DocumentBaseComponent implements OnDestroy {
  public destroy$ = new Subject<boolean>();

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
