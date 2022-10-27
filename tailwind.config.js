/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'hero': "url('./assets/img/hero-bg.webp')"
            },
            colors: {
                'checkout': "#FF9100",
                'checkout-hover': "#C67200"
            }
        }
    },
    plugins: [],
}