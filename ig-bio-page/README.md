# **Modern Link-in-Bio Page** ✨

## Overview

This project delivers a highly customizable and aesthetically pleasing link-in-bio page, designed to elegantly showcase business information, calls-to-action, services, and media. Built with **React**, **TypeScript**, **Vite**, and styled with **Tailwind CSS**, it features dynamic content management, robust SEO-friendly meta-data, and smooth animations powered by **Motion**. This template offers a modern, engaging digital presence, perfect for businesses and individuals seeking to consolidate their online footprint.

## Features

- **Dynamic Meta Data**: Automatically updates `document.head` with relevant information for superior SEO and optimized social media sharing through Open Graph and Twitter Cards.
- **Customizable Actions Section**: Easily configure various calls-to-action, including external links and interactive map displays for business locations.
- **Service Pricing Display**: An optional section to list and present services with their respective pricing in a clean, accessible modal interface.
- **Image Gallery Integration**: A dedicated section designed to showcase a visual gallery of business assets (this feature can be toggled via configuration).
- **Responsive & Animated UI**: Crafted with Tailwind CSS for a fully responsive experience across all devices, further enhanced by fluid and engaging animations from Motion.
- **Theme Support**: Includes both dark and light theme options, allowing for easy adaptation to user preference or brand aesthetics.
- **Vite-Powered Development**: Leverages Vite for a fast and efficient development experience, featuring rapid Hot Module Replacement (HMR).

## Getting Started

To get this project up and running on your local machine, follow these straightforward steps:

### Installation

1.  **Clone the Repository**:
    ```bash
    git clone git@github.com:Charmingdc/templates
    ```
2.  **Navigate to Project Directory**:
    Assuming the project resides in an `ig-bio-page` subfolder:
    ```bash
    cd templates/ig-bio-page
    ```
3.  **Install Dependencies**:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
4.  **Start the Development Server**:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
    This command will launch the application in your browser, typically at `http://localhost:5173`.

### Environment Variables

This project manages its configuration and dynamic data directly through TypeScript files rather than traditional `.env` files. All required settings are defined within `src/data/business.ts` and `src/data/config.ts` (see Usage section for details).

## Usage

This link-in-bio page is designed for quick and easy customization. The core data for your business and the page's overall configuration are managed in specific TypeScript files.

1.  **Configure Business Data**:
    - Locate the `src/data/business.ts` file. If it doesn't exist, create it. This file should contain your business's name, tagline, home link, detailed meta descriptions, Open Graph details, and the actions you wish to display.
    - **Example `src/data/business.ts` structure (illustrative):**

      ```typescript
      // src/data/business.ts
      export interface LinkAction {
        type: "link";
        label: string;
        url: string;
      }

      export interface MapAction {
        type: "map";
        label: string;
      }

      export type Action = LinkAction | MapAction;

      export interface Business {
        name: string;
        tagline: string;
        homeLink: string;
        metaDescription?: string;
        favicon?: string;
        ogTitle?: string;
        ogDescription?: string;
        ogImage?: string;
        twitterCard?: string;
        twitterSite?: string;
        twitterCreator?: string;
        location: {
          mapSrc: string; // Google Maps embed URL
          address: string;
        };
        actions: Action[];
        pricing?: { name: string; amount: number }[];
      }

      export const business: Business = {
        name: "Your Brand Name",
        tagline: "Your Catchy Slogan Here",
        homeLink: "https://yourwebsite.com",
        metaDescription:
          "Connect with us easily through our modern link-in-bio page.",
        favicon: "/your-favicon.png",
        ogTitle: "Your Brand on Social Media",
        ogDescription:
          "Find all our links and services in one convenient place.",
        ogImage: "/your-og-image.png",
        twitterCard: "summary_large_image",
        twitterSite: "@yourtwitterhandle",
        twitterCreator: "@yourtwitterhandle",
        location: {
          mapSrc:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.210427953258!2d144.9631316157077!3d-37.81421797975107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b339466e3b%3A0x8f0c9b0e2d3b2c3a!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1678888888888!5m2!1sen!2sau", // Replace with your actual Google Maps embed URL
          address: "123 Business Lane, Metropolis, Country"
        },
        actions: [
          {
            type: "link",
            label: "Visit Our Official Website",
            url: "https://yourwebsite.com"
          },
          {
            type: "link",
            label: "Explore Our Product Catalog",
            url: "https://yourwebsite.com/products"
          },
          { type: "map", label: "Locate Our Store" }
        ],
        pricing: [
          { name: "Standard Service", amount: 5000 },
          { name: "Premium Package", amount: 25000 }
        ]
      };
      ```

2.  **Configure Page Settings**:
    - Locate the `src/data/config.ts` file. If it doesn't exist, create it. This file controls optional sections and theming preferences.
    - **Example `src/data/config.ts` structure (illustrative):**
      ```typescript
      // src/data/config.ts
      export const config = {
        showPricing: true, // Set to `false` to hide the pricing section
        showGallery: true, // Set to `false` to hide the gallery section
        theme: "dark", // Options: "dark" or "light" for default theme
        accent: "224 191 184" // RGB values for the primary accent color (e.g., "R G B")
      };
      ```
    - The `accent` color defined in `config.ts` will dynamically override the `--accent` CSS variable, allowing for quick and consistent branding changes throughout the application.

3.  **Customize Content and Assets**:
    - Modify the `business` object in `src/data/business.ts` to reflect all your specific information, external links, and service offerings.
    - Toggle the visibility of sections like pricing and gallery by adjusting the boolean values in `src/data/config.ts`.
    - Replace any placeholder images (such as `/default-og-image.png`, `/vite.svg`) located in the `public` folder and ensure they are correctly referenced in your `business.ts` file or `index.html`.

## Technologies Used

| Technology       | Description                                                                                              |
| :--------------- | :------------------------------------------------------------------------------------------------------- |
| **TypeScript**   | Statically typed superset of JavaScript, enhancing code quality and developer experience.                |
| **React**        | A declarative JavaScript library for building dynamic and interactive user interfaces.                   |
| **Vite**         | A modern frontend build tool that provides an extremely fast development experience.                     |
| **Tailwind CSS** | A utility-first CSS framework that enables rapid UI development with a focus on component-based styling. |
| **Motion**       | A production-ready animation library for React, offering powerful and fluid UI animations.               |
| **Hugeicons**    | A comprehensive library offering a vast collection of high-quality, customizable icons.                  |

## Contributing

We wholeheartedly welcome contributions to this project! Your suggestions for improvements or new features are highly valued. Please adhere to the following guidelines:

- ✨ **Fork the Repository**: Begin by forking the project to your personal GitHub account.
- 🌳 **Create a New Branch**: For each new feature or bug fix, please create a dedicated branch to keep changes isolated.
- 💡 **Implement Your Changes**: Write clean, maintainable code following the existing style and best practices.
- 📝 **Submit a Pull Request**: Once your modifications are complete and tested, open a pull request explaining your changes and their benefits.
- 🐛 **Report Bugs**: If you encounter any issues or bugs, please open an issue on the GitHub repository, providing clear steps to reproduce the problem.

## Author

**Charmingdc**

- LinkedIn:
  [https://linkedin.com/in/adebayo-muis](https://linkedin.com/in/adebayo-muis]
- X (Twitter): [https://x.com/Charmingdc01](https://x.com/Charmingdc01)

## Badges

[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

---

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
