/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {

        },
        fontFamily: {
            'sans': ['Sora', 'ui-sans-serif', 'system-ui']
        }
    },
    plugins: [require("@tailwindcss/typography")],
};
