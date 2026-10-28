
# QuickNotes

QuickNotes is a simple web application for loading, creating,
and deleting notes using REST API requests.

## Features

- Load notes using GET requests.
- Create notes using POST requests.
- Delete notes using DELETE requests.
- Validate note titles.
- Display loading, success, and error messages.
- Disable buttons while requests are processing.

## Technologies Used

- HTML
- CSS
- JavaScript
- Fetch API
- JSONPlaceholder REST API

## Project Structure

```text
quicknotes-app/
├── index.html
├── style.css
├── api.js
├── README.md
└── docs/
    ├── api-design.md
    ├── data-model.md
    └── architecture.md
```

## Getting Started

1. Download or clone this repository.
2. Open the project folder in VS Code.
3. Open `index.html` using VS Code Live Server.
4. Click Load notes to retrieve sample notes.
5. Use the form to create notes and the Delete buttons
   to remove notes from the displayed list.

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/posts?_limit=10` | Load notes |
| POST | `/posts` | Create a note |
| DELETE | `/posts/{id}` | Delete a note |

Base URL: https://jsonplaceholder.typicode.com/posts

## Documentation

- [API Design](docs/api-design.md)
- [Data Model](docs/data-model.md)
- [Architecture](docs/architecture.md)

## Limitations

JSONPlaceholder is a demonstration API. Creating and deleting
notes are simulated operations and are not permanently saved
on the server.

## Author

Created as a learning project.
