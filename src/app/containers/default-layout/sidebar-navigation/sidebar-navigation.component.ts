import {
  ChangeDetectorRef,
  Component, EventEmitter,
  HostBinding,
  Input, Output,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import {Router} from "@angular/router";
import {NzTreeComponent, NzTreeNode, NzTreeNodeOptions} from "ng-zorro-antd";

@Component({
  selector: 'app-sidebar-nav-custom',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: ['./sidebar-navigation.component.scss', './scrollbar-styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarNavigationComponent {
  private _navData: NzTreeNodeOptions[] = [];

  @Input('navData') set navData(value: NzTreeNodeOptions[]) {
    this._navData = value;
    this.cd.detectChanges();
  };

  get navData(): NzTreeNodeOptions[] {
    return this._navData;
  }

  @Output() onNavItemClicked = new EventEmitter<NzTreeNode[]>();


  @HostBinding('class.app-tree-node') public _nzTreeNodeClass = true;
  @ViewChild('tree') nzTree: NzTreeComponent;


  constructor(private cd?: ChangeDetectorRef) {
  }

  nzNavItemClicked(e): void {
    if (e.node.children && e.node.children.length) {
      e.node.isExpanded = !e.node.isExpanded;
    } else {
      this.nzTree.getTreeNodes().forEach(node => this.switchOffCheckedNodes(node));
      let nodeWithParents = [...this.getNodeParents(e.node), e.node];

      nodeWithParents.forEach((node: NzTreeNode) => {
        node.isChecked = true;
      });


      this.onNavItemClicked.emit(nodeWithParents);
      // let route = e.node.key.split("/").filter(r => r !== "");
      // this.router.navigate(route);
    }
  }

  getNodeParents(node: NzTreeNode) {
    return node.parentNode
      ? [...this.getNodeParents(node.parentNode), node.parentNode]
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
