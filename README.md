ShoppyGlobe - E-commerce Application

ShoppyGlobe is a fully functional e-commerce frontend application built with *React, **Vite, **Redux, and **Tailwind CSS*. It allows users to browse products, view details, and manage their shopping cart.

---

🔧 Tech Stack

- ⚛️ React
- ⚡ Vite
- 🎨 Tailwind CSS
- 🗂️ Redux Toolkit
- 🌐 React Router
- 📦 DummyJSON API

---

 📦 Features

- 🏠 Home page with product listing
- 🔍 View product details
- 🛒 Add/remove/update items in cart
- ⚙️ Global state management with Redux
- ❌ 404 Not Found page
- ⚡ Tailwind CSS for responsive design

---

🚀 Getting Started

 1. Clone the Repo


git clone https://github.com/joshna0217/shoppyglobe
cd shoppyglobe


install dependencies

npm install
npm run dev

shoppyglobe/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductItem.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   └── NotFound.jsx
│   ├── redux/
│   │   ├── store.js
│   │   └── cartSlice.js
│   ├── hooks/
│   │   └── useFetchProducts.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── postcss.config.js

API Used
This project uses the free DummyJSON API for product data.

github link https://github.com/joshna0217/shoppyglobe