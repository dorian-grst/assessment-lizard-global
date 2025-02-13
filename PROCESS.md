# Development Process Documentation

This document outlines the steps I took during the development of this project, including decisions, challenges, and improvements made along the way.

---

## 1. Package Manager: Switching from Yarn to npm (and later to pnpm)

Initially, the project used **Yarn** as its package manager. However, since I am more familiar with **npm**, I decided to switch to it for better workflow efficiency. Later, I migrated to **pnpm** due to its faster performance compared to both npm and Yarn. To start the project, use the following command:

```
pnpm install
pnpm run start
```

---

## 2. Dependency Updates and Security Fixes

The project was originally created in 2021, so many dependencies were outdated. To ensure a stable and secure foundation, I updated all dependencies to their latest versions and resolved any vulnerabilities.

During this process, I discovered that the `react-scripts` package was causing conflicts with other dependencies. After investigating its [npmjs page](https://www.npmjs.com/package/react-scripts?activeTab=readme) and the [GitHub repository](https://github.com/facebook/create-react-app), I learned that the package is deprecated. As a result, I removed it and replaced it with **Vite**, a modern build tool that significantly improves development speed and performance.

---

## 3. Transition from JavaScript to TypeScript

To enhance code quality and maintainability, I migrated the project from **JavaScript** to **TypeScript**. TypeScript provides static typing, which helps catch errors early and improves developer productivity.

To achieve this, I installed the necessary TypeScript dependencies and initialized a `tsconfig.json` file using the following commands:

```
npm install --save typescript @types/react @types/react-dom
npx tsc --init
```

I then renamed all `.js` and `.jsx` files to `.ts` and `.tsx` respectively, ensuring the project was fully compatible with TypeScript.

---

## 4. Setting Up TailwindCSS and Shadcn

To streamline the styling process, I integrated **TailwindCSS**, a utility-first CSS framework, and **Shadcn**, a component library. These tools allowed me to build the UI quickly and efficiently while maintaining a consistent design system.

- **TailwindCSS**: Provides a robust set of utility classes for rapid prototyping and responsive design.
- **Shadcn**: Offers pre-built, customizable components that align with modern design standards.

---

## 5. Application Development

### Initial Setup and Data Fetching

With a clear vision of the application's design and functionality, I began by implementing the core features:

1. **Data Fetching**: Retrieved data from the mock API using **React Query** and displayed it in a table format.
2. **List View**: Rendered relevant properties for each item in the list.

### Advanced Features

Next, I implemented additional functionalities to enhance the user experience:

1. **Category Filtering**: Added a multi-select filter for categories, with the filter state persisted in the URL query string.
2. **Pagination**: Implemented pagination to allow users to navigate through the data.
3. **Sorting**: Enabled sorting by publication date (ascending or descending).
4. **Column Customization**: Allowed users to hide columns from the table.
5. **Rows Per Page**: Added an option to choose the number of items displayed per page.
6. **Routing**: Added client-side routing for a detail page to display more information about each item.
7. **Responsive Design**: Designed a mobile-first layout using TailwindCSS, ensuring the application is fully responsive.
8. **Semantic HTML**: Ensured the use of semantic markup for improved accessibility and SEO.

### Additional Enhancements

While not explicitly required, I incorporated the following features to improve the application:

1. **Theme Switcher**: Implemented a dark/light theme toggle for better user customization.
2. **Continuous Integration**: Set up GitHub Actions for automated tests (prettier & build) and deployment.

### Animations and User Experience

To make the application more dynamic and engaging, I integrated animations using **GSAP** (GreenSock Animation Platform). These animations include:

- Smooth transitions when landing on the main page.
- Animated row clicks for navigating to the detail page.

Additionally, I implemented **Skeleton loading states** to provide visual feedback during data fetching and added a **custom scrollbar** to enhance the overall aesthetics.

### Deployment and Collaboration

I set up a **GitHub Actions workflow** to automate linting and building the project on every push or pull request to the `main` branch. Successful builds on main are deployed to **GitHub Pages**, accessible [here](https://dorian-grst.github.io/assessment-lizard-global).

To demonstrate my collaborative workflow, I created and merged this [pull request](https://github.com/dorian-grst/assessment-lizard-global/pull/2).

### Code Documentation

Throughout the codebase, I added comments to explain my thought process and implementation decisions, ensuring the project is easy to understand and maintain.

### SEO Optimization

Finally, I included **meta tags** to improve the application's search engine visibility.

---

## 6. Potential Improvements

If given more time, I would focus on the following areas to further enhance the application:

1. **Testing**: Add unit and integration tests using **Jest** and **React Testing Library**.
2. **Styling**: Explore using a CSS preprocessor (e.g., **Sass**) or CSS-in-JS for more advanced styling capabilities.
3. **Accessibility**: Conduct a thorough accessibility audit and implement improvements to ensure the application is fully inclusive.
4. **Performance Optimization**: Analyze and optimize the application's performance, particularly for large datasets.
5. **Code Refactoring**: Refactor the codebase to improve readability, maintainability, and scalability.

---

## Conclusion

This project was an excellent opportunity to showcase my skills in front-end development, problem-solving, and attention to detail. By leveraging modern tools and best practices, I was able to deliver a robust, user-friendly application that meets the project requirements while incorporating additional enhancements to elevate the user experience.
