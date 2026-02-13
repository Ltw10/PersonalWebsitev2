import { Component } from '@angular/core';
import { contact } from '../data/resume-data';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  template: `
    <section class="contact" id="contact">
      <h2>Get in touch</h2>
      <div class="contact-links">
        <a [href]="'mailto:' + contact.email" class="contact-link">
          <span class="label">Email</span>
          <span class="value">{{ contact.email }}</span>
        </a>
        <a [href]="contact.linkedin" target="_blank" rel="noopener" class="contact-link">
          <span class="label">LinkedIn</span>
          <span class="value">linkedin.com/in/luke-williams-t102701</span>
        </a>
        <a [href]="contact.github" target="_blank" rel="noopener" class="contact-link">
          <span class="label">GitHub</span>
          <span class="value">github.com/Ltw10</span>
        </a>
        @if (contact.resumePdfUrl) {
          <a [href]="contact.resumePdfUrl" target="_blank" rel="noopener" class="contact-link">
            <span class="label">Resume</span>
            <span class="value">Download PDF</span>
          </a>
        }
      </div>
    </section>
  `,
  styles: [`
    .contact {
      padding-bottom: 5rem;
    }
    .contact h2 {
      text-align: center;
      margin-bottom: 2rem;
    }
    .contact-links {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }
    .contact-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem 1.5rem;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      min-width: 180px;
      transition: border-color 0.2s, background 0.2s;
      color: inherit;
    }
    .contact-link:hover {
      border-color: var(--accent);
      background: var(--accent-soft);
      text-decoration: none;
    }
    .contact-link .label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      margin-bottom: 0.25rem;
    }
    .contact-link .value {
      font-weight: 500;
      color: var(--text);
    }
  `],
})
export class ContactSectionComponent {
  contact = contact;
}
