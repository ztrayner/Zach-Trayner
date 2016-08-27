import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, ConnectionBackend, HTTP_PROVIDERS } from '@angular/http';
import { ContactForm }    from './contact-form';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';


@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  private formspreeUrl = 'https://formspree.io/ztrayner@gmail.com';

  sendEmail (contact: any): Observable<ContactForm> {
    let body = JSON.stringify(contact);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.formspreeUrl, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console for now
    return Observable.throw(errMsg);
  }

}
