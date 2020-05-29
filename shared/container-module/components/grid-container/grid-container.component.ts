import {ChangeDetectorRef, Component, HostBinding, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {BreakpointObserver, MediaMatcher} from "@angular/cdk/layout";
import {BreakpointState} from "@angular/cdk/layout/breakpoints-observer";

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.scss']
})
export class GridContainerComponent implements OnInit {

  private _gridTemplate;
  get gridTemplate() {
    return this._gridTemplate
  };

  @Input('grid-template') set gridTemplate(gridTemplate) {
    this._gridTemplate = gridTemplate;
    this.breakpointObserver.observe([this.mediaExtraSmall, this.mediaSmall, this.mediaBig]).subscribe(res => this.mediaCb(res));
    this.cd.detectChanges();
    console.log(gridTemplate)
  };

  @HostBinding('style.grid-auto-rows') gridAutoRows;
  @HostBinding('style.grid-template-areas') gridTA;

  mediaExtraSmall = '(max-width: 500px)';
  mediaSmall = '(max-width: 991px)';
  mediaBig = '(min-width: 992px)';

  constructor(private sanitizer: DomSanitizer, private breakpointObserver: BreakpointObserver, private cd:ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.gridAutoRows = this.sanitizer.bypassSecurityTrustStyle(`minmax(100px,auto)`);
  }

  mediaCb = (res: BreakpointState) => {
    let breakpoint = Object.keys(res.breakpoints).find(key => res.breakpoints[key] === true);
    switch (breakpoint) {
      case this.mediaExtraSmall: {
        this.gridTA = this.sanitizer.bypassSecurityTrustStyle(`${this.gridTemplate.gridTemplateExtraSmall.join(' ')}`);
        break;
      }
      case this.mediaSmall: {
        this.gridTA = this.sanitizer.bypassSecurityTrustStyle(`${this.gridTemplate.gridTemplateSmall.join(' ')}`);
        break;
      }
      case this.mediaBig: {
        this.gridTA = this.sanitizer.bypassSecurityTrustStyle(`${this.gridTemplate.gridTemplateBig.join(' ')}`);
        break;
      }
    }
    console.log(this.gridTA)
  }

}
