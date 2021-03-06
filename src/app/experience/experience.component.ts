import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import '../_helpers/rxjs-operators';

import { ExperienceService } from '../_services/index';

@Component({
  moduleId: 'module.id',
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  providers: [ ExperienceService ]
})
export class ExperienceComponent implements OnInit {
  errorMessage: string;
	experience: string;
  descriptions: string[];
  project: string;

  constructor (private experienceService: ExperienceService) {}

	ngOnInit() {
    this.getExperience();
    this.getProjects();
  }

	getExperience() {
		this.experienceService.getExperience()
										.subscribe(
											 experience => this.experience = experience,
											 error => this.errorMessage = <any>error
										);
	}

  getProjects() {
    this.experienceService.getProjects()
                    .subscribe(
                       projects => {
                         this.project = projects.project;
                         this.descriptions = projects.description;
                       },
                       error => this.errorMessage = <any>error
                    );
  }
}
