/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#FF2431",
                secondary: "#FFF1F1",
            },
            backgroundImage: {
                hero: "url('./src/assets/images/bg.png')",
            },
        },
    },
    plugins: [],
};
