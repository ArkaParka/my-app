import {
  AfterContentChecked,
  Component, ElementRef,
  Input, ViewChild
} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-active-module-buttons',
  templateUrl: 'module-buttons.component.html',
  styleUrls: ['module-buttons.component.scss'],
})
export class ModuleButtonsComponent implements AfterContentChecked {
  @Input('modules') availableModules: any[];
  @ViewChild('widgetsContent') public widgetsContent: ElementRef<any>;

  private menuOverflow$ = new BehaviorSubject<boolean>(false);

  ngAfterContentChecked() {
    if (this.widgetsContent && this.widgetsContent.nativeElement) {
      if (this.widgetsContent.nativeElement.offsetHeight < this.widgetsContent.nativeElement.scrollHeight ||
        this.widgetsContent.nativeElement.offsetWidth < this.widgetsContent.nativeElement.scrollWidth)
        this.menuOverflow$.next(false);
      else this.menuOverflow$.next(true);
    }
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: (this.widgetsContent.nativeElement.scrollLeft + 200),
      behavior: 'smooth'
    });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({
      left: (this.widgetsContent.nativeElement.scrollLeft - 200),
      behavior: 'smooth'
    });
  }
}
