# JoE Website

This repository contains the source code for the JoE Website, a modern web interface built using React, TypeScript, and Tailwind CSS, following best practices in component-based architecture.

## Project Structure

All components and pages in the JoE Website are stored in the `src/components` and `src/pages` folders, respectively. Both components and pages follow a modular structure where each item resides in its own subfolder.

- **Components**: Stored in `src/components`, each component resides in its own folder with an `index.tsx` file for logic and layout and a `style.css` file for specific styling (if needed).

- **Pages**: Stored in `src/pages`, each page is organized into its own folder with an `index.tsx` file. Pages may also include complex layout components, which are organized into their own subfolders (within the `pages` folder) with an `index.tsx` file.

This structure allows for easy maintenance, scalability, and enhanced styling with Tailwind's utility-first approach.

## Features

- **TypeScript**: Adds static typing to JavaScript, improving code reliability and maintainability.
- **Modular Component and Page Architecture**: Each component and page is organized into its own folder for ease of development and maintenance.
- **Tailwind CSS**: Utility-first CSS framework that allows for rapid UI development with custom styling.
- **Responsive Design**: Ensures that the website is fully responsive across all device sizes.
- **Scalable Styling and Layout**: Components can be styled using Tailwind, while pages can include complex component layouts organized in dedicated folders.

## Technologies Used

- **React**: For building the user interface and handling component and page rendering.
- **TypeScript**: For type safety and improved code clarity.
- **Tailwind CSS**: For fast and maintainable styling.
- **CSS**: For additional component-specific styles (if required).
- **JavaScript (ES6+)**: For logic implementation (alongside TypeScript).

## Setup Instructions

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/JournalWebsite.git
   ```
   
# Folder Structure

```text
joe-website/
│
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── index.tsx
│   │   │   └── style.css
│   │   ├── Footer/
│   │   │   ├── index.tsx
│   │   │   └── style.css
│   │   └── ...
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── index.tsx
│   │   │   ├── layout/
│   │   │   │   ├── index.tsx
│   │   │   └── (may include additional layout components)
│   │   ├── About/
│   │   │   ├── index.tsx
│   │   │   ├── layout/
│   │   │   │   ├── index.tsx
│   │   └── ...
│
├── public/
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md

```
