import { Component, Input } from '@angular/core';
import { Job } from '../data/resume-data';

@Component({
  selector: 'app-job-card',
  standalone: true,
  template: `
    <article class="job-card">
      <div class="job-header">
        <h3>{{ job.title }}</h3>
        @if (job.url) {
          <a [href]="job.url" target="_blank" rel="noopener" class="company">{{ job.company }}</a>
        } @else {
          <span class="company">{{ job.company }}</span>
        }
        <p class="meta">{{ job.location }}</p>
      </div>
      <ul class="description">
        @for (line of job.description; track line) {
          <li>{{ line }}</li>
        }
      </ul>
    </article>
  `,
  styles: [`
    .job-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.25rem 1.5rem;
      margin: 0 1rem;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .job-card:hover {
      border-color: var(--accent);
      box-shadow: 0 0 0 1px var(--accent-soft);
    }
    .job-header {
      margin-bottom: 0.75rem;
    }
    .job-header h3 {
      margin: 0 0 0.25rem;
      font-size: 1.1rem;
    }
    .company {
      color: var(--accent);
      font-weight: 500;
    }
    .company:hover {
      text-decoration: underline;
    }
    .meta {
      color: var(--text-muted);
      font-size: 0.875rem;
      margin: 0.25rem 0 0;
    }
    .description {
      margin: 0;
      padding-left: 1.25rem;
      color: var(--text-muted);
      font-size: 0.95rem;
      line-height: 1.6;
    }
    .description li {
      margin-bottom: 0.35rem;
    }
  `],
})
export class JobCardComponent {
  @Input({ required: true }) job!: Job;
}
