import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQuanityPriceComponent } from './product-quantity-price.component';

describe('ProductQuanityPriceComponent', () => {
  let component: ProductQuanityPriceComponent;
  let fixture: ComponentFixture<ProductQuanityPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductQuanityPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductQuanityPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
