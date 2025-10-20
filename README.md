# Little Panda Preschool Website

This is the official website for Little Panda Preschool, a childcare center focused on nurturing potential and fostering growth in a vibrant, modern, and engaging online environment.

## Project Overview

The Little Panda website is a key component of our viral enrollment pipeline, designed to attract and engage local parents with infants and toddlers. The site was redesigned with a "potential, nurture, and plant for the future" theme, migrating from a static HTML site to a modern SvelteKit application to improve maintainability, performance, and user experience.

## Tech Stack & Architecture

The website is built with a mobile-first approach using the following technologies:

*   **Framework:** [SvelteKit](https://kit.svelte.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [Lottie](https://lottiefiles.com/) for vector animations and Svelte actions/transitions for UI animations.
*   **Deployment & Forms:** [Netlify](https://www.netlify.com/)

The site follows a component-based architecture with a master layout that includes a reusable header and footer. The content is designed to be easily updatable, with data for careers and locations externalized into simple data structures.

### Folder Structure

The `src/` directory is organized as follows:

*   `lib/`: This directory contains the core reusable code for the application.
    *   `actions/`: Svelte actions for adding custom functionality to elements.
    *   `components/`: Reusable Svelte components, organized by their function (e.g., `layout`, `home`, `ui`).
    *   `data/`: Externalized data for careers, locations, and other dynamic content.
*   `routes/`: This directory contains the pages and API routes for the application. Each subdirectory represents a route in the URL.
*   `app.css`: The global stylesheet for the application.
*   `app.html`: The main HTML template for the application.

## Getting Started

To run the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd website
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Deployment

The website is continuously deployed to [Netlify](https://www.netlify.com/). Any changes pushed to the `main` branch will automatically trigger a new build and deployment.

## Project Configuration

*   **`package.json`**: Defines the project scripts and dependencies. Use `npm install` to install dependencies and `npm run dev` to start the development server.
*   **`svelte.config.js`**: The project is configured as a static site, with the output being sent to the `build` directory.
*   **`vite.config.ts`**: It uses the standard SvelteKit Vite plugin.
*   **`tailwind.config.ts`**: The project has a well-defined design system with a custom color palette and fonts.
*   **`postcss.config.js`**: It uses Tailwind CSS and Autoprefixer for CSS processing.
*   **`netlify.toml`**: This file is set up for deployment on Netlify, with the correct build command and publish directory specified.
