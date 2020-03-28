import { TestBed } from '@angular/core/testing';

import { IssueCountFilterService } from './issue-count-filter.service';

describe('IssueCountFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IssueCountFilterService = TestBed.get(IssueCountFilterService);
    expect(service).toBeTruthy();
  });

  it('should be able to filter', () => {
    const service: IssueCountFilterService = TestBed.get(IssueCountFilterService);
    let userInfoList =[{"First name":"Imran","Sur name":"khan","Issue count":"3","Date of birth":"1978-01-02T00:00:00"},
    {"First name":"shahrukh","Sur name":"khan","Issue count":"8","Date of birth":"1979-02-08T00:00:00"},
    {"First name":"salman","Sur name":"khan","Issue count":"7","Date of birth":"1986-07-09T00:00:00"}];
    let selectedIssueCount="8";
    service.filter(userInfoList,selectedIssueCount);
    expect(service).toBeTruthy();
  });

 
});
