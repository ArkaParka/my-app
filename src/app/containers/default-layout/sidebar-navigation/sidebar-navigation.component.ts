import {Component, HostBinding, Input, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";
import {NzTreeNodeOptions} from "ng-zorro-antd";

@Component({
  selector: 'app-sidebar-nav-custom',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: ['./sidebar-navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarNavigationComponent {
  @Input('expanded') expanded: boolean = true;
  @Input('navData') navData: NzTreeNodeOptions[] = [];

  @HostBinding('class.app-tree-node') public _nzTreeNodeClass = true;

  constructor(private router?: Router) {
  }


  nzNavItemClicked(e): void {
    if (e.node.children && e.node.children.length) {
      e.node.isExpanded = !e.node.isExpanded;
    } else {
      let route = e.node.key.split("/").filter(r => r !== "");
      this.router.navigate(route);
    }
  }
}
