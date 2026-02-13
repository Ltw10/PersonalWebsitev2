import { Component, OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { jobs } from '../data/resume-data';
import { JobCardComponent } from './job-card.component';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [JobCardComponent],
  template: `
    <section class="experience" id="experience">
      <h2>Experience</h2>
      <div class="timeline">
        <div class="timeline-line" #timelineLine></div>
        @for (job of jobs; track job.company + job.start; let i = $index) {
          <div
            class="timeline-item"
            [class.left]="i % 2 === 1"
            [class.right]="i % 2 === 0"
            [class.visible]="visible[i]"
            [attr.data-index]="i"
            #timelineItems
          >
            <div class="timeline-date">{{ job.start }} – {{ job.end }}</div>
            <div class="timeline-content">
              <div class="timeline-dot"></div>
              <app-job-card [job]="job" />
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .experience h2 {
      text-align: center;
      margin-bottom: 3rem;
    }
    .timeline {
      position: relative;
      padding: 0 0 2rem;
    }
    .timeline-line {
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(to bottom, var(--accent), var(--border));
      transform: translateX(-50%);
      border-radius: 2px;
    }
    .timeline-item {
      position: relative;
      width: calc(50% - 2rem);
      margin-bottom: 2.5rem;
      opacity: 0.4;
      transform: translateY(12px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .timeline-item.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .timeline-item.left {
      margin-right: auto;
      margin-left: 0;
      padding-right: 2rem;
      text-align: right;
    }
    .timeline-item.left .timeline-dot {
      left: auto;
      right: -1rem;
      transform: translate(50%, -50%);
    }
    .timeline-item.left app-job-card {
      margin-left: 0;
      margin-right: 0;
    }
    .timeline-item.right {
      margin-left: auto;
      margin-right: 0;
      padding-left: 2rem;
      text-align: left;
    }
    .timeline-item.right .timeline-dot {
      left: -1rem;
      right: auto;
      transform: translate(-50%, -50%);
    }
    .timeline-date {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--text);
      margin-bottom: 0.75rem;
      letter-spacing: -0.01em;
    }
    .timeline-content {
      position: relative;
    }
    .timeline-dot {
      position: absolute;
      top: 1.25rem;
      width: 14px;
      height: 14px;
      background: var(--accent);
      border: 3px solid var(--bg);
      border-radius: 50%;
      box-shadow: 0 0 0 2px var(--accent);
      z-index: 1;
    }
    @media (max-width: 900px) {
      .timeline-line {
        left: 1rem;
        transform: none;
      }
      .timeline-item,
      .timeline-item.left,
      .timeline-item.right {
        width: 100%;
        margin-left: 0;
        margin-right: 0;
        padding-left: 2.5rem;
        padding-right: 0;
        text-align: left;
      }
      .timeline-item .timeline-dot {
        left: 0.5rem;
        right: auto;
        top: 1.25rem;
        transform: translate(-50%, -50%);
      }
    }
  `],
})
export class ExperienceSectionComponent implements OnInit, AfterViewInit {
  jobs = jobs;
  visible: boolean[] = jobs.map(() => false);

  @ViewChildren('timelineItems') timelineItems!: QueryList<ElementRef<HTMLElement>>;

  private observer: IntersectionObserver | null = null;

  ngOnInit() {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          const idx = el.getAttribute('data-index');
          if (idx != null && entry.isIntersecting) {
            const i = parseInt(idx, 10);
            this.visible = [...this.visible.slice(0, i), true, ...this.visible.slice(i + 1)];
          }
        });
      },
      { rootMargin: '-80px 0px -80px 0px', threshold: 0.2 }
    );

    setTimeout(() => {
      this.timelineItems?.forEach((item) => this.observer?.observe(item.nativeElement));
    });
  }
}
