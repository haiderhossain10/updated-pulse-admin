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
                "hero-connected": "url('./src/assets/images/connected-bg.png')",
                "connected-mobile-bg":
                    "url('./src/assets/images/coonected-mobile-bg.png')",
            },
            fontFamily: {
                "gilroy-bold": ["Gilroy-Bold"],
                "gilroy-semibold": ["Gilroy-SemiBold"],
                "gilroy-medium": ["Gilroy-Medium"],
            },
        },
    },
    plugins: [],
};
