# Glow Salon: Luxury Hair Styling & Care

## Overview
Glow Salon is a premium, mobile-first single-page application (SPA) designed to showcase a hair salon's services, pricing, and portfolio. Built with **React** and **TypeScript**, this modern frontend leverages **Vite** for a fast development experience and **Tailwind CSS** for efficient, utility-first styling. It features direct **WhatsApp integration** for seamless appointment booking and inquiries, creating an elegant and highly converting digital presence for the business.

## Features
-   **Intuitive Navigation**: A responsive, dynamic navigation bar with smooth scrolling to key sections, enhancing user experience.
-   **Dynamic Business Configuration**: All salon details, including services, pricing, gallery content, and contact information, are centrally managed via `src/businessConfig.ts` for easy updates.
-   **Direct WhatsApp Integration**: Seamless one-click functionality across various sections allows users to book appointments or make inquiries directly via WhatsApp.
-   **Elegant Service Showcase**: A dedicated section vividly presents the salon's core services with engaging descriptions.
-   **Transparent Pricing**: A clear and stylish pricing section outlines key service rates, offering transparency to potential clients.
-   **Interactive Photo Gallery**: Features a masonry-layout gallery showcasing the salon's professional work, allowing clients to "Book Look" directly from an image.
-   **Integrated Contact & Location**: An embedded Google Map, alongside clear display of business hours and address, simplifies finding the salon.
-   **Modern UI/UX**: Crafted with **Tailwind CSS** for a polished and responsive design, complemented by **Motion** for smooth, engaging animations.
-   **Client Testimonials**: A dedicated section highlighting positive client feedback, building trust and credibility.

## Getting Started

Follow these steps to set up the project locally on your machine.

### Installation

1.  **Clone the Repository**:
    ```bash
    git clone git@github.com:Charmingdc/templates # Assuming you'd rename the directory if preferred
    ```
2.  **Navigate to Project Directory**:
    ```bash
    cd templates # Or your chosen directory name
    ```
3.  **Install Dependencies**:
    ```bash
    npm install
    ```
    or if you prefer yarn:
    ```bash
    yarn install
    ```
    or pnpm:
    ```bash
    pnpm install
    ```
4.  **Start the Development Server**:
    ```bash
    npm run dev
    ```
    This will typically start the application at `http://localhost:5173`.

5.  **Build for Production**:
    ```bash
    npm run build
    ```
    This command compiles the project for production, creating optimized assets in the `dist` directory.

6.  **Preview Production Build**:
    ```bash
    npm run preview
    ```
    This command serves the built production application locally, allowing you to test it before deployment.

### Environment Variables
This project primarily uses an internal configuration file for business details. No external `.env` files or system environment variables are strictly required for the application to run. All configurable data is managed within `src/businessConfig.ts`.

## Usage
Upon running the application, you will be presented with the Glow Salon landing page.

-   **Navigate**: Use the top navigation bar to jump between sections like "Services", "Rates", "Portfolio", and "Find Us".
-   **Book Appointments**: Look for "Book Your Visit" or "Book Appointment" buttons throughout the site, especially in the Hero, Services, and Contact sections. Clicking these buttons will open a direct WhatsApp chat with the salon, pre-filled with a relevant message.
-   **Explore Gallery**: Visit the "Portfolio" section to view examples of the salon's work. You can tap on any image to expand it and find an option to "Book Look" for that specific style via WhatsApp.
-   **Find Us**: The "Find Us" section provides the salon's address, working hours, and an interactive Google Map for easy directions.

## Technologies Used

| Technology       | Description                                                          | Link                                                                      |
| :--------------- | :------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| React            | A JavaScript library for building dynamic user interfaces.           | [https://react.dev/](https://react.dev/)                                  |
| TypeScript       | A typed superset of JavaScript that compiles to plain JavaScript.    | [https://www.typescriptlang.org/](https://www.typescriptlang.org/)        |
| Vite             | A next-generation frontend tooling that provides an extremely fast development experience. | [https://vitejs.dev/](https://vitejs.dev/)                                |
| Tailwind CSS     | A utility-first CSS framework for rapidly building custom designs.   | [https://tailwindcss.com/](https://tailwindcss.com/)                      |
| Motion           | A tiny, production-ready animation library for React that makes complex animations simple. | [https://motion.dev/](https://motion.dev/)                                |
| ESLint           | A pluggable linting utility for JavaScript and TypeScript.           | [https://eslint.org/](https://eslint.org/)                                |
| PostCSS          | A tool for transforming CSS with JavaScript plugins, used here with Autoprefixer. | [https://postcss.org/](https://postcss.org/)                              |
| Autoprefixer     | A PostCSS plugin to parse CSS and add vendor prefixes to CSS rules.  | [https://github.com/postcss/autoprefixer](https://github.com/postcss/autoprefixer) |

## License
This project is open-source and available under the MIT License.

## Author

**[Your Name Here]**

-   LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/your-username)
-   X (formerly Twitter): [@your_twitter_handle](https://twitter.com/your_twitter_handle)

---

![TypeScript](https://img.shields.io/badge/Made%20with-TypeScript-blue?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.3-yellowgreen?style=flat-square&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwindcss)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)