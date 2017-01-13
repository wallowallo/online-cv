import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Skill } from './skill';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AppService {
  private skillsUrl = 'http://localhost:3000';

  constructor (private http: Http) {}

  getSkill(): Observable<Skill[]> {
    return this.http.get(this.skillsUrl)
                    .map(this.extractData)
										.catch(this.handleError);
  }

  private extractData(res: Response) {
     let body = res.json();
     return body.data || { };
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
