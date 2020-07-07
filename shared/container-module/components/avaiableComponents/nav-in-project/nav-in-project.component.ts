import { Component, OnInit, Input } from '@angular/core';
import { NavInProjectService } from './nav-in-project.service';

@Component({
  selector: 'app-nav-in-project',
  templateUrl: './nav-in-project.component.html',
  styleUrls: ['./nav-in-project.component.scss']
})
export class NavInProjectComponent implements OnInit {
  public listOfTabs;

  constructor(private navInProjectService: NavInProjectService) { }

  ngOnInit(): void {
    this.navInProjectService.getTabsNames().subscribe(data => {
      this.listOfTabs = data;
    });
  }
  
}
