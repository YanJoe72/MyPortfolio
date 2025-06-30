import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/components/home/home.component';
import { ProjectsComponent } from './app/components/projects/projects.component';
import { SkillsComponent } from './app/components/skills/skills.component';
import { ExperienceComponent } from './app/components/experience/experience.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'projets', component: ProjectsComponent },
  { path: 'competences', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: '**', redirectTo: '' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});