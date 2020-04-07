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
  public childrensForMenu: NavData[];
  private changes: MutationObserver;
  public element: HTMLElement;
  constructor(@Inject(DOCUMENT) _document?: any, private callRequestForGeringModules? : DynamicMenuService) { //изменить название callListMenu, которое будет отображать смыслою нагрузку
    
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });

    this.dynamicMenuChildrens ();
  }

  private dynamicMenuChildrens() : void {
    this.callRequestForGeringModules.getModules().subscribe(res => {
      this.childrensForMenu = res.map( elem => {
        const tempForChildren = this.dynamicMenuChildrensActions(elem.moduleName);
        return {
          name: `${elem.displayName}`,
          url: `/${elem.moduleName}`,
          children: tempForChildren,
          icon: 'icon-puzzle'
          };
      });
    });

    const duplicateDetected = this.childrensForMenu.some( elem => {
      return this.customNavItems.some( item => {
        return elem.name == item.name;
      })
    });

    if (!duplicateDetected) {
      this.childrensForMenu.forEach( (elem, i) => {
        this.customNavItems.splice(i + 1, 0, elem);
      });
    }

  }

  private dynamicMenuChildrensActions(nameOfModule) : object  { 
    let tempAnswer: object[];
     this.callRequestForGeringModules.getModuleActions(nameOfModule).subscribe(res => {
      tempAnswer = res.map(elem => { 
        return {
          name: `${elem.displayName}`,
          url: `/${nameOfModule}/${elem.actionName}`,
          icon: 'icon-puzzle'
        };
     });
    });
    return tempAnswer;
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}
