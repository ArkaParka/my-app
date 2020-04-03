import { Component, OnDestroy, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems, NavData } from '../../_nav';
import { DynamicMenuService } from '../../menu/dynamic-menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {

  public customNavItems = navItems;
  public sidebarMinimized = true;
  public childrensForMenu = [];
  private changes: MutationObserver;
  public element: HTMLElement;
  constructor(@Inject(DOCUMENT) _document?: any, private callListMenu? : DynamicMenuService) {
    
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
    this.dynamicMenuChildren ();
  }

  private dynamicMenuChildren () : void {
    this.callListMenu.getModules().subscribe(res => {
      this.childrensForMenu = res.map(elem => {
        return {
            name: `${elem.displayName}`,
            url: `/${elem.moduleName}`,
            icon: 'icon-puzzle'
          };;
    });
    });
    this.customNavItems.map(elem => {
      if (elem.name === "Menu") {
        elem.children = this.childrensForMenu;
      }
    });
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}
