import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLandComponent } from './product-land.component';

describe('ProductLandComponent', () => {
  let component: ProductLandComponent;
  let fixture: ComponentFixture<ProductLandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductLandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
