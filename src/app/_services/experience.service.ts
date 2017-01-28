import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ExperienceService {
  private experienceUrl = 'app/cv.json';

  constructor (private http: Http) {}

  getExperience(): Observable<any> {
    return this.http.get(this.experienceUrl)
                    .map((res: Response) => {
                      let body = res.json();
                      return body.experience || { };
                    })
										.catch(this.handleError);
  }

  getProjects(): Observable<any> {
    return this.http.get(this.experienceUrl)
                    .map((res: Response) => {
                      let body = res.json();
                      return body.projects || { };
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
