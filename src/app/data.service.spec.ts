import { TestBed, inject } from '@angular/core/testing';

import { DataService } from './data.service';
import {HttpModule} from "@angular/http";

describe('CfDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService],
      imports:[HttpModule]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
});
