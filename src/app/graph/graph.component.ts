import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import '../_helpers/rxjs-operators';

import { SkillsService } from '../_services/index';
import { Skill } from '../_models/skill';

@Component({
  moduleId: 'module.id',
  selector: 'app-graph',
  templateUrl: './graph.component.html'
})
export class GraphComponent implements OnInit {
  errorMessage: string;
	skills: Skill[];

  constructor (private SkillsService: SkillsService) {}

	ngOnInit() { this.getSkill(); }

	getSkill() {
		this.SkillsService.getSkill()
										.subscribe(
											 skills => this.skills = skills,
											 error => this.errorMessage = <any>error
										);
	}
}
