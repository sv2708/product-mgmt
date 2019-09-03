import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyLandComponent } from './supply-land.component';

describe('SupplyLandComponent', () => {
  let component: SupplyLandComponent;
  let fixture: ComponentFixture<SupplyLandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyLandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
