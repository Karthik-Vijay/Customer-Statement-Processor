import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ViewTransactionsComponent } from './view-transactions.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';



describe('ViewTransactionsComponent', () => {
  let component: ViewTransactionsComponent;
  let fixture: ComponentFixture<ViewTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTransactionsComponent],
      imports: [
        BrowserModule,
        FormsModule,
        NgxSpinnerModule,

      ],

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the userInfoList ', () => {
    expect(component.userInfoList.length).toEqual(0);
  });

  it('should have the userInfoToShow ', () => {
    expect(component.userInfoToShow.length).toEqual(0);
  });

  it('should have the sortedInfo', () => {
    expect(component.sortedInfo.length).toEqual(0);
  });

  it('should upload the file:fileUploadCSV', () => {
    let input = fixture.debugElement.query(By.css('input[type=file]')).nativeElement;
    spyOn(component, 'onChange');
    input.dispatchEvent(new Event('change'));
    expect(component.onChange).toHaveBeenCalled();
  });

  /**
   * The issue count selected is not present in the list, returns NO RECORDS FOUND
   */
  it('should return NO RECORDS FOUND', () => {
    component.userInfoList = [{ "First name": "peter", "Sur name": "parker", "Issue count": "7", "Date of birth": "1978-01-02T00:00:00" },
    { "First name": "tom", "Sur name": "cruise", "Issue count": "8", "Date of birth": "1979-02-08T00:00:00" },
    { "First name": "will", "Sur name": "smith", "Issue count": "1", "Date of birth": "1986-07-09T00:00:00" }];
    component.selectedIssueCount = 5;
    component.filter();
    expect(component.userInfoToShow.length).toEqual(0);

  });
  /**
   * The issue count selected is present in the list and display the userInfoToShow
   */
  it('filter method should return userInfoToShow', () => {
    component.userInfoList = [{ "First name": "kevin", "Sur name": "peterson", "Issue count": "3", "Date of birth": "1978-01-02T00:00:00" },
    { "First name": "joe", "Sur name": "root", "Issue count": "8", "Date of birth": "1979-02-08T00:00:00" },
    { "First name": "jason", "Sur name": "roy", "Issue count": "7", "Date of birth": "1986-07-09T00:00:00" }];
    component.selectedIssueCount = "7";
    component.filter();
    expect(component.userInfoToShow.length).toEqual(1);
  });

  /**
   * Test Cases for Sort function 
   */

  it('sort method should sort the records in minimal order of Issue Counts', () => {
    component.userInfoToShow = [{ "First name": "luis", "Sur name": "philippe", "Issue count": "9", "Date of birth": "1978-01-02T00:00:00" },
    { "First name": "jacob", "Sur name": "Carlos", "Issue count": "8", "Date of birth": "1970-02-08T00:00:00" },
    { "First name": "carlos", "Sur name": "brathwaite", "Issue count": "4", "Date of birth": "1988-07-09T00:00:00" }];
    component.sort('Issue count');
    console.log(component.userInfoToShow);
    expect(component.userInfoToShow[0]["Issue count"]).toEqual("4");
  });

  it('it should call the generatingTableData', () => {

    let userInfoList = {
      data: [{ "First name": "luis", "Sur name": "philippe", "Issue count": "9", "Date of birth": "1978-01-02T00:00:00" },
      { "First name": "jacob", "Sur name": "Carlos", "Issue count": "8", "Date of birth": "1970-02-08T00:00:00" },
      { "First name": "brendon", "Sur name": "taylor", "Issue count": "4", "Date of birth": "1988-07-09T00:00:00" }]
    };
    component.generatingTableData(userInfoList);
    expect(component.userInfoList.length).toEqual(3);
    expect(component.headers.length).toEqual(4);
    expect(component.userInfoToShow.length).toEqual(3);

  });

  /**
   * failing scenario of the values of if condition in filter method
   */
  it('should check the conditions in if statement', () => {
    component.userInfoList = [{ "First name": "peter", "Sur name": "parker", "Issue count": "7", "Date of birth": "1978-01-02T00:00:00" },
    { "First name": "tom", "Sur name": "cruise", "Issue count": "8", "Date of birth": "1979-02-08T00:00:00" },
    { "First name": "will", "Sur name": "smith", "Issue count": "1", "Date of birth": "1986-07-09T00:00:00" }];
    component.selectedIssueCount = "8";
    component.filter();
    expect(component.userInfoToShow.length == component.userInfoList.length).toEqual(false);
  });

  /**
 * passing scenario of the values of if condition in filter method
 */
  it('should check and satisfy the condition in if statement', () => {
    component.userInfoList = [{ "First name": "Charles", "Sur name": "Jaa", "Issue count": "7", "Date of birth": "1978-01-02T00:00:00" },
    { "First name": "thomas", "Sur name": "mathew", "Issue count": "8", "Date of birth": "1979-02-08T00:00:00" },
    { "First name": "alpha", "Sur name": "dizuza", "Issue count": "1", "Date of birth": "1986-07-09T00:00:00" }];
    component.selectedIssueCount = "";
    component.userInfoToShow = [];
    component.filter();
    expect(component.userInfoToShow.length == component.userInfoList.length).toEqual(true);
  });

  it('should check the if condition ', () => {
    component.userInfoToShow = [{ "First name": "peter", "Sur name": "parker", "Issue count": "10", "Date of birth": "1978-01-02T00:00:00" },
    { "First name": "tom", "Sur name": "cruise", "Issue count": "8", "Date of birth": "1979-02-08T00:00:00" },
    { "First name": "will", "Sur name": "smith", "Issue count": "1", "Date of birth": "1986-07-09T00:00:00" },
    { "First name": "jacob", "Sur name": "Carlos", "Issue count": "8", "Date of birth": "1970-02-08T00:00:00" }];
    component.sort('Issue count');
    expect(component.userInfoToShow[0]['Issue count']).toEqual('1');
  });

});
