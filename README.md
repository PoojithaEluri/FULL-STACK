# MERN Stack CRUD Application

A full-stack CRUD (Create, Read, Update, Delete) application built using the MERN stack. This project allows users to manage Users, Products, and Orders through a responsive React frontend and an Express/MongoDB backend.

## 🚀 Features

- Create, Read, Update, and Delete Users
- Create, Read, Update, and Delete Products
- Create, Read, Update, and Delete Orders
- RESTful API using Express.js
- MongoDB database with Mongoose
- React frontend with React Router
- Axios for API communication
- Responsive UI using Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Dotenv

## 📁 Project Structure

```
FULL STACK/
│
├── Backend/
│   ├── src/
│   ├── server.js
│   └── package.json
│
└── Frontend/
    ├── src/
    ├── public/
    └── package.json
```

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/PoojithaEluri/FULL-STACK.git
```

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file inside the Backend folder:

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/userdb
```

Start the backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

## 🌐 API Endpoints

### Users
- GET `/users`
- GET `/users/:id`
- POST `/users`
- PUT `/users/:id`
- DELETE `/users/:id`

### Products
- GET `/products`
- GET `/products/:id`
- POST `/products`
- PUT `/products/:id`
- DELETE `/products/:id`

### Orders
- GET `/orders`
- GET `/orders/:id`
- POST `/orders`
- PUT `/orders/:id`
- DELETE `/orders/:id`

## 👩‍💻 Author

**Poojitha Eluri**

GitHub: https://github.com/PoojithaEluri

---

⭐ If you found this project useful, consider giving it a star.
