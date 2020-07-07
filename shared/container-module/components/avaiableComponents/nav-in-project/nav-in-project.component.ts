import { Component, OnInit, Input } from '@angular/core';
import { TestService } from '../test.servise';
import { NzFormatEmitEvent, NzTreeNodeOptions } from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-nav-in-project',
  templateUrl: './nav-in-project.component.html',
  styleUrls: ['./nav-in-project.component.scss']
})
export class NavInProjectComponent implements OnInit {
  public listOfTabs;
  constructor(private testService: TestService) { }
  ngOnInit(): void {
    this.testService.getTabsNames().subscribe(data => {
      this.listOfTabs = data;
    });
  }
}

@Component({
  selector: 'nz-tab-content-nzTree',
  template: `
    <nz-tree [nzData]="nodes" nzBlockNode (nzClick)="nzClick($event)"></nz-tree>
  `
})
export class NzTabContentNzTreeComponent implements OnInit {
  @Input('tabName') tabName;
  public nodes: NzTreeNodeOptions[];
  constructor(private testService: TestService) { }
  ngOnInit(): void {
    this.testService.getProjectInfo(this.tabName).subscribe(data => {
      this.nodes = data;
    });
  }
  nzClick(event: NzFormatEmitEvent) {
    console.log('Click on tree');
  }
}
