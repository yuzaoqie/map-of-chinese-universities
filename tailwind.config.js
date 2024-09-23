/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // 确保包含了所有需要的文件路径
  ],
  theme: {
    extend: {
      colors: {
        'lineTable-blue': '#0b77cf',
        'bgTable-blue': '#104e7c',
        'textTable-white': '#ffffff',
      },
    },
  },
  plugins: [],
};
