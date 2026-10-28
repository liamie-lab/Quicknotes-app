
# QuickNotes Architecture

## Overview

QuickNotes is a simple web application that allows users to
load, create, and delete notes using HTTP requests.

The application uses HTML for structure, CSS for styling,
JavaScript for functionality, and JSONPlaceholder as a
demonstration API.

## System Components

### 1. User Interface
- Implemented using HTML.
- Provides buttons for loading notes and creating notes.
- Displays notes and status messages.

### 2. Styling
- Implemented using CSS.
- Controls the layout, colors, spacing, and appearance.

### 3. Application Logic
- Implemented in `api.js`.
- Uses the Fetch API to send HTTP requests.
- Handles successful responses and errors.
- Validates note titles.
- Updates the interface after operations.

### 4. External API
- Uses JSONPlaceholder.
- Provides sample notes through GET requests.
- Simulates note creation through POST requests.
- Simulates note deletion through DELETE requests.

## Application Flow

1. The user opens the QuickNotes application.
2. The user clicks Load notes.
3. JavaScript sends a GET request to the API.
4. The returned notes are displayed in the interface.
5. The user can submit a form to create a note.
6. JavaScript sends a POST request and displays the response.
7. The user can delete a note.
8. JavaScript sends a DELETE request and removes the note
   from the interface when the request succeeds.

## Error Handling

- Loading and submission buttons are disabled while
  their requests are running.
- Status messages inform users about loading, success,
  and failure.
- Failed requests display an error message.
- Buttons are re-enabled after requests finish.

## Limitations

JSONPlaceholder is a testing API. Changes made through
POST and DELETE requests are not permanently stored.

A production version would require a persistent database,
a real backend API, and appropriate authentication and
authorization.

## File Structure

- `index.html` — Application structure.
- `style.css` — Application styling.
- `api.js` — API requests and application logic.
- `docs/api-design.md` — API endpoint documentation.
- `docs/data-model.md` — Note data structure.
- `docs/architecture.md` — System architecture.
- `README.md` — Project overview and instructions.
