import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorLandComponent } from './vendor-land.component';

describe('VendorLandComponent', () => {
  let component: VendorLandComponent;
  let fixture: ComponentFixture<VendorLandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorLandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
