import { Component, OnDestroy, Inject, Input, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems, NavData } from '../../_nav';
import { DynamicMenuService } from '../../menu/dynamic-menu.service';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy, OnInit {

  public customNavItems;
  public sidebarMinimized = true;
  public childrensForMenu;
  private changes: MutationObserver;
  public element: HTMLElement;
  constructor (@Inject(DOCUMENT) _document?: any, private dynamicMenuService? : DynamicMenuService) {
    this.dynamicMenuChildrens();
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, { 
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnInit() {
    //this.dynamicMenuChildrens();
  }

  private async dynamicMenuChildrens() {

    let dynamicMenuServiceIsPromise = await this.dynamicMenuService.getModules().toPromise();
    this.customNavItems = navItems;

    const duplicateDetected = dynamicMenuServiceIsPromise.some(elem => {
      return this.customNavItems.some(item => {
        return elem.name == item.name;
      })
    });

    if (!duplicateDetected) {
      dynamicMenuServiceIsPromise.forEach( (elem, i) => {
        this.customNavItems.splice(i + 1, 0, elem);
      });
    }
   
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}
