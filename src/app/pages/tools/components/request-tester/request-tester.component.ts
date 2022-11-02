import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/shared/services/template/toast.service';

@Component({
  selector: 'app-request-tester',
  templateUrl: './request-tester.component.html',
  styleUrls: ['./request-tester.component.scss'],
})
export class RequestTesterComponent implements OnInit {

  public requestResult = 'N/D';

  public requestConfig = {
    url: '',
    method: 'GET',
    body: '',
    headers: ''
  };

  public requestTime;

  constructor(
    private http: HttpClient,
    private toastService: ToastService
  ) { }

  ngOnInit() {}

  sendRequest() {

    let bodyInReq = {}, headersInReq = {};

    const {
      url,
      method,
      body,
      headers
    } = this.requestConfig;

    if(!url || !method) {return;}
    if(body) {bodyInReq = this.checkParsedFieldOnRequest(body);}
    if(headers) {headersInReq = this.checkParsedFieldOnRequest(headers);}

    let $subEvent: Observable<any> | null = null;

    switch(method) {
      case 'GET':
        $subEvent = this.http.get(url, { headers: headersInReq });
        break;

      case 'POST':
        $subEvent = this.http.post(url, bodyInReq, { headers: headersInReq });
        break;

      case 'PATCH':
        $subEvent = this.http.patch(url, bodyInReq, { headers: headersInReq });
        break;

      case 'PUT':
        $subEvent = this.http.put(url, bodyInReq, { headers: headersInReq });
        break;

      case 'DELETE':
        $subEvent = this.http.delete(url, { headers: headersInReq });
        break;
    }

    if($subEvent){
      this.handleSub($subEvent);
    }
  }

  private handleSub(sub: Observable<any>) {
    this.requestTime = new Date().getTime();
    sub.subscribe({
      next: data => this.showRequestTime() && this.setRequestResult(data),
      error: error => this.showRequestTime() && this.setRequestResult(error)
    });
  }

  private setRequestResult(data: any) {
    if(data.error && data.error.text) {
      this.requestResult = data.error.text;
    } else {
      this.requestResult = typeof data === 'string' ? data : JSON.stringify(data, null, 3);
    }
    console.log(data);
  }

  private checkParsedFieldOnRequest(field: any) {
    let currField = {};
    try {
      currField = JSON.parse(field);
    } catch (error) {
      currField = {};
      this.toastService.presentToast('BODY OR HEADER MOUNTED IS NOT A VALID JSON', 'danger', 2000);
    }
    return currField;
  }

  private showRequestTime() {
    const diff = Math.abs(new Date().getTime() - this.requestTime);
    this.toastService.presentToast(`Request finished after ${ diff } ms`, 'dark', 1500);
    this.requestTime = 0;
    return true;
  }

}
