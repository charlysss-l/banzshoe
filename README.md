**Shoe Inventory Management System**

This project is a Shoe Inventory Management System built using the MERN (MongoDB, Express.js, React, Node.js) stack. It provides a platform for managing shoe products, allowing administrators to add, edit, and delete products, while customers can view and browse the available inventory.

Admin's Panel: https://banzshoe-admin.vercel.app/


**Prerequisites**

Before you begin, ensure you have the following installed:


Node.js (v14 or later)
npm (Node Package Manager)
MongoDB (for local development) or an account on MongoDB Atlas.

**Setup Instructions

Clone the Repository:**

bash
Copy code
git clone <repository-url>
cd <project-folder>


**Set Up the Backend:**

**Navigate to the backend folder and install the dependencies:**

bash
Copy code
cd backend
npm install
Create a .env file in the backend folder and add your environment variables (like MongoDB connection string and any API keys needed).


**Run the backend server:**


bash
Copy code
npm run dev
The backend should now be running on http://localhost:5000 (or your specified port).


**Set Up the Frontend:**

Navigate to the frontend folder and install the dependencies:

bash
Copy code
cd frontend
npm install


**Start the Admin Panel**
Navigate to the admin folder and start the React application for the admin panel:

bash
Copy code
cd admin
npm start
This will start the admin panel on http://localhost:3000 (or the next available port).



**Features

Admin Panel:**

Create, edit, and delete shoe products.
View a list of all products.

