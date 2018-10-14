import { TestBed, inject } from '@angular/core/testing';

import { GoalDataService } from './goal-data.service';

describe('GoalDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoalDataService]
    });
  });

  it('should be created', inject([GoalDataService], (service: GoalDataService) => {
    expect(service).toBeTruthy();
  }));
});
