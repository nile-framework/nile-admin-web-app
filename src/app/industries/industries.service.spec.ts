import { TestBed, inject } from '@angular/core/testing';

import { IndustriesService } from './industries.service';

describe('IndustriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndustriesService]
    });
  });

  it('should be created', inject([IndustriesService], (service: IndustriesService) => {
    expect(service).toBeTruthy();
  }));
});
