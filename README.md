
# Maybank CRUD Application Backend

## Overview

This is the backend of a simple CRUD (Create, Read, Update, Delete) application implemented using **NestJS**. The API manages a resource (e.g., "Books") with functionalities to create, retrieve, update, and delete records. The application follows clean code practices, uses a layered architecture, and includes basic error handling and validation.

---

## Features

- **CRUD Operations**:
    - Create: Add a new book.
    - Read: Retrieve all books or a single book by ID.
    - Update: Modify a book by ID.
    - Delete: Remove a book by ID.
- **Validation**: Ensures that the input data meets defined rules.
- **Error Handling**: Graceful responses for invalid input and operations.
- **Swagger API Documentation**: Easy-to-use interface for testing APIs.

---

## Prerequisites

- Node.js (>=16.x)
- npm (>=8.x)

---

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

---

## Running the Application

Start the application in development mode:
```bash
npm run start
```

The server will run at `http://localhost:3000`.

---

## API Documentation

The API documentation is generated using Swagger. Access it at:
```
http://localhost:3000/api
```

---

## Endpoints

### Base URL
`http://localhost:3000/books`

### CRUD Operations
| Method | Endpoint         | Description                  |
|--------|------------------|------------------------------|
| POST   | `/books`         | Create a new book            |
| GET    | `/books`         | Retrieve all books           |
| GET    | `/books/:id`     | Retrieve a book by ID        |
| PUT    | `/books/:id`     | Update a book by ID          |
| DELETE | `/books/:id`     | Delete a book by ID          |

### Example Request Body (POST `/books`):
```json
{
  "name": "The Great Gatsby",
  "description": "A novel set in the Jazz Age.",
  "author": "F. Scott Fitzgerald",
  "price": 10.99,
}
```

---

## Validation and Error Handling

- **Validation**:
    - Ensures required fields are present and valid.
    - Example:
        - `"name"` must be a non-empty string.
        - `"price"` must be a positive number.

- **Error Responses**:
    - Invalid Data (400):
      ```json
      {
        "statusCode": 400,
        "message": [
          "name should not be empty",
          "price must not be less than 0"
        ],
        "error": "Bad Request"
      }
      ```
    - Resource Not Found (404):
      ```json
      {
        "statusCode": 404,
        "message": "Book with ID 999 not found",
        "error": "Not Found"
      }
      ```

---

## Project Structure

```
src/
├── books/               # Module for managing books
│   ├── books.controller.ts   # Handles HTTP requests
│   ├── books.service.ts      # Business logic and data management
│   ├── book.model.ts         # Book entity
│   ├── create-book.dto.ts    # DTO for book creation
├── app.module.ts        # Root application module
├── main.ts              # Entry point of the application
```

---

## Design Choices

- **NestJS Framework**: Used for its modular architecture and built-in support for validation and dependency injection.
- **Swagger**: Simplifies API documentation and testing.
- **Validation**: Uses `class-validator` for robust input validation.
- **Error Handling**: Ensures consistent and meaningful error responses.

---

## License

This project is licensed under the MIT License.
