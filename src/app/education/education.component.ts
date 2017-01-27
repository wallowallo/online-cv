import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import '../_helpers/rxjs-operators';

import { EducationService } from '../_services/index';
import { Course } from '../_models/course';

@Component({
  moduleId: 'module.id',
  selector: 'app-education',
  templateUrl: './education.component.html',
  providers: [ EducationService ]
})
export class EducationComponent implements OnInit {
  errorMessage: string;
	education: string;
  courses: Course[];

  constructor (private educationService: EducationService) {}

	ngOnInit() {
    this.getEducation();
    this.getCourses();
  }

	getEducation() {
		this.educationService.getEducation()
										.subscribe(
											 education => this.education = education,
											 error => this.errorMessage = <any>error
										);
	}

  getCourses() {
    this.educationService.getCourses()
                         .subscribe(
                           courses => this.courses = courses,
                           error => this.errorMessage = <any>error
                         );
  }
}
