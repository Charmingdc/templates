# Dynamic Frontend Showcase: Salon Landing Page & Link-in-Bio Platform

This repository presents a collection of modern, high-performance frontend applications, meticulously crafted with React, TypeScript, and Tailwind CSS. It features two distinct projects: a sophisticated landing page for a luxury hair salon and a highly customizable, dynamic link-in-bio profile page designed for businesses. Both projects emphasize responsive design, smooth animations, and a polished user experience, serving as robust foundations for professional online presence.

## 🚀 Project Structure

This repository is organized as a monorepo, housing two independent frontend projects:

*   `salon-page/`: A comprehensive landing page for "Glow Salon", showcasing services, pricing, gallery, and contact information.
*   `ig-bio-page/`: A versatile link-in-bio style page, perfect for Instagram profiles or mini-websites, featuring dynamic actions and meta-data management.

---

## ✨ Glow Salon Landing Page

### Overview
A premium, mobile-first landing page for a hair salon, meticulously designed for elegance and conversion. Built with React and TypeScript, it leverages Tailwind CSS for responsive styling and `motion/react` for subtle, engaging animations, offering a seamless user experience.

### Features
-   **Elegant & Responsive Design**: A visually stunning interface that adapts flawlessly across all devices.
-   **WhatsApp Integration**: Direct booking and inquiry options via WhatsApp for enhanced client engagement.
-   **Service Showcase**: Dedicated sections to highlight diverse salon services with clear descriptions.
-   **Transparent Pricing**: A detailed pricing menu, ensuring clarity for potential clients.
-   **Dynamic Image Gallery**: A curated portfolio showcasing real client results in a masonry layout.
-   **Client Testimonials**: Authentic reviews to build trust and credibility.
-   **Interactive Contact Section**: Features business location with an embedded Google Map and working hours.
-   **Smooth Animations**: Utilizes `motion/react` for captivating scroll-based and element-specific transitions.

### Technologies
| Technology        | Description                                       | Link                                                 |
| :---------------- | :------------------------------------------------ | :--------------------------------------------------- |
| **React**         | Frontend JavaScript library for UI development.   | [React](https://react.dev/)                          |
| **TypeScript**    | Strongly typed JavaScript superset.               | [TypeScript](https://www.typescriptlang.org/)        |
| **Vite**          | Fast development build tool.                      | [Vite](https://vitejs.dev/)                          |
| **Tailwind CSS**  | Utility-first CSS framework for rapid styling.    | [Tailwind CSS](https://tailwindcss.com/)             |
| **PostCSS**       | Tool for transforming CSS with JavaScript plugins. | [PostCSS](https://postcss.org/)                      |
| **motion/react**  | Declarative animation library.                    | [motion](https://www.motion.dev/)                    |

### Getting Started

#### Installation & Setup
1.  **Navigate to the project directory**:
    ```bash
    cd salon-page
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

#### Customization
-   All business-specific content (name, contact, services, pricing, gallery) can be easily configured in `src/businessConfig.ts`.
-   Update `public/` directory with your own images and assets.

---

## 🔗 Dynamic Link-in-Bio Page

### Overview
A highly flexible and customizable link-in-bio page, designed for businesses or individuals looking to consolidate their online presence. This React and TypeScript application, styled with Tailwind CSS, offers dynamic content updates and robust meta-tag management for optimal SEO and social sharing.

### Features
-   **Dynamic Content Management**: Easily update business name, tagline, and call-to-action links without code changes (via configuration files).
-   **Configurable Action Buttons**: Support for various action types, including external links and interactive map displays.
-   **SEO-Optimized**: Utilizes a custom `useBusinessHead` hook to dynamically update HTML meta tags for improved search engine visibility and social media sharing (Open Graph, Twitter Cards).
-   **Interactive Modals**: Seamless display of maps or pricing details within a modal overlay.
-   **Theming**: Supports dynamic theme switching (light/dark mode, implied by CSS variables).
-   **Animated Transitions**: Smooth animations for sections and elements powered by `motion/react`.

### Technologies
| Technology        | Description                                       | Link                                                 |
| :---------------- | :------------------------------------------------ | :--------------------------------------------------- |
| **React**         | Frontend JavaScript library for UI development.   | [React](https://react.dev/)                          |
| **TypeScript**    | Strongly typed JavaScript superset.               | [TypeScript](https://www.typescriptlang.org/)        |
| **Vite**          | Fast development build tool.                      | [Vite](https://vitejs.dev/)                          |
| **Tailwind CSS**  | Utility-first CSS framework for rapid styling.    | [Tailwind CSS](https://tailwindcss.com/)             |
| **PostCSS**       | Tool for transforming CSS with JavaScript plugins. | [PostCSS](https://postcss.org/)                      |
| **motion/react**  | Declarative animation library.                    | [motion](https://www.motion.dev/)                    |
| **Hugeicons**     | High-quality icon library.                        | [Hugeicons](https://hugeicons.com/)                  |

### Getting Started

#### Installation & Setup
1.  **Navigate to the project directory**:
    ```bash
    cd ig-bio-page
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

#### Customization
-   All business-related metadata, actions, pricing, and gallery settings are managed via `src/data/business.ts` and `src/data/config.ts` (these files are external to the provided code context but are referenced in `App.tsx` and `use-business-head.tsx`). You would need to populate these files according to your business needs and the interfaces defined within the project.
-   Modify theme colors and other design tokens in `tailwind.config.js` and `src/index.css`.

---

## 🛠️ General Installation for the Monorepo

To set up and run either of these projects, follow these general steps:

### Clone the Repository
First, clone the entire repository to your local machine:

```bash
git clone git@github.com:Charmingdc/templates
cd templates
```

### Install Dependencies & Run
Each project lives in its own directory (`salon-page/` and `ig-bio-page/`). Navigate into the desired project directory to install its specific dependencies and run it.

#### For the `salon-page` Project:
```bash
cd salon-page
npm install
npm run dev
```
Access the application at `http://localhost:5173` (default Vite port).

#### For the `ig-bio-page` Project:
```bash
cd ig-bio-page
npm install
npm run dev
```
Access the application at `http://localhost:5173` (default Vite port).

### Building for Production
To create optimized production builds for either project:

#### For the `salon-page` Project:
```bash
cd salon-page
npm run build
```
This will generate production-ready static assets in the `dist/` folder.

#### For the `ig-bio-page` Project:
```bash
cd ig-bio-page
npm run build
```
This will generate production-ready static assets in the `dist/` folder.

---

## 🤝 Contributing

Contributions are always welcome! If you have suggestions for improvements or new features, please follow these guidelines:

*   💡 Fork the repository and create your branch from `main`.
*   🐛 Ensure your code adheres to the project's coding standards.
*   ✅ Make sure your changes pass all relevant checks (linting, TypeScript).
*   📝 Create a clear, concise pull request with a descriptive title.

---

## ✍️ Author

**Your Name**

*   LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourusername)
*   X (formerly Twitter): [Your X Profile](https://twitter.com/yourusername)

---

## Badges

[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![motion](https://img.shields.io/badge/motion-black?style=flat-square&logo=framer&logoColor=white)](https://www.motion.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)](https://eslint.org/)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
