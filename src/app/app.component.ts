import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import './rxjs-operators';

import { AppService } from './app.service';
import { Skill } from './skill';

@Component({
  moduleId: 'module.id',
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
	providers: [ AppService ]
})

export class AppComponent implements OnInit {
	errorMessage: string;
	skills: Skill[];

  constructor (private appService: AppService) {}

	ngOnInit() { this.getSkill(); }

	getSkill() {
		this.appService.getSkill()
										.subscribe(
											 skills => this.skills = skills,
											 error => this.errorMessage = <any>error
										);
	}
}
