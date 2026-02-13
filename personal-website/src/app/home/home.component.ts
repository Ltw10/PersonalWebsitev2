import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { AboutSectionComponent } from '../about-section/about-section.component';
import { ExperienceSectionComponent } from '../experience-section/experience-section.component';
import { EducationSectionComponent } from '../education-section/education-section.component';
import { SkillsSectionComponent } from '../skills-section/skills-section.component';
import { ProjectsSectionComponent } from '../projects-section/projects-section.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';
import { InvolvementSectionComponent } from '../involvement-section/involvement-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavBarComponent,
    AboutSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    InvolvementSectionComponent,
    ContactSectionComponent,
  ],
  template: `
    <app-nav-bar />
    <app-about-section />
    <app-experience-section />
    <app-education-section />
    <app-skills-section />
    <app-projects-section />
    <app-involvement-section />
    <app-contact-section />
  `,
  styles: [],
})
export class HomeComponent {}
