import { TestBed } from '@angular/core/testing';

import { WindowCommonService } from './window-common.service';

describe('WindowCommonService', () => {
  let service: WindowCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
