
# Thistle & Salt — Netlify + GitHub Ready

This project is ready to deploy on Netlify using GitHub.

## Quick Start
1. Put your images in `public/assets/` (JPG/PNG/WebP). Keep web sizes (~2000px wide) for speed.
2. Edit `public/assets/manifest.json` to list which images show in the **hero**, **gallery**, and **client galleries**.
3. Install and run locally (optional):
   ```bash
   npm install
   npm run dev
   ```
4. Build for Netlify:
   ```bash
   npm run build
   ```
   The output will be in `dist/`.
5. Push to GitHub, then in Netlify: **Add new site → Import from Git**.
   - Build command: `npm run build`
   - Publish directory: `dist`

### Example manifest.json
```json
{
  "hero": [
    "/assets/hero1.jpg",
    "/assets/hero2.jpg"
  ],
  "gallery": [
    "/assets/portfolio1.jpg",
    "/assets/portfolio2.jpg",
    "/assets/portfolio3.jpg"
  ],
  "galleriesByPassword": {
    "rachel2025": {
      "title": "Rachel — Proof Gallery",
      "images": ["/assets/portfolio1.jpg", "/assets/portfolio2.jpg"]
    },
    "kristen2025": {
      "title": "Kristen — Proof Gallery",
      "images": ["/assets/portfolio3.jpg", "/assets/portfolio2.jpg"]
    }
  }
}
```
If `manifest.json` is empty or missing, the site will use the `defaultImages` paths in `src/App.jsx`. You can change those filenames or just rely on `manifest.json` going forward.
