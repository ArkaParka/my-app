import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.servise';
import { NzFormatEmitEvent, NzTreeNodeOptions } from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-nav-in-project',
  templateUrl: './nav-in-project.component.html',
  styleUrls: ['./nav-in-project.component.scss']
})
export class NavInProjectComponent implements OnInit {

  public nodes: NzTreeNodeOptions[];

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.testService.getProjectInfo().subscribe(data => {
      this.nodes = data;
    });
  }

  nzClick(event: NzFormatEmitEvent) {
    console.log('Click on tree');
  }

}
