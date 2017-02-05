import { Component, OnInit, Input } from '@angular/core';
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
  public getLabels;
  public getLevels;
  public radarChartType = 'radar';
  public radarData: any = [
    {data: [3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 2], label: 'Current Skill level'},
    {data: [4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 4, 3], label: 'Level By 2018'},
    {data: [0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], label: 'Levels'}
  ];
  errorMessage: string;
 	skills: Skill[];

  constructor (private skillsService: SkillsService) {}

	ngOnInit() {
    this.getSkill();
    this.getLabels = this.skillsService.getSkill()
                      .subscribe(
                        skill => this.label = skill.map(a => a.skill),
                        error => this.errorMessage = <any>error
                      );
    this.getLevels = this.skillsService.getSkill()
                      .subscribe(
                        skil => this.level = skil.map(x => x.level),
                        error => this.errorMessage = <any>error
                      );
  }

  getSkill() {
    this.skillsService.getSkill()
                      .subscribe(
                        skill => this.skills = skill,
                        error => this.errorMessage = <any>error
                      );
  }
}
