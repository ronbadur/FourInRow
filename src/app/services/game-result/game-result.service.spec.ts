import { TestBed, inject } from '@angular/core/testing';

import { GameResultService } from './game-result.service';

describe('GameResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameResultService]
    });
  });

  it('should be created', inject([GameResultService], (service: GameResultService) => {
    expect(service).toBeTruthy();
  }));
});
