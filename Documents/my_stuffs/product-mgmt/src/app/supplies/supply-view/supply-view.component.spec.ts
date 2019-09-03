import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyViewComponent } from './supply-view.component';

describe('SupplyViewComponent', () => {
  let component: SupplyViewComponent;
  let fixture: ComponentFixture<SupplyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
