# GIVA Product Management System

## Overview

This is a full-stack web application designed to manage products. It leverages Next.js for the frontend, Node.js and Express.js for the backend, and PostgreSQL as the database.

## Features

* **Product Management:**
  - Add new products with details like name, description, price, and quantity.
  - View a list of all products with their details.
  - Edit existing product information.
  - Delete products from the list.
* **Responsive UI:** The frontend is built using Bootstrap for a responsive user interface.

## Technologies Used

* **Frontend:** Next.js (React), Bootstrap
* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL
* **HTTP Client:** Axios

## Setup Instructions

### Prerequisites

* Node.js and npm installed
* PostgreSQL installed and running locally
* Git for version control

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
2. **Install dependencies:**
   ```bash
   npm install
3. **Database Setup:**
* Create a new database in PostgreSQL (e.g., product_management).
* Run the following SQL query to create the products table:
   ```bash
   CREATE TABLE products (
   id SERIAL PRIMARY KEY,
   name TEXT NOT NULL,
   description TEXT,
   price FLOAT NOT NULL,
   quantity INTEGER NOT NULL
  );
4. **Configure Environment Variables**
* Create a .env file in the backend directory and add the following: 
   ```bash
   DATABASE_URL=postgresql://<username>:<password>@localhost:5432/product_management
* Replace <username> and <password> with your PostgreSQL credentials.

5. **Start the Backend Server:**
   ```bash
   npm start
* The backend server will run on http://localhost:5000


### Frontend Setup
1. **Navigate to the frontend directory:**
   ```bash
   cd ../frontend
2. **Install dependencies:**
   ```bash
   npm install
3. **Configure Environment Variables:**
* Create a .env.local file in the frontend directory and add the following:

   ```bash
   NEXT_PUBLIC_API_URL=http://localhost:5000
* This sets the backend API URL for the frontend.
4. **Start the Frontend Server:**
   ```bash
   npm run dev
* The frontend server will run on http://localhost:3000.

### Usage
* Once both servers are running, open your web browser and go to http://localhost:3000. You should see the Product Management interface where you can:

View a list of products
Add new products
Edit existing products
Delete products


 
