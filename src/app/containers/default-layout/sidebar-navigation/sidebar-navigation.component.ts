import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component, EventEmitter,
  HostBinding,
  Input, Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {NzTreeComponent, NzTreeNode, NzTreeNodeOptions} from 'ng-zorro-antd';

@Component({
  selector: 'app-sidebar-nav-custom',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: ['./sidebar-navigation.component.scss', './scrollbar-styles.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarNavigationComponent implements AfterContentChecked {
  private _navData: NzTreeNodeOptions[] = [];
  private isNavLoaded: boolean = false;

  @Input('activePage') activePage: string;

  @Input('navData') set navData(value: NzTreeNodeOptions[]) {
    this._navData = value;
    if (this.navData.length) { this.isNavLoaded = false; }
    this.cd.detectChanges();
  }

  get navData(): NzTreeNodeOptions[] {
    return this._navData;
  }

  @Output() onNavItemClicked = new EventEmitter<NzTreeNode[]>();

  @Output() onNavigationLoaded = new EventEmitter<NzTreeNode[]>();

  @HostBinding('class.app-tree-node') public _nzTreeNodeClass = true;
  @ViewChild('tree') nzTree: NzTreeComponent;

  ngAfterContentChecked(): void {
    if (!this.isNavLoaded && this.navData && this.navData.length) {
      this.isNavLoaded = true;

      let activePage: NzTreeNode = null;
      this.nzTree.getTreeNodes().forEach(rootNode => {
        if (!activePage) { activePage = this.getNodeWithChildren(rootNode)
          .filter(node => node.key)
          .find(node => node.key.includes(this.activePage));
        }
      });

      if (activePage) {
        activePage.isChecked = true;
        [...this.getNodeParents(activePage)].forEach((node: NzTreeNode) => node.isExpanded = true);
        this.onNavigationLoaded.emit([...this.getNodeParents(activePage), activePage]);
      }
    }
  }

  constructor(private cd?: ChangeDetectorRef) {
  }

  nzNavItemClicked(e): void {
    if (e.node.children && e.node.children.length) {
      e.node.isExpanded = !e.node.isExpanded;
    } else {
      this.nzTree.getTreeNodes().forEach(node => this.switchOffCheckedNodes(node));
      const nodeWithParents = [...this.getNodeParents(e.node), e.node];

      nodeWithParents.forEach((node: NzTreeNode) => {
        node.isChecked = true;
      });

      this.onNavItemClicked.emit(nodeWithParents);
    }
  }

  getNodeParents(node: NzTreeNode): NzTreeNode[] {
    return node.parentNode
      ? [...this.getNodeParents(node.parentNode), node.parentNode]
      : [];
  }

  getNodeWithChildren(node: NzTreeNode): NzTreeNode[] {
    const array = [node];
    if (node.children) { node.children.forEach(childNode => array.push(...this.getNodeWithChildren(childNode))); }
    return array;
  }

  switchOffCheckedNodes(node: NzTreeNode) {
    node.isChecked = false;
    node.children.forEach(childNode => this.switchOffCheckedNodes(childNode));
  }
}
