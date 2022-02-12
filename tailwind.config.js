module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Poppins']
            }
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp')
    ],
};
