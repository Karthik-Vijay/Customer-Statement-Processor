import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IssueCountFilterService {
  userInfoList: any[];
  selectedIssueCount: any;
  userInfoToShow: any[];

  constructor() { }
  filter(userInfoList, selectedIssueCount) {
    return userInfoList.filter(function (record) {
      console.log(record);
      return record['Issue count'] === selectedIssueCount;
    });

  }
}
