import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { ProjectsComponent } from './app/components/projects/projects.component';
import { SkillsComponent } from './app/components/skills/skills.component';
import { ExperienceComponent } from './app/components/experience/experience.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projets', component: ProjectsComponent },
  { path: 'competences', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],  
  exports: [RouterModule]
})
export class AppRoutingModule { }