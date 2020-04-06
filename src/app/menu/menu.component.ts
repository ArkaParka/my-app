import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: '<h3>Test</h3>'
})

export class MenuComponent implements OnInit {

  constructor(public router : Router) {    
  }

  ngOnInit(): void {
    
  }

}
