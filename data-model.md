
# QuickNotes Data Model

## Overview

QuickNotes represents each note as a JavaScript object
containing a title, body, ID, and user ID.

## Note Structure

| Field | Data Type | Description |
|---|---|---|
| id | Number | Unique identifier for the note |
| title | String | Title of the note |
| body | String | Content of the note |
| userId | Number | Identifier of the note's owner |

## Example Note

```json
{
  "id": 101,
  "title": "My first note",
  "body": "Learning how to use API requests",
  "userId": 1
}
```

## Field Validation

### Title
- Required.
- Leading and trailing whitespace is removed.
- Maximum length is 100 characters.

### Body
- Optional.
- Leading and trailing whitespace is removed.

### ID
- Supplied by the API when a note is created.
- Used to identify a note when deleting it.

### User ID
- Set to `1` when creating a note in this application.

## Data Handling

- GET requests retrieve notes from the API.
- POST requests send new notes to the API.
- DELETE requests request removal of a note by ID.
- The application displays returned data in the browser.

## Storage Limitations

QuickNotes uses JSONPlaceholder for demonstration purposes.
New notes and deletion requests are simulated and are not
permanently stored on the server.
