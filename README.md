# Resume

A responsive resume site built with vanilla JavaScript.

## Features

- Component-style architecture without a framework.
- Resume content stored in a single structured data object.
- One-click PDF export with automatic page-break handling via `html2pdf.js`.

## Design Approach

In this project, I tried to use the component-based approach of modern front-end frameworks while keeping everything in plain JavaScript. Each resume section is a self-contained class that renders into placeholder elements in `index.html`. All data lives in one source file, which makes updates easy.

## Getting Started

```sh
git clone https://github.com/tristansamuk/resume.git
npm install
npm run dev
```

## Customization

- Update resume content in `constants/resume.js`.
- Adjust styles in `styles/global.css` and component-level CSS files (for example, `components/experience/experience.css`).
- Modify component logic within the modules under `components/`.

## Project Structure

```
components/           # Individual component modules
constants/resume.js   # Resume data
scripts/              # Bootstrap and helpers
styles/               # Global and component styles
index.html            # Entry point for Vite
```
