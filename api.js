
const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Reusable function for making API requests
async function request(url, options = {}) {
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
}

// Load the first 10 notes from the API
async function loadNotes() {
    const loadButton = document.getElementById("load-btn");
    const status = document.getElementById("status");
    const notesList = document.getElementById("notes-list");

    loadButton.disabled = true;
    status.textContent = "Loading notes...";
    notesList.innerHTML = "";

    try {
        const notes = await request(`${API_URL}?_limit=10`);

        if (notes.length === 0) {
            status.textContent = "No notes found on the server.";
            return;
        }

        notes.forEach((note) => {
            const listItem = document.createElement("li");
            const title = document.createElement("h3");
            const body = document.createElement("p");

            title.textContent = note.title;
            body.textContent = note.body;

            listItem.appendChild(title);
            listItem.appendChild(body);
            notesList.appendChild(listItem);
        });

        status.textContent = "Notes loaded successfully!";
    } catch (error) {
        status.textContent = `Error loading notes: ${error.message}`;
    } finally {
        loadButton.disabled = false;
    }
}

// Run loadNotes when the button is clicked
document.getElementById("load-btn").addEventListener("click", loadNotes);

async function createNote(event) {
    event.preventDefault();

    const form = document.getElementById("note-form");
    const titleInput = document.getElementById("title-input");
    const bodyInput = document.getElementById("body-input");
    const submitButton = document.getElementById("submit-btn");
    const status = document.getElementById("status");
    const notesList = document.getElementById("notes-list");

    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();

    if (!title) {
        status.textContent = "Please enter a note title.";
        titleInput.focus();
        return;
    }

    submitButton.disabled = true;
    status.textContent = "Creating note...";

    try {
        const newNote = await request(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1
            })
        });

        const listItem = document.createElement("li");
        const heading = document.createElement("h3");
        const paragraph = document.createElement("p");

        heading.textContent = newNote.title;
        paragraph.textContent = newNote.body;

        listItem.appendChild(heading);
        listItem.appendChild(paragraph);
        notesList.prepend(listItem);

        form.reset();
        status.textContent = "Note created successfully!";
    } catch (error) {
        status.textContent = `Error creating note: ${error.message}`;
    } finally {
        submitButton.disabled = false;
    }
}

document.getElementById("note-form").addEventListener("submit", createNote);

async function deleteNote(noteId, listItem) {
    const status = document.getElementById("status");

    const deleteButton = listItem.querySelector("button");
    deleteButton.disabled = true;
    status.textContent = "Deleting note...";

    try {
        await request(`${API_URL}/${noteId}`, {
            method: "DELETE"
        });

        listItem.remove();
        status.textContent = "Note deleted successfully!";
    } catch (error) {
        status.textContent = `Error deleting note: ${error.message}`;
        deleteButton.disabled = false;
    }
}

