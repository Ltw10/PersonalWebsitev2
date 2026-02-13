import { Component } from '@angular/core';
import { skillsByCategory } from '../data/resume-data';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  template: `
    <section class="skills" id="skills">
      <h2>Skills</h2>
      <div class="skills-groups">
        @for (group of skillsByCategory; track group.category) {
          <div class="skill-group">
            <p class="group-label"><span class="bullet">•</span> {{ group.category }}:</p>
            <div class="skills-list">
              @for (skill of group.skills; track skill) {
                <span class="skill-pill">{{ skill }}</span>
              }
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .skills h2 {
      text-align: center;
      margin-bottom: 2rem;
    }
    .skills-groups {
      max-width: 720px;
      margin: 0 auto;
    }
    .skill-group {
      margin-bottom: 1.5rem;
    }
    .skill-group:last-child {
      margin-bottom: 0;
    }
    .group-label {
      font-size: 1rem;
      font-weight: 600;
      color: var(--text);
      margin: 0 0 0.6rem;
      line-height: 1.4;
    }
    .bullet {
      color: var(--accent);
      margin-right: 0.35rem;
    }
    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem 0.75rem;
    }
    .skill-pill {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 999px;
      padding: 0.4rem 0.85rem;
      font-size: 0.875rem;
      font-family: var(--font-mono);
      color: var(--text-muted);
      transition: border-color 0.2s, color 0.2s;
    }
    .skill-pill:hover {
      border-color: var(--accent);
      color: var(--text);
    }
  `],
})
export class SkillsSectionComponent {
  skillsByCategory = skillsByCategory;
}
