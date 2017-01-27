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

  public radarChartLabels:string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType:string = 'radar';


  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
