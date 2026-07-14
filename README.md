# Tien PT - Senior QC Engineer Portfolio

A modern, high-performance interactive CV and portfolio for **Tien PT**, showcasing 13+ years of experience in Software Testing, Quality Assurance, and QA Automation.

## 🚀 Features

- **Dynamic Theme System**: Multiple built-in color themes with live switching.
- **Bilingual (English/Vietnamese)**: Full i18n support for seamless language toggling.
- **Interactive UI**: Fluid animations powered by `framer-motion`.
- **Modern Tech Stack**: Built with React 18, TypeScript, Vite, and Tailwind CSS v3.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile viewing.

## 🛠 Tech Stack

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+ recommended) and npm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone <your-github-repo-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

### Build for Production

Compile TypeScript and build the project for production:
```bash
npm run build
```
The optimized files will be generated in the `dist/` directory, ready to be deployed to GitHub Pages, Vercel, Netlify, or any static host.

## 🌐 Deployment (GitHub Pages)

To host this CV on GitHub Pages:
1. Make sure your repository is pushed to GitHub.
2. In `vite.config.ts`, if your repository name is not `<username>.github.io`, you might need to set the `base` path:
   ```ts
   export default defineConfig({
     base: '/repository-name/',
     // ...
   })
   ```
3. Run `npm run build`.
4. Deploy the contents of the `dist/` folder to your `gh-pages` branch, or use a GitHub Action to deploy automatically.

## 📜 License

This project is tailored for personal portfolio usage. All rights reserved by **Phung Thanh Tien**.
