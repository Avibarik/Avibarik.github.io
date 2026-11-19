# Avi Barik - Personal Portfolio

A responsive personal portfolio website built with HTML5, Tailwind CSS, and vanilla JavaScript. Deployed directly to GitHub Pages at [avibarik.github.io](https://avibarik.github.io).

## Project Structure

```text
├── index.html                   # Main single-page portfolio layout
├── assets/
│   ├── css/style.css            # Custom glassmorphic styling and animations
│   ├── js/config.js             # Personal details, projects, skills, and links
│   ├── js/main.js               # Interactive features (typing effect, theme toggle, filters)
│   └── images/                  # Media and avatar graphics
├── .github/workflows/deploy.yml # GitHub Actions workflow for GitHub Pages
└── .gitignore
```

## Quick Start & Customization

1. **Edit Your Details**: Open `assets/js/config.js` in any text editor and update your bio, social profiles, skills, and project list.
2. **Local Preview**: Open `index.html` directly in your web browser, or run a local static server.
3. **Push Changes to GitHub**:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
4. **GitHub Pages Deployment**:
   - In your repository settings at [github.com/avibarik/avibarik.github.io](https://github.com/avibarik/avibarik.github.io), navigate to **Settings** > **Pages**.
   - Under **Build and deployment > Source**, ensure **GitHub Actions** is selected (or Deploy from branch `main` / root).
   - Your site will be live at `https://avibarik.github.io/`!
