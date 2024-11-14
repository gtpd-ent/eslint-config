import react from "eslint-plugin-react";
import stylistic from "@stylistic/eslint-plugin";
import sortDestructureKeys from "eslint-plugin-sort-destructure-keys";
import perfectionist from "eslint-plugin-perfectionist";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    {
        ignores: ["node_modules", ".next", "next.config.ts", "tailwind.config.ts" ]
    }, 
    ...compat.extends(
        "next/core-web-vitals",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:tailwindcss/recommended",
        "prettier",
    ), 
    {
        files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
        plugins: {
            react,
            "@stylistic": stylistic,
            "sort-destructure-keys": sortDestructureKeys,
            perfectionist,
        },

        languageOptions: {
            globals: {
                JSX: true,
            },

            ecmaVersion: "latest",
        
            sourceType: "module",

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        rules: {
            "@stylistic/arrow-parens": ["warn", "always"],
            "@stylistic/comma-dangle": ["warn", "always-multiline"],
            "@stylistic/comma-style": ["error", "last"],

            "import/extensions": ["error", {
                js: "never",
            }],

            "import/no-unresolved": "error",

            "import/order": ["warn", {
                groups: ["external", ["builtin", "internal"], "parent", "sibling", "index"],
                "newlines-between": "always",
            }],

            "no-console": "warn",
            "no-duplicate-imports": "warn",

            "no-unused-vars": ["warn", {
                argsIgnorePattern: "^_",
            }],

            "no-var": "error",

            "perfectionist/sort-object-types": ["warn", {
                type: "natural",
                ignoreCase: true,
            }],

            "prefer-const": "error",
            "react/hook-use-state": "error",
            "react/jsx-boolean-value": "error",
            "react/jsx-fragments": ["error", "element"],

            "react/jsx-sort-props": ["warn", {
                callbacksLast: false,
                ignoreCase: true,
                shorthandFirst: false,
            }],

            "react/self-closing-comp": "warn",

            "sort-destructure-keys/sort-destructure-keys": ["warn", {
                caseSensitive: false,
            }],

            "sort-imports": ["warn", {
                allowSeparatedGroups: true,
                ignoreCase: true,
                memberSyntaxSortOrder: ["all", "single", "multiple", "none"],
            }],

            "sort-keys": ["warn", "asc", {
                allowLineSeparatedGroups: true,
                caseSensitive: false,
                natural: true,
            }],

            yoda: "error",
        },
    }
];