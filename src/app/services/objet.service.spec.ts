import { TestBed } from '@angular/core/testing';

import { ObjetService } from './objet.service';

describe('ObjetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObjetService = TestBed.get(ObjetService);
    expect(service).toBeTruthy();
  });
});
