import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import '../_helpers/rxjs-operators';
import { Observable } from 'rxjs/Observable';
import { SkillsService } from '../_services/index';
import { Skill } from '../_models/skill';

@Component({
  moduleId: 'module.id',
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  providers: [ SkillsService ]
})
export class GraphComponent implements OnInit {
  public label: string[] = [];
  public level: number[] = [];
  public radarChartType:string = 'radar';
  errorMessage: string;
	skills: Skill[];

  constructor (private skillsService: SkillsService) {}

	ngOnInit() {
    this.getSkill();
    this.getLabel();
    this.getLevel();
   }

   public radarData: any = [
     {data: [3,3,3,2,3,3,3,3,3,3,3,2,2,3,2], label:"Current Skill level"},
     {data: [4,4,4,3,4,4,4,4,4,4,4,3,4,4,3], label:"Desired level"},
   {data: [0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5], label:"Levels"}]

  getSkill() {
    this.skillsService.getSkill()
                      .subscribe(
                        skills => this.skills = skills,
                        error => this.errorMessage = <any>error
                      );
  }

  getLabel() {
    this.skillsService.getLabel()
                      .subscribe(
                        skills => this.label = skills.map(skills => skills.skill),
                        error => this.errorMessage = <any>error
                      );
   }

  getLevel() {
    this.skillsService.getLevel()
                      .subscribe(
                        skills => this.level = skills.map(skills => parseInt(skills.level)),
                        error => this.errorMessage = <any>error
                      );
  }
}
