import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicMenuService } from './dynamic-menu.service';
import { navItems } from '../_nav';

@Component({
  selector: 'app-dashboard',
  template: '<h3>Test</h3>'
})

export class MenuComponent implements OnInit {

  @Output() onItem = new EventEmitter();

  constructor(public router : Router, private callListMenu : DynamicMenuService) {    
  }

  ngOnInit(): void {
    console.log("Список", this.callListMenu.getModules());
    const test = {
      name: 'Menu',
      url: '/menu',
      icon: 'icon-menu',
      children: [
        {
          name: 'Штатная структура',
          icon: 'icon-puzzle'
        },
        {
          name: 'Документы',
          icon: 'icon-puzzle'
        },
      ]
    }
    console.log("Создаваемое событие", test);
    this.onItem.emit(test);
  }

}
