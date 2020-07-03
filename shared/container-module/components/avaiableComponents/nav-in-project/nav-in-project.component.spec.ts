import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavInProjectComponent } from './nav-in-project.component';

describe('NavInProjectComponent', () => {
  let component: NavInProjectComponent;
  let fixture: ComponentFixture<NavInProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavInProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavInProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
