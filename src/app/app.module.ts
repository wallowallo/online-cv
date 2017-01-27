import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { GraphComponent } from './graph/graph.component';
import { EducationComponent } from './education/education.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

import { SkillsService, AboutMeService, EducationService, ExperienceService } from './_services/index';

import { routing } from './_routing/routing';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ExperienceComponent,
    GraphComponent,
    EducationComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ChartsModule
  ],
  providers: [
    SkillsService,
    AboutMeService,
    EducationService,
    ExperienceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
