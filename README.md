# MERN Stack Storefront

A simple storefront application built using the MERN (MongoDB, Express, React, Node.js) stack. This project provides basic CRUD functionality for managing products in a store.

## Features

- **Backend**:
  - RESTful API for managing products
  - CRUD operations: Create, Read, Update, Delete products
  - MongoDB for database storage
  - Express.js for server-side routing

- **Frontend**:
  - React.js with Vite for building the user interface
  - Chakra UI for modern, accessible components
  - Dark/Light mode support
  - Integration with the backend API for product management
  - Responsive design for mobile and desktop
  - State management with Zustand

## Tech Stack

- **Frontend**:
  - React.js with Vite
  - Chakra UI
  - React Router DOM
  - Zustand for state management
  - React Icons
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Environment Variables**: dotenv
- **Testing**: jest, supertest cross-env

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Hamid-0/dynamic-store.git
   cd dynamic-store
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```env
   MONGO_URI=<your-mongodb-connection-string>
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The server starts at `http://localhost:5000`.

## Testing

   ```bash
   npm run test
   ```

## API Endpoints

### Products

- **GET** `/api/products`  
  Fetch all products.

- **POST** `/api/products`  
  Create a new product.  
  **Request Body**:

  ```json
  {
    "name": "Product Name",
    "price": "100",
    "image": "image-url"
  }
  ```

- **PUT** `/api/products/:id`  
  Update an existing product by ID.  
  **Request Body**:

  ```json
  {
    "name": "Updated Name",
    "price": "150",
    "image": "updated-image-url"
  }
  ```

- **DELETE** `/api/products/:id`  
  Delete a product by ID.

## Project Structure

```
MERN/
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Zustand state management
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
├── backend/
│   ├── config/
│   │   └── db.js          # MongoDB connection setup
│   ├── controllers/
│   │   └── product.controller.js  # Product controller
│   ├── models/
│   │   └── product.model.js       # Product schema
│   ├── routes/
│   │   └── product.routes.js      # Product routes
│   └── server.js          # Express server
|──test/
|   └──api.test.js        # API testing
├── .env                   # Environment variables
├── .gitignore            # Ignored files
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

## Dependencies

### Backend

- `express`
- `mongoose`
- `dotenv`
- `cors`
- `nodemon` (for development)

### Frontend

- `react`
- `react-dom`
- `@chakra-ui/react`
- `@emotion/react`
- `@emotion/styled`
- `framer-motion`
- `react-router-dom`
- `zustand`
- `react-icons`

## Testing

- `jest`
- `supertest`
- `cross-env`
