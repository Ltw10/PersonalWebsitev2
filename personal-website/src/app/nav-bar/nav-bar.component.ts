import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  template: `
    <nav class="nav">
      <a href="#about" class="nav-brand">{{ name }}</a>
      <div class="nav-links">
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#involvement">Involvement</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  `,
  styles: [`
    .nav {
      position: sticky;
      top: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 1.5rem;
      background: rgba(10, 10, 11, 0.9);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border);
    }
    .nav-brand {
      font-weight: 600;
      color: var(--text);
    }
    .nav-brand:hover {
      text-decoration: none;
      color: var(--accent);
    }
    .nav-links {
      display: flex;
      gap: 1.5rem;
    }
    .nav-links a {
      color: var(--text-muted);
      font-size: 0.9rem;
    }
    .nav-links a:hover {
      color: var(--text);
    }
    @media (max-width: 640px) {
      .nav-links { gap: 1rem; font-size: 0.85rem; }
    }
  `],
})
export class NavBarComponent {
  name = 'Luke Williams';
}
