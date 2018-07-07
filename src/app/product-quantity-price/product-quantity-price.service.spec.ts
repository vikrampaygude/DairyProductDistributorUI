import { TestBed, inject } from '@angular/core/testing';

import { ProductQuantityPriceService } from './product-quantity-price.service';

describe('ProductQuantityPriceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductQuantityPriceService]
    });
  });

  it('should be created', inject([ProductQuantityPriceService], (service: ProductQuantityPriceService) => {
    expect(service).toBeTruthy();
  }));
});
