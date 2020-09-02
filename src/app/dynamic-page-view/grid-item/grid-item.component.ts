import {Component, HostBinding, Input} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent {
  componentsArray: any[];

  @Input('areaName') areaName: string;
  @Input('gridAreaName') gridAreaName: string;
  @HostBinding('style.grid-area') gridArea;
  @HostBinding('style.display') display;
  @HostBinding('style.grid-template-areas') areaGridTemplate;
  @HostBinding('style.grid-template-columns') gridTemplateColumns;
  @HostBinding('style.grid-template-rows') gridTemplateRows;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.gridArea = this.sanitizer.bypassSecurityTrustStyle(`${this.gridAreaName}`);
  }
}
