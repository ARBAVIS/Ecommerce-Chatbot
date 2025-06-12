# 🛍️ E-Commerce Chatbot with JWT Authentication

A full-stack e-commerce chatbot built using **React (Vite)** on the frontend and **Node.js (Express)** on the backend. Users can sign up, log in, and chat with a bot to find products (like laptops or mobiles) filtered by category and price.

---

## 📦 Features

* 🔐 JWT-based signup and login authentication
* 🤖 Chat interface that responds with matching products
* 📁 Data stored in a local `db.json` file
* 📦 Products filtered by keywords like "laptop under 40000"
* 🧠 Regex-based text extraction for query handling

---

## 🚀 Tech Stack

| Frontend     | Backend    | Auth      | Data      |
| ------------ | ---------- | --------- | --------- |
| React (Vite) | Express.js | JWT Token | `db.json` |
| Tailwind CSS | Node.js    |           |           |

---

## 🛠️ Getting Started

### 📁 Clone the Repository

```bash
git clone https://github.com/yourusername/ecommerce-chatbot.git
cd ecommerce-chatbot
```

### 🔧 Setup Backend

```bash
cd server
npm install
npm run dev  # or nodemon index.js
```

> Make sure `db.json` is in the `server/` folder.

### 🌐 Setup Frontend

```bash
cd client
npm install
npm run dev
```

> App will run at `http://localhost:5173`

### 🌍 Backend runs at:

```
http://localhost:5000
```

---

## 📁 Project Structure

```
project-root/
├── client/         # React Frontend
│   ├── App.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── ChatBot.jsx
├── server/         # Express Backend
│   ├── index.js
│   └── db.json     # Product database
└── README.md
```

---

## 💬 Chat Examples

| Message               | Result                      |
| --------------------- | --------------------------- |
| `Show laptops`        | All laptop products         |
| `mobiles under 20000` | Mobiles with price < ₹20000 |
| `laptop under 40000`  | Laptops with price < ₹40000 |

---

## 📌 Todo / Future Features

* [ ] Product image URLs
* [ ] Filters (brand/category dropdowns)
* [ ] Chat history
* [ ] MongoDB or JSON-server integration

---

## 👨‍💻 Author

Developed by **Aditya Baviskar** — feel free to fork, modify, or contribute!
