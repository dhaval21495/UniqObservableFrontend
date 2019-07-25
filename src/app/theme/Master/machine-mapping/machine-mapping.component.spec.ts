import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineMappingComponent } from './machine-mapping.component';

describe('MachineMappingComponent', () => {
  let component: MachineMappingComponent;
  let fixture: ComponentFixture<MachineMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
