import { RouterModule, Routes } from '@angular/router';

import { GraphComponent } from '../graph/index';
import { AboutMeComponent } from '../about-me/index';
import { EducationComponent } from '../education/index';
import { ExperienceComponent } from '../experience/index';

const appRoutes: Routes = [
  { path: 'graph', component: GraphComponent },
  { path: 'experience',  component:  ExperienceComponent},
  { path: 'about', component: AboutMeComponent },
  { path: 'education', component: EducationComponent },
  { path: '**', redirectTo: '/graph' }
];

export const routing = RouterModule.forRoot(appRoutes);
