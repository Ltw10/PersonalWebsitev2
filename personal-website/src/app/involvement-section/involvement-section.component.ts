import { Component } from '@angular/core';
import { involvement } from '../data/resume-data';

@Component({
  selector: 'app-involvement-section',
  standalone: true,
  template: `
    <section class="involvement" id="involvement">
      <img src="assets/handshake_icon2.png" alt="" class="handshake-icon" aria-hidden="true" />
      <div class="involvement-content">
        <h2>Involvement</h2>
        @for (item of involvement; track item.organization) {
          <div class="involvement-block">
            <h3>{{ item.role }} · {{ item.organization }}</h3>
            <p class="meta">{{ item.start }} – {{ item.end }}</p>
            <ul class="description">
              @for (line of item.description; track line) {
                <li>{{ line }}</li>
              }
            </ul>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .involvement {
      position: relative;
      overflow: hidden;
    }
    .handshake-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: min(280px, 50vw);
      height: auto;
      object-fit: contain;
      opacity: 0.2;
      pointer-events: none;
      user-select: none;
    }
    .involvement-content {
      position: relative;
      z-index: 1;
    }
    .involvement-content h2 {
      text-align: center;
      margin-bottom: 2rem;
    }
    .involvement-block {
      max-width: 640px;
      margin: 0 auto 2rem;
    }
    .involvement-block:last-child {
      margin-bottom: 0;
    }
    .involvement-block h3 {
      margin: 0 0 0.25rem;
      font-size: 1.1rem;
      font-weight: 600;
    }
    .meta {
      color: var(--text-muted);
      font-size: 0.875rem;
      margin: 0 0 0.5rem;
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
export class InvolvementSectionComponent {
  involvement = involvement;
}
