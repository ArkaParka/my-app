import { Component, OnDestroy, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems, NavData } from '../../_nav';
import { DynamicMenuService } from '../../menu/dynamic-menu.service';
import { async } from 'rxjs/internal/scheduler/async';

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

  private dynamicMenuChildrens () : void {
    this.callRequestForGeringModules.getModules().subscribe(res => {
      this.childrensForMenu = res.map( elem => {
        const tempForChildren = this.dynamicMenuChildrensActions(elem.moduleName);
        console.log("Функция которая пришла", tempForChildren);
        return {
          name: `${elem.displayName}`,
          url: `/${elem.moduleName}`,
          children: tempForChildren,
          icon: 'icon-puzzle'
          };
      });
    });
    this.customNavItems.map(elem => {
      if (elem.name === "Menu") {
        elem.children = this.childrensForMenu;
        elem.children.map(elem => {
          this.dynamicMenuChildrensActions(elem);
        });
      }
    });
  }

  private dynamicMenuChildrensActions (nameOfModule) : any  { 
    let tempAnswer: object[];
     this.callRequestForGeringModules.getModuleActions(nameOfModule).subscribe(res => {
      tempAnswer = res.map(elem => { 
        return {
          name: `${elem.displayName}`,
          url: `/${elem.actionName}`,
          icon: 'icon-puzzle'
        };
     });
    });
    console.log("Ответ", tempAnswer);
    return tempAnswer;
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}
