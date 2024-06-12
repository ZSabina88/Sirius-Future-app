# React + TypeScript + Vite

Welcome to the CRUD Calendar App! This application is built using React, Redux Toolkit, Sass, and TypeScript. It allows users to Create, Read, Update, and Delete calendar events in an intuitive and user-friendly interface.


Features
Create Events: Add new events to the calendar.
Read Events: View details of events in a calendar view.
Update Events: Edit existing events.
Delete Events: Remove events from the calendar.
Responsive Design: Optimized for both desktop and mobile devices.


Tech Stack
React: JavaScript library for building user interfaces.
Redux Toolkit: State management library.
Sass: CSS pre-processor for better styling.
TypeScript: Typed JavaScript for safer and more scalable code.
library: dayjs

Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js and npm installed on your machine.
A modern web browser.


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
