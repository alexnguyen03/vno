module.exports = {
  darkMode: 'class', // Sử dụng class "dark" để bật dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // các đường dẫn khác
  ],
  safelist: [
    'bg-amber-300',
    'bg-blue-300',
    'bg-green-300',
    'bg-red-300',
    'bg-purple-300',
    'bg-pink-300',
    'bg-yellow-300',
    // Thêm tất cả các màu bạn dùng
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
