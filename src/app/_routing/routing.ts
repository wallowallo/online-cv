import { RouterModule, Routes } from '@angular/router';

import { GraphComponent } from '../graph/index';
import { AboutMeComponent } from '../about-me/index';
import { EducationComponent } from '../education/index';
import { ExperienceComponent } from '../experience/index';
import { ContactMeComponent } from '../contact-me/index';

const appRoutes: Routes = [
  { path: '', component: GraphComponent },
  { path: 'experience',  component:  ExperienceComponent},
  { path: 'about', component: AboutMeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: '**', redirectTo: '/' }
];

export const routing = RouterModule.forRoot(appRoutes);
