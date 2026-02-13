# Personal Website

A sharp, modern personal site built with Angular. Sections: About (with headshot), Experience (timeline with scroll-in effects), Education (with school-building background), Skills, Projects, Involvement, and Contact.

## Running the project

1. **Install dependencies** (first time only):

   ```bash
   npm install
   ```

2. **Start the development server**:

   ```bash
   npm start
   ```
   or:
   ```bash
   ng serve
   ```

3. Open **http://localhost:4200/** in your browser. The app will reload when you change source files.

## Editing your content

Update **`src/app/data/resume-data.ts`** with your resume details: jobs, education, skills, projects, and contact info. Assets (e.g. headshot, icons) go in the repo’s **`assets/`** folder so they are available at `/assets/` in the app.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
