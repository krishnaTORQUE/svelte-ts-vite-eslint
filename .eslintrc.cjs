module.exports = {
    env: {
        es2022: true,
        browser: true,
        node: true,
        commonjs: true,
    },
    extends: ["eslint:recommended"],
    ignorePatterns: ["node_modules", "dist"],
    overrides: [
        {
            files: [
                "*.html",
                "*.css",
                "*.js",
                "*.jsx",
                "*.cjs",
                "*.mjs",
                "*.ts",
                "*.tsx",
                "*.svelte",
            ],
            processor: "svelte3/svelte3",
            parser: "@typescript-eslint/parser",
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        parser: "@typescript-eslint/parser",
        project: ["tsconfig.json"],
        extraFileExtensions: [
            "*.html",
            "*.css",
            "*.js",
            "*.jsx",
            "*.cjs",
            "*.mjs",
            "*.ts",
            "*.tsx",
            "*.svelte",
        ],
    },
    plugins: ["@typescript-eslint", "svelte3"],
    settings: {
        "svelte3/typescript": true,
    },
    rules: {},
};
