import {
  AfterContentChecked,
  Component, ElementRef,
  EventEmitter, Input,
  Output, ViewChild
} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {IModuleInfo} from "../../../models/IModuleInfo";

@Component({
  selector: 'app-active-module-buttons',
  templateUrl: 'module-buttons.component.html',
  styleUrls: ['module-buttons.component.scss'],
})
export class ModuleButtonsComponent implements AfterContentChecked {
  @Input('modules') availableModules: IModuleInfo[];
  @ViewChild('widgetsContent') public widgetsContent: ElementRef<any>;
  @Output() onModuleClick = new EventEmitter<IModuleInfo>();

  private hideOverflowButtons$ = new BehaviorSubject<boolean>(true);

  ngAfterContentChecked() {
    if (this.widgetsContent && this.widgetsContent.nativeElement) {
      if (this.widgetsContent.nativeElement.offsetHeight < this.widgetsContent.nativeElement.scrollHeight ||
        this.widgetsContent.nativeElement.offsetWidth < this.widgetsContent.nativeElement.scrollWidth)
        this.hideOverflowButtons$.next(false);
      else this.hideOverflowButtons$.next(true);
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

  moduleButtonClicked(module: IModuleInfo) {
    this.onModuleClick.emit(module);
  }
}
