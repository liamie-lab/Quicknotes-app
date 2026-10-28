
# QuickNotes API Design

## Overview

QuickNotes uses a REST API to load, create, and delete notes.
The API communicates using JSON data over HTTP.

**Base URL:** https://jsonplaceholder.typicode.com/posts

## Endpoints

### 1. Get Notes

- **Method:** GET
- **Endpoint:** `/posts?_limit=10`
- **Purpose:** Retrieves the first 10 notes.
- **Success Response:** `200 OK`
- **Error Handling:** Displays an error message if the request fails.

### 2. Create a Note

- **Method:** POST
- **Endpoint:** `/posts`
- **Purpose:** Creates a new note.
- **Request Body:**

```json
{
  "title": "My first note",
  "body": "This is my note content",
  "userId": 1
}
```

- **Success Response:** `201 Created`
- **Error Handling:** Displays an error message if the request fails.

### 3. Delete a Note

- **Method:** DELETE
- **Endpoint:** `/posts/{id}`
- **Purpose:** Requests deletion of a note using its ID.
- **Success Response:** `200 OK`
- **Error Handling:** Displays an error message if the request fails.

## Validation

- A note title is required.
- Leading and trailing spaces are removed from the title and content.
- The title must not exceed 100 characters.

## Notes

JSONPlaceholder is a demonstration API. POST and DELETE
requests simulate changes and do not permanently modify
the server's stored data.
