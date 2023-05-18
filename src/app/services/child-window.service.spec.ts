import { TestBed } from '@angular/core/testing';

import { ChildWindowService } from './child-window.service';

describe('ChildWindowService', () => {
  let service: ChildWindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildWindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
