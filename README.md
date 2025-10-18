# Resume

A responsive resume site built with vanilla JavaScript.

## Features

- Component-style architecture without a framework.
- Resume content stored in a single structured data object.
- One-click PDF export with automatic page-break handling via `html2pdf.js`.

## Design Approach

In this project, I tried to use the component-based approach of modern front-end frameworks while keeping everything in plain JavaScript. Each resume section is a self-contained class that renders into placeholder elements in `index.html`. All data lives in one source file, which makes updates easy.

## Prerequisites

- Node.js 18+ (or any version supported by Vite 7).

## Getting Started

```sh
git clone <repo-url>
npm install
npm run dev
```

## Customization

- Update resume content in `constants/resume.js`.
- Adjust styles in `styles/global.css` and component-level CSS files (for example, `components/experience/experience.css`).
- Modify component logic within the modules under `components/`.

## PDF Export

Click the **Download** button in the header. The helper in `scripts/helpers.js` temporarily hides the button, renders a high-resolution PDF via `html2pdf.js`, and restores the UI afterward.

## Project Structure

```
components/           # Individual component modules
constants/resume.js   # Resume data
scripts/              # Bootstrap and helpers
styles/               # Global and component styles
index.html            # Entry point for Vite
```

## License

ISC © Tristan Samuk
