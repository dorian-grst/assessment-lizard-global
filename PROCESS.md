# I wanted to write all my process in this file.

## 1. Switch from yarn to npm

Yarm was used in the project. I switched to npm because I've never used yarn before and I'm more familiar with npm. I thought it would be better to use npm in this project.

Update, I switched to pnpm because it's faster than npm and yarn. You can start the project with the following command :

```bash
$ pnpm run start
```

## 2. Bump versions of dependencies to latest versions and fix vulnerabilities

This project was created in 2021. I bumped the versions of the dependencies to the latest versions and fixed the vulnerabilities because it's a blank project, so I thought it would be better to start on a fresh note.

I removed the "react-scripts" dependency because it caused conflicts with others packages. So I checked the [npmjs page](https://www.npmjs.com/package/react-scripts?activeTab=readme) of the package, then I clicked on the [facebook github repository](https://github.com/facebook/create-react-app) and I saw that the package was deprecated that's why I removed it.

To run my code easily, I added `vite` as a development dependency.

## 3. Switch from JavaScript to TypeScript

I switched from JavaScript to TypeScript because I am more familiar with TypeScript and I think it's better to use TypeScript in a project like this. It will help me to write better code.

To do that I installed the following dependencies and created a `tsconfig.json` file using the following commands :

```bash
$ npm install --save typescript @types/react @types/react-dom
$ npx tsc --init
```

Then, I renamed the files with `.js` & `.jsx` extensions to `.ts` & `.tsx` extensions.

## 4. Setup TailwindCSS & Shadcn

I added [TailwindCSS](https://tailwindcss.com/) and [Shadcn](https://ui.shadcn.com/) to the project because I like to use them in my projects. TailwindCSS is a utility-first CSS framework and Shadcn is a component library. I think they will help me to build the project faster.

## 5. Create the Application

Having prior experience in design, I began developing the application with a clear vision of what I wanted to achieve.

I started by implementing the initial prerequisites using `React Query`, displaying a simple data table:

1. [x] Retrieve data from the mock API.
1. [x] Output the data in a list, including relevant properties for a list view.

Next, I added pagination and category filtering:

1. [x] Implement a category filter—this can be single or multi-select.
1. [x] Implement pagination—this can be traditional numbered pages or a "load more" button.

I also included the ability to sort posts by publication date in ascending or descending order, add or remove columns from the table, and choose the number of posts to display per page.

In the meantime, I added routing for the detail page and a theme switcher, which wasn't explicitly required but I found it interesting to implement.

I also made sure to use semantic HTML as much as possible:

1. [x] Use semantic markup where applicable.

Once these features were in place, I began working on the responsive design, which is an important aspect for me and very straightforward to implement with TailwindCSS, as it follows a mobile-first approach:

1. [x] Create a responsive layout using HTML and CSS.

Additionally, I incorporated animations using `GSAP` to make the application more dynamic, such as when landing on the main page or clicking on a table row to navigate to the detail page.

1. [x] Include animated transitions between application states, e.g., when filtering.
1. [x] Use client-side routing to create a "detail" page.

I took the opportunity to add a custom scrollbar to enhance the app's aesthetics and implemented `Skeleton` loading states to prevent users from seeing a blank screen during data fetching.
