import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import '../_helpers/rxjs-operators';

import { SkillsService } from '../_services/index';
import { Skill } from '../_models/skill';

@Component({
  moduleId: 'module.id',
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  providers: [ SkillsService ]
})
export class GraphComponent implements OnInit {
  errorMessage: string;
	skills: Skill[];

  constructor (private skillsService: SkillsService) {}

	ngOnInit() { this.getSkill(); }

	getSkill() {
		this.skillsService.getSkill()
										.subscribe(
											 skills => this.skills = skills,
											 error => this.errorMessage = <any>error
										);
	}
}
