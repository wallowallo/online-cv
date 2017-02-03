import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AboutMeService {
  private AboutUrl = 'app/cv.json';

  constructor (private http: Http) {}

  getAbout(): Observable<any> {
    return this.http.get(this.AboutUrl)
                    .map(this.extractData)
										.catch(this.handleError);
  }

  private extractData(res: Response) {
     const body = res.json();
     return body.aboutMe || { };
  }

  private handleError (error: Response | any) {
   let errMsg: string;
   if (error instanceof Response) {
     const body = error.json() || '';
     const err = body.error || JSON.stringify(body);
     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
   } else {
     errMsg = error.message ? error.message : error.toString();
   }
   console.error(errMsg);
   return Observable.throw(errMsg);
 }
}
