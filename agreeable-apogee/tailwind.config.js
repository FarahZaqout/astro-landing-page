/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                confidant: {
                    primary: "#ffffff",
                    secondary: "#000000",
                    bgPrimary: "#9263b8",
                    bgSecondary: "#ffffff",
                },
                confider: {
                    primary: "#ffffff",
                    secondary: "#000000",
                    bgPrimary: "#ff9a54",
                    bgSecondary: "#ffffff",
                },
            },
        },
    },
    plugins: [],
};
