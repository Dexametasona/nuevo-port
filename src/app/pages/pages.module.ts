import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    ProjectComponent,
    ContactComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AboutComponent,
    HomeComponent,
    ProjectComponent,
    ContactComponent,
    SkillsComponent
  ]
})
export class PagesModule { }
