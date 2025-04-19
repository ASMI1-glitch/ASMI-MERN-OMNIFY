MERN Blog Application
Overview
This is a full-stack blog application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application allows users to create, view, edit, and delete blog posts. It includes user authentication, ensuring that only registered users can create and manage their blogs. The application is responsive and works seamlessly on both desktop and mobile devices.

Features
User Authentication: Sign up and log in using email and password.

Blog Management: Create, read, update, and delete blog posts.

Public Blog Listing: View all published blogs with pagination.

Responsive Design: Optimized for both desktop and mobile viewing.

RESTful API: Backend API built with Express.js.

Database: MongoDB for data persistence.

Deployment: Hosted on Railway (backend) and Vercel (frontend).

Technologies Used
Frontend: React.js, Vite, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB (via Railway)

Authentication: JSON Web Tokens (JWT)

Deployment: Railway (Backend), Vercel (Frontend)

Getting Started
Prerequisites
Node.js and npm installed

MongoDB URI (can use Railway's MongoDB plugin)

Installation
Clone the repository

bash
Copy
Edit
git clone https://github.com/yourusername/mern-blog-app.git
cd mern-blog-app
Install dependencies for the backend

bash
Copy
Edit
cd server
npm install
Install dependencies for the frontend

bash
Copy
Edit
cd ../client
npm install
Environment Variables
Create a .env file in the server directory with the following variables:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
In the client directory, create a .env file:

env
Copy
Edit
VITE_API_BASE_URL=http://localhost:5000/api
Running the Application
Start the backend server

bash
Copy
Edit
cd server
npm run dev
Start the frontend development server

bash
Copy
Edit
cd ../client
npm run dev
The application will be accessible at http://localhost:5173.

Deployment
Backend (Railway)
Login to Railway CLI

bash
Copy
Edit
railway login
Initialize and deploy

bash
Copy
Edit
railway init
railway up
Add MongoDB plugin

In the Railway dashboard, add the MongoDB plugin to your project.

Set the MONGO_URI environment variable with the provided connection string.

Frontend (Vercel)
Push your code to GitHub

Import project in Vercel

Go to Vercel and import your GitHub repository.

Set Environment Variables

VITE_API_BASE_URL: Set this to your Railway backend URL.

Deploy

Click on deploy, and Vercel will handle the rest.

API Endpoints
Authentication
POST /api/auth/register - Register a new user

POST /api/auth/login - Login user and return JWT

Blogs
GET /api/blogs - Get all blogs (public)

GET /api/blogs/:id - Get a single blog by ID (public)

POST /api/blogs - Create a new blog (authenticated)

PUT /api/blogs/:id - Update a blog (authenticated & author only)

DELETE /api/blogs/:id - Delete a blog (authenticated & author only)

Folder Structure
pgsql
Copy
Edit
mern-blog-app/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── server/                 # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
└── README.md
Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

License
This project is licensed under the MIT License.

Contact
For any inquiries or feedback, please contact [prasadasmi619@gmail.com].
![Screenshot 2025-04-19 122507](https://github.com/user-attachments/assets/fc340c99-795e-4b4d-a4de-59bdc07d58f8)
![Screenshot 2025-04-19 122451](https://github.com/user-attachments/assets/9b4ca283-3cec-4748-8932-d27fbe7ef326)
![Screenshot 2025-04-19 122440](https://github.com/user-attachments/assets/8957f63c-29e6-4e82-997e-d239389d3f5a)
![Screenshot 2025-04-19 122415](https://github.com/user-attachments/assets/7357cd88-18ff-4324-b308-265028abba0e)
![Screenshot 2025-04-19 122126](https://github.com/user-attachments/assets/9446d8b6-3239-48e7-90a9-5c7c42b3ec56)
![Screenshot 2025-04-19 122056](https://github.com/user-attachments/assets/c55b8962-fa80-499b-b0e0-4ad885d63fe2)



