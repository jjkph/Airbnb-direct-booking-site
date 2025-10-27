# GitHub Pages Deployment Guide

## Setup Instructions

### 1. Build and Deploy

From the `/frontend` directory, run:

```bash
cd frontend
npm run deploy
```

This will:
- Build your React app
- Copy the build files to `/docs` folder at the repository root
- The `/docs` folder will contain all static files needed for GitHub Pages

### 2. Configure GitHub Pages

1. Push your changes to GitHub
2. Go to your repository on GitHub
3. Click **Settings** → **Pages**
4. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **main** (or your default branch)
   - Folder: Select **/docs**
5. Click **Save**

GitHub will automatically deploy your site. It will be available at:
`https://[your-username].github.io/[repository-name]/`

### 3. Custom Domain (Optional)

If you want to use a custom domain:
1. Add a file named `CNAME` in the `/docs` folder with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Enable HTTPS in GitHub Pages settings

## Important Notes

### Before Each Deployment:

1. **Test locally** to ensure everything works:
   ```bash
   cd frontend
   npm start
   ```

2. **Build and deploy**:
   ```bash
   npm run deploy
   ```

3. **Commit and push** the `/docs` folder:
   ```bash
   git add ../docs
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

### API Key Security:

⚠️ **IMPORTANT**: Before publishing to GitHub, restrict your Google Maps API key:
1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Select your API key: `AIzaSyA6oM8ZrcqvbFsjZwfBDpkefMyEpreix54`
3. Under "Application restrictions" → Select "HTTP referrers"
4. Add your GitHub Pages URL: `https://[your-username].github.io/*`
5. Under "API restrictions" → Restrict to "Maps JavaScript API"

### File Structure:

```
/app
├── frontend/          # React source code
│   ├── src/
│   ├── public/
│   └── package.json
├── docs/             # Built files for GitHub Pages (auto-generated)
│   ├── index.html
│   ├── static/
│   └── ...
├── backend/          # (Excluded from git - not needed for GitHub Pages)
└── .gitignore
```

## Troubleshooting

**Issue**: Site shows blank page or 404 errors
- **Solution**: Make sure `"homepage": "."` is in `package.json` (already added)

**Issue**: CSS/JS files not loading
- **Solution**: Check if the paths in build files are relative (they should be with `homepage: "."`)

**Issue**: Google Maps not showing
- **Solution**: Verify API key restrictions match your GitHub Pages domain

**Issue**: Contact form not working
- **Solution**: Ensure Formspree account is verified with `jonna@alum.mit.edu`

## Alternative: Using gh-pages Package

If you prefer automated deployment, you can use the `gh-pages` package:

```bash
cd frontend
npm install --save-dev gh-pages
```

Then update `package.json` scripts:
```json
"scripts": {
  "deploy": "gh-pages -d build"
}
```

This will automatically create and deploy to a `gh-pages` branch.
