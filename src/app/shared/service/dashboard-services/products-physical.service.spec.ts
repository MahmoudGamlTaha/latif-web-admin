import { TestBed } from '@angular/core/testing';

import { ProductsPhysicalService } from './Blogs.service';

describe('ProductsPhysicalService', () => {
  let service: ProductsPhysicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsPhysicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
