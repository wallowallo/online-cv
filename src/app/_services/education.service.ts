import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EducationService {
  private educationUrl = 'app/cv.json';

  constructor (private http: Http) {}

  getEducation(): Observable<any> {
    return this.http.get(this.educationUrl)
                    .map((res: Response) => {
                        let body = res.json();
                        return body.education || { };})
										.catch(this.handleError);
  }

  getCourses(): Observable<any> {
    return this.http.get(this.educationUrl)
                    .map((res: Response) => {
                      let body = res.json();
                      return body.courses || { };
                    })
                    .catch(this.handleError);
  }

  getWorkshops(): Observable<any> {
    return this.http.get(this.educationUrl)
                    .map((res: Response) => {
                      let body = res.json();
                      return body.workshops || { };
                    })
                    .catch(this.handleError);
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
