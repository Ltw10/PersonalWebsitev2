import { Component } from '@angular/core';
import { projects } from '../data/resume-data';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  template: `
    <section class="projects" id="projects">
      <h2>Projects</h2>
      <div class="projects-grid">
        @for (project of projects; track project.name) {
          <article class="project-card">
            <h3>
              @if (project.url) {
                <a [href]="project.url" target="_blank" rel="noopener">{{ project.name }}</a>
              } @else {
                {{ project.name }}
              }
            </h3>
            <p>{{ project.description }}</p>
            @if (project.url) {
              <a [href]="project.url" target="_blank" rel="noopener" class="project-link">Visit site →</a>
            }
            @if (project.tech && project.tech.length) {
              <div class="tech">
                @for (t of project.tech; track t) {
                  <span class="tech-tag">{{ t }}</span>
                }
              </div>
            }
          </article>
        }
      </div>
    </section>
  `,
  styles: [`
    .projects h2 {
      text-align: center;
      margin-bottom: 2rem;
    }
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.25rem;
    }
    .project-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.25rem 1.5rem;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .project-card:hover {
      border-color: var(--accent);
      box-shadow: 0 0 0 1px var(--accent-soft);
    }
    .project-card h3 {
      margin: 0 0 0.5rem;
      font-size: 1.1rem;
    }
    .project-card h3 a {
      color: inherit;
    }
    .project-card h3 a:hover {
      color: var(--accent);
    }
    .project-card p {
      color: var(--text-muted);
      font-size: 0.95rem;
      margin: 0 0 0.75rem;
      line-height: 1.5;
    }
    .project-link {
      display: inline-block;
      font-size: 0.9rem;
      margin-bottom: 0.75rem;
    }
    .tech {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .tech-tag {
      font-size: 0.75rem;
      font-family: var(--font-mono);
      color: var(--text-muted);
      background: var(--surface-elevated);
      padding: 0.2rem 0.5rem;
      border-radius: var(--radius-sm);
    }
  `],
})
export class ProjectsSectionComponent {
  projects = projects;
}
