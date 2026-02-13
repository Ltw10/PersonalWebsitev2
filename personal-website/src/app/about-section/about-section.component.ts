import { Component } from '@angular/core';
import { contact, about } from '../data/resume-data';

@Component({
  selector: 'app-about-section',
  standalone: true,
  template: `
    <section class="about" id="about">
      <div class="about-inner">
        <div class="about-main">
          <img
            src="assets/headshot.jpeg"
            alt="{{ contact.name }}"
            class="headshot"
            width="200"
            height="200"
          />
          <div class="about-text">
            <h1>{{ contact.name }}</h1>
            <p class="tagline">{{ about.tagline }}</p>
            @for (paragraph of about.bio; track paragraph) {
              <p class="bio">{{ paragraph }}</p>
            }
          </div>
        </div>
        <div class="about-contact-cards">
          <a [href]="'mailto:' + contact.email" class="contact-card">
            <span class="contact-card-label">Email</span>
            <span class="contact-card-value">{{ contact.email }}</span>
          </a>
          <a [href]="contact.linkedin" target="_blank" rel="noopener" class="contact-card">
            <span class="contact-card-label">LinkedIn</span>
            <span class="contact-card-value">Connect</span>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
    .about-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      text-align: center;
    }
    .about-main {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      text-align: center;
    }
    .headshot {
      width: 180px;
      height: 180px;
      object-fit: cover;
      border-radius: 50%;
      border: 3px solid var(--border);
      box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    }
    .about-text h1 {
      margin: 0 0 0.25rem;
    }
    .tagline {
      color: var(--accent);
      font-weight: 500;
      margin: 0 0 0.75rem;
      font-size: 1.1rem;
    }
    .bio {
      color: var(--text-muted);
      max-width: 480px;
      margin: 0 0 0.75rem;
    }
    .bio:last-child {
      margin-bottom: 0;
    }
    .about-contact-cards {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .contact-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem 1.5rem;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      min-width: 200px;
      transition: border-color 0.2s, background 0.2s;
      color: inherit;
      text-decoration: none;
    }
    .contact-card:hover {
      border-color: var(--accent);
      background: var(--accent-soft);
    }
    .contact-card-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      margin-bottom: 0.25rem;
    }
    .contact-card-value {
      font-weight: 500;
      color: var(--text);
      font-size: 0.95rem;
    }
    @media (min-width: 640px) {
      .about-inner {
        flex-direction: row;
        text-align: left;
        align-items: flex-start;
        justify-content: space-between;
        gap: 2rem;
      }
      .about-main {
        flex-direction: row;
        text-align: left;
        align-items: flex-start;
        gap: 2rem;
        flex: 1;
        max-width: 720px;
      }
      .headshot {
        width: 200px;
        height: 200px;
      }
      .about-contact-cards {
        flex-shrink: 0;
      }
    }
  `],
})
export class AboutSectionComponent {
  contact = contact;
  about = about;
}
