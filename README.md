# @gtpd/eslint-config

A shared ESLint configuration for GTPD projects, optimized for Next.js, React, Tailwind CSS, and Prettier.

## Features

- **Next.js Core Web Vitals Rules** for better performance and best practices.
- **React and JSX Support** with recommended rules.
- **Tailwind CSS Linting** with the official plugin.
- **Prettier Integration** for code formatting.
- Stylistic rules for:
  - Sorting imports, keys, and destructured properties.
  - Enforcing consistent arrow function parentheses and comma styles.
- Customizable and extendable for project-specific needs.

## Installation

1. **Install the Package**

    ```bash
    npm install @gtpd/eslint-config --save-dev
    ```

2. **Install Peer Dependencies**

    This package relies on the following peer dependencies:

    ```bash
    npm install eslint eslint-config-next eslint-config-prettier eslint-plugin-react eslint-plugin-tailwindcss eslint-plugin-sort-destructure-keys eslint-plugin-perfectionist @stylistic/eslint-plugin prettier --save-dev
    ```

    You can use the following one-liner to install all at once:

    ```bash
    npx install-peerdeps --dev @gtpd/eslint-config
    ```

3. **Extend the Config in .eslintrc.js**

    Create or update your `.eslintrc.js` file:

    ```javascript
    module.exports = {
      extends: ['@gtpd/eslint-config'],
    };
    ```







