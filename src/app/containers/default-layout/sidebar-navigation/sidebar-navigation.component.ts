import {AfterViewInit, Component, HostBinding, Input, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";
import {NzTreeComponent, NzTreeNode, NzTreeNodeOptions} from "ng-zorro-antd";
import {Observable} from "rxjs";
import {delay, tap} from "rxjs/operators";

@Component({
  selector: 'app-sidebar-nav-custom',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: ['./sidebar-navigation.component.scss', './scrollbar-styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarNavigationComponent implements AfterViewInit {
  @Input('navData') navData: NzTreeNodeOptions[] = [];
  @HostBinding('class.app-tree-node') public _nzTreeNodeClass = true;
  @ViewChild('tree') nzTree: NzTreeComponent;

  constructor(private router?: Router) {
    this.router.events.subscribe(() => {
      this.expandNavMenu()
    })
  }

  ngAfterViewInit(): void {
    new Observable(subscriber => {
      subscriber.next(null)
    }).pipe(
      delay(0),
      tap(() => this.expandNavMenu())
    ).subscribe();
  }

  expandNavMenu() {
    this.nzTree.getCheckedNodeList().forEach(node => this.switchOffCheckedNodes(node));
    let activeNode = this.nzTree.getTreeNodes().find(node => this.router.url.includes(node.key));
    if (activeNode) {
      this.getNodeWithChildren(activeNode)
        .filter(node => this.router.url.includes(node.key))
        .forEach((node: NzTreeNode) => {
          node.isChecked = true;
          if (node.children && node.children.length) node.isExpanded = true;
        })
    }
  }

  nzNavItemClicked(e): void {
    if (e.node.children && e.node.children.length) {
      e.node.isExpanded = !e.node.isExpanded;
    } else {
      this.nzTree.getCheckedNodeList().forEach(node => this.switchOffCheckedNodes(node));
      [e.node, ...this.getNodeParents(e.node)].forEach((node: NzTreeNode) => {
        node.isChecked = true;
      });

      let route = e.node.key.split("/").filter(r => r !== "");
      this.router.navigate(route);
    }
  }

  getNodeParents(node: NzTreeNode) {
    return node.parentNode
      ? [node.parentNode, ...this.getNodeParents(node.parentNode)]
      : [];
  }

  getNodeWithChildren(node: NzTreeNode): NzTreeNode[] {
    let array = [node];
    node.children.forEach(childNode => array.push(...this.getNodeWithChildren(childNode)));
    return array;
  }

  switchOffCheckedNodes(node: NzTreeNode) {
    node.isChecked = false;
    node.children.forEach(childNode => this.switchOffCheckedNodes(childNode));
  }
}
