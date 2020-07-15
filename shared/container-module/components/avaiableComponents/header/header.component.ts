import { Component, OnInit, HostListener, Output, EventEmitter, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HeaderForProductsService } from './header.service';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import {ModalDirective} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderForProductsComponent {

  //@Input() input;

  public title = "Реализовать требования Pr-1026";
  public status = 'Утвержденно';
  public detector = true;
  public tasks;

  constructor(private headerForProductsService: HeaderForProductsService) { }

  ngOnInit(): void {
    //console.log('ngOnInit инпут', this.input?.node.origin.title);
  }

  getTasks() {
    this.headerForProductsService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

}
