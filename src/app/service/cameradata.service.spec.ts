import { TestBed, inject } from '@angular/core/testing';

import { CameradataService } from './cameradata.service';

describe('CameradataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CameradataService]
    });
  });

  it('should be created', inject([CameradataService], (service: CameradataService) => {
    expect(service).toBeTruthy();
  }));
});
