# Personal Website v2

A personal website built with Angular.

## Running the project

1. **Install dependencies** (from the `personal-website` folder):

   ```bash
   cd personal-website
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

3. Open **http://localhost:4200/** in your browser.

## Building for production

From the `personal-website` folder:

```bash
ng build
```

Output is in `personal-website/dist/personal-website/`. Deploy the contents of that folder to your host.

## Assets

Place images (e.g. headshot, icons) in the **`assets/`** folder at the repo root. The Angular app is configured to copy them into the build at `/assets/`.
