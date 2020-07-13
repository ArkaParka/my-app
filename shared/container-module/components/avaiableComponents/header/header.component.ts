import { Component, OnInit, HostListener, Output, EventEmitter, ViewChild } from '@angular/core';
import { HeaderForProductsService } from './header.service';
import { NzFormatEmitEvent } from 'ng-zorro-antd/tree';
import {ModalDirective} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderForProductsComponent implements OnInit {

  public title = "Реализовать требования Pr-1026";
  public status = 'Утвержденно';
  public detector = false;
  public tasks;

  constructor(private headerForProductsService: HeaderForProductsService) { }

  ngOnInit(): void {

  }

  getTasks() {
    this.headerForProductsService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

}
