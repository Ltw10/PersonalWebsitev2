import { Component } from '@angular/core';
import { education } from '../data/resume-data';

@Component({
  selector: 'app-education-section',
  standalone: true,
  template: `
    <section class="education" id="education">
      <div class="education-bg" aria-hidden="true">
        <div class="building b1"></div>
        <div class="building b2"></div>
        <div class="building b3"></div>
        <div class="building b4"></div>
        <div class="building b5"></div>
      </div>
      <div class="education-content">
        <h2>Education</h2>
        @for (edu of education; track edu.school) {
          <article class="edu-block">
            <p class="date-line"><span class="bullet">●</span> {{ edu.yearRange }}</p>
            <p class="school-line">{{ edu.school }} – {{ edu.location }}</p>
            <p class="degree-line">{{ edu.degreeLine }}</p>
            @if (edu.minor) {
              <p class="detail-line">Minor in {{ edu.minor }}</p>
            }
            @if (edu.honorsPathway) {
              <p class="detail-line">{{ edu.honorsPathway }}</p>
            }
            @if (edu.gpa) {
              <p class="gpa-line">GPA: {{ edu.gpa }}</p>
            }
          </article>
        }
      </div>
    </section>
  `,
  styles: [`
    .education {
      position: relative;
      overflow: hidden;
      background: linear-gradient(180deg, var(--bg) 0%, #0d1117 50%, var(--bg) 100%);
    }
    .education-bg {
      position: absolute;
      inset: 0;
      pointer-events: none;
      opacity: 0.35;
    }
    .building {
      position: absolute;
      bottom: 0;
      background: linear-gradient(180deg, var(--surface-elevated) 0%, var(--surface) 100%);
      border: 1px solid var(--border);
      border-radius: 4px 4px 0 0;
      box-shadow: 0 -2px 20px rgba(0,0,0,0.3);
    }
    .building::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 40%;
      background: repeating-linear-gradient(
        90deg,
        transparent,
        transparent 18px,
        var(--border) 18px,
        var(--border) 20px
      );
      opacity: 0.6;
      border-radius: 4px 4px 0 0;
    }
    .b1 { left: 5%; width: 14%; min-height: 120px; max-height: 180px; }
    .b2 { left: 22%; width: 18%; min-height: 160px; max-height: 220px; }
    .b3 { left: 43%; width: 22%; min-height: 200px; max-height: 280px; }
    .b4 { left: 68%; width: 16%; min-height: 140px; max-height: 200px; }
    .b5 { left: 87%; width: 10%; min-height: 100px; max-height: 160px; }
    .education-content {
      position: relative;
      z-index: 1;
    }
    .education-content h2 {
      text-align: center;
      margin-bottom: 2.5rem;
    }
    .edu-block {
      max-width: 36rem;
      margin: 0 auto;
    }
    .edu-block + .edu-block {
      margin-top: 2.5rem;
    }
    .date-line {
      font-size: 1rem;
      color: var(--text-muted);
      margin: 0 0 0.25rem;
      line-height: 1.5;
    }
    .bullet {
      color: var(--accent);
      margin-right: 0.35rem;
    }
    .school-line {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text);
      margin: 0 0 0.35rem;
      letter-spacing: -0.02em;
      line-height: 1.3;
    }
    .degree-line {
      font-size: 1rem;
      color: var(--text);
      margin: 0 0 0.25rem;
      line-height: 1.5;
    }
    .detail-line {
      font-size: 1rem;
      color: var(--text-muted);
      margin: 0 0 0.25rem;
      line-height: 1.5;
    }
    .gpa-line {
      font-size: 0.95rem;
      color: var(--text-muted);
      margin: 0.5rem 0 0;
      line-height: 1.5;
    }
  `],
})
export class EducationSectionComponent {
  education = education;
}
