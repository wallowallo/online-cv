import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Skill } from '../_models/skill';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SkillsService {
  private skillsUrl = 'app/cv.json';

  constructor (private http: Http) {}

  getSkill(): Observable<Skill[]> {
    return this.http.get(this.skillsUrl)
                    .map(this.extractData)
										.catch(this.handleError);
  }

  private extractData(res: Response) {
     const body = res.json();
     return body.skills || { };
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
