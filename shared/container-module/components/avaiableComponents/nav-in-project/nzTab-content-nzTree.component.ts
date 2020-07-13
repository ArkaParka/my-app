import { Component, OnInit, Input } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NavInProjectService } from './nav-in-project.service';

@Component({
    selector: 'nz-tab-content-nzTree',
    template: `
      <nz-tree [nzData]="nodes" nzBlockNode (nzClick)="nzClick($event)"></nz-tree>
    `
  })
  export class NzTabContentNzTreeComponent implements OnInit {
    @Input('tabName') tabName;
    public nodes: NzTreeNodeOptions[];
    constructor(private navInProjectService: NavInProjectService) { }

    ngOnInit(): void {
      this.navInProjectService.getProjectInfo(this.tabName).subscribe(data => {
        this.nodes = data;
      });
    }

    nzClick(event: NzFormatEmitEvent) {

    }
  }