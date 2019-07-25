import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeSettingComponent } from './merge-setting.component';

describe('MergeSettingComponent', () => {
  let component: MergeSettingComponent;
  let fixture: ComponentFixture<MergeSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
