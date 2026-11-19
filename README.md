# Developer Portfolio

A responsive personal portfolio website built with HTML5, Tailwind CSS, and vanilla JavaScript. Ready for instant deployment to GitHub Pages.

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

1. **Edit Your Details**: Open `assets/js/config.js` in any text editor and update your name, bio, social links, skills, and project list.
2. **Local Preview**: Open `index.html` directly in your web browser, or serve it using any local static server (e.g. `npx serve .` or VS Code Live Server).
3. **Deploy to GitHub Pages**:
   - Create a repository on GitHub (e.g., `portfolio` or `<your-username>.github.io`).
   - Run the git commands below to push your code:
     ```bash
     git add .
     git commit -m "Initial portfolio setup"
     git branch -M main
     git remote add origin https://github.com/<your-username>/<your-repo-name>.git
     git push -u origin main
     ```
   - In your GitHub repository: go to **Settings** > **Pages** > **Build and deployment** > Source: set to **GitHub Actions** (or Deploy from branch `main` / root).
