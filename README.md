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

Output is in `personal-website/dist/personal-website/` (or `.../browser/` depending on Angular version). Deploy the contents of that folder to your host.

## Deploying to GitHub Pages

The repo includes a **GitHub Actions** workflow that builds and deploys the site to GitHub Pages.

### One-time setup

1. **Enable GitHub Pages**
   - In your repo on GitHub: **Settings → Pages**.
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.

2. **Push to `main`**
   - Each push to the `main` branch runs the workflow: it builds the Angular app and deploys it to GitHub Pages.
   - You can also run it manually: **Actions → Deploy to GitHub Pages → Run workflow**.

### Resulting URL

- **Project site:** `https://<your-username>.github.io/PersonalWebsitev2/`  
  The workflow sets the app’s base href to `/<repo-name>/` so routes and assets load correctly.

- **User/org site** (`https://<username>.github.io/`):  
  If this repo is your user/org Pages repo, change the workflow’s `--base-href` from `/${{ github.event.repository.name }}/` to `/` in `.github/workflows/deploy-pages.yml`.

### If the build fails

- Confirm the **upload path** in the workflow matches your build output. The workflow uses `personal-website/dist/personal-website/browser`. If your Angular version outputs directly to `personal-website/dist/personal-website/` (no `browser` folder), update the `path` in the **Upload artifact** step to that folder.

## Assets

Place images (e.g. headshot, icons) in the **`assets/`** folder at the repo root. The Angular app is configured to copy them into the build at `/assets/`.
