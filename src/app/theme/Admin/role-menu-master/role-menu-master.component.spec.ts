import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleMenuMasterComponent } from './role-menu-master.component';

describe('UserMasterComponent', () => {
  let component: RoleMenuMasterComponent;
  let fixture: ComponentFixture<RoleMenuMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleMenuMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleMenuMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
