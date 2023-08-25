import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
  
  projects = [
    {
      title: 'Project 1',
      description: 'Short description of Project 1.',
      image: 'assets/personal_website_project.JPG',
      link: 'https://twitter.com'
    },
    {
      title: 'Project 2',
      description: 'Short description of Project 2.',
      image: 'assets/8451_logo.jpg',
      link: 'https://youtube.com'
    },
    {
      title: 'Project 3',
      description: 'Short description of Project 3',
      image: 'assets/dmg_logo.png',
      link: 'https://instagram.com'
    }
    // Add more projects as needed
  ];

  carouselOptions = {
    items: 1, // Change this to 1
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<', '>']
  };
}
