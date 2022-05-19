import { TestBed } from '@angular/core/testing';

import { GiantBombService } from './giant-bomb.service';

describe('GiantBombService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GiantBombService = TestBed.get(GiantBombService);
    expect(service).toBeTruthy();
  });
});
