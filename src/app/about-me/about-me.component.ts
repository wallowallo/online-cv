import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import '../_helpers/rxjs-operators';

import { AboutMeService } from '../_services/index';

@Component({
  moduleId: 'module.id',
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  providers: [ AboutMeService ]
})
export class AboutMeComponent implements OnInit {
  errorMessage: string;
  aboutMe: string;

  constructor (private aboutMeService: AboutMeService) {}

	ngOnInit() { this.getAbout(); }

	getAbout() {
		this.aboutMeService.getAbout()
										.subscribe(
											 about => this.aboutMe = about,
											 error => this.errorMessage = <any>error
										);
	}
}
