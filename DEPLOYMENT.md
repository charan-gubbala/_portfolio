# GitHub Pages Deployment Guide

## Issues Fixed

1. **Base Path Configuration**: Added `base: '/portfolio/'` to vite.config.js
2. **Build Configuration**: Optimized build settings for GitHub Pages
3. **NoJekyll File**: Added .nojekyll file to prevent Jekyll processing
4. **Deployment Scripts**: Added proper npm scripts for deployment

## Deployment Steps

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

## Alternative Manual Deployment

If the npm script doesn't work, you can manually deploy:

1. Build the project:
   ```bash
   npm run build
   ```

2. Copy the contents of the `dist` folder to your repository's `gh-pages` branch

3. Make sure the `gh-pages` branch has:
   - All files from `dist/` folder
   - A `.nojekyll` file in the root

## Important Notes

- The repository should be named exactly as your GitHub username wants it
- Make sure GitHub Pages is enabled in your repository settings
- The source should be set to "Deploy from a branch" and select "gh-pages" branch
- It may take a few minutes for changes to reflect on the live site

