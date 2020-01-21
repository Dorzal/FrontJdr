import { TestBed } from '@angular/core/testing';

import { InventaireItemService } from './inventaire-item.service';

describe('InventaireItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InventaireItemService = TestBed.get(InventaireItemService);
    expect(service).toBeTruthy();
  });
});
