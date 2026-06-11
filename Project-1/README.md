# Project - 1 User REST API

## Overview

This project is a backend REST API developed as part of the DecodeLabs Internship Program. It demonstrates the creation of a simple server-side application using **Node.js** and **Express.js**.

The API provides basic user resource management functionality, including creating users and retrieving user data through HTTP endpoints.

## Features

- Express.js server setup
- RESTful API architecture
- JSON request handling
- User creation endpoint
- Retrieve users endpoint
- Error handling middleware
- Modular route structure

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Backend web framework
- **JavaScript** - Programming language
- **npm** - Package management

## Project Structure

```
DecodeLabs-Internship/
│
└── Project-1/
  │
  ├── server.js
  ├── package.json
  ├── package-lock.json
  │
  └── src/
    └── routes/
    └── userRoutes.js
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Ugeey/DecodeLabs-Internship.git
```

Navigate into the project folder:

```bash
cd DecodeLabs-Internship
```

Install dependencies:

```bash
npm install
```

## Running the Application

Start the server:

```bash
node server.js
```

The API will run on:

```
http://localhost:3000
```

## API Endpoints

### Get All Users

**GET**

```
/api/users
```

Example response:

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "name": "Alice",
      "email": "alice@gmail.com"
    },
    {
      "id": 2,
      "name": "Bob",
      "email": "bob@gmail.com"
    }
  ]
}
```

---

### Create User

**POST**

```
/api/users
```

Request body:

```json
{
  "name": "John Doe",
  "email": "john@gmail.com"
}
```

Example response:

```json
{
  "message": "User created",
  "data": {
    "name": "John Doe",
    "email": "john@gmail.com"
  }
}
```

## Error Handling

The application includes middleware to handle unexpected server errors and returns a standardized error response:

```json
{
  "error": "Internal Server Error",
  "message": "An unexpected error occurred. Please try again later."
}
```

## Author

Developed by Izuwah Ugochi during the DecodeLabs Internship Program.
