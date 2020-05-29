import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {

  @Input('gridAreaName') gridAreaName: string;
  @HostBinding('style.grid-area') gridArea;


  @Input('value') value;

  constructor(private sanitizer: DomSanitizer) {
  }


  ngOnInit(): void {
    if (this.gridAreaName) {
      this.gridArea = this.sanitizer.bypassSecurityTrustStyle(`${this.gridAreaName}`);
    }
  }
}
