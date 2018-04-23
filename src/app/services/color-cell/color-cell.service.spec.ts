import { TestBed, inject } from '@angular/core/testing';

import { ColorCellService } from './color-cell.service';

describe('ColorCellService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColorCellService]
    });
  });

  it('should be created', inject([ColorCellService], (service: ColorCellService) => {
    expect(service).toBeTruthy();
  }));
});
