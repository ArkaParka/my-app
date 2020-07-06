import {Component, HostBinding, Input, ViewChild, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";
import {NzTreeComponent, NzTreeNode, NzTreeNodeOptions} from "ng-zorro-antd";

@Component({
  selector: 'app-sidebar-nav-custom',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: ['./sidebar-navigation.component.scss', './scrollbar-styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarNavigationComponent {
  @Input('navData') navData: NzTreeNodeOptions[] = [];
  @HostBinding('class.app-tree-node') public _nzTreeNodeClass = true;
  @ViewChild('tree') nzTree: NzTreeComponent;

  constructor(private router?: Router) {
  }


  nzNavItemClicked(e): void {
    if (e.node.children && e.node.children.length) {
      e.node.isExpanded = !e.node.isExpanded;
    } else {
      this.nzTree.getCheckedNodeList().forEach(node => this.switchCheckedNodes(node));
      [e.node, ...this.getNodeParents(e.node)].forEach(node => {
        node.isChecked = true;
      });
      let route = e.node.key.split("/").filter(r => r !== "");
      this.router.navigate(route);
    }
  }

  getNodeParents(node: NzTreeNode) {
    if (node.parentNode) {
      return [node.parentNode, ...this.getNodeParents(node.parentNode)];
    } else return []
  }

  switchCheckedNodes(node: NzTreeNode) {
    node.isChecked = false;
    node.children.forEach(childNode => this.switchCheckedNodes(childNode));
  }
}
