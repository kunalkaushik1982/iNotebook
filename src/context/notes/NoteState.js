import NoteContext from "./noteContext";
import { useState } from "react";

const NoteSate = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //Get All Notes
  const getNotes = async () => {
    //TODO: API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0NzM5NDAwNDE5NzQ1MmUzOWUxMzRkIn0sImlhdCI6MTY0ODg0MDEwMH0.7boXBzFqNx_osCd7wZtELLvQtotD-JkKxRFku3G2zl8",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  //Add Notes
  const addNote = async (title, description, tag) => {
    //TODO: API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0NzM5NDAwNDE5NzQ1MmUzOWUxMzRkIn0sImlhdCI6MTY0ODg0MDEwMH0.7boXBzFqNx_osCd7wZtELLvQtotD-JkKxRFku3G2zl8",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json()
    setNotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = async (id) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0NzM5NDAwNDE5NzQ1MmUzOWUxMzRkIn0sImlhdCI6MTY0ODg0MDEwMH0.7boXBzFqNx_osCd7wZtELLvQtotD-JkKxRFku3G2zl8",
        },
      });
      const json = response.json();
      const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //TODO: API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0NzM5NDAwNDE5NzQ1MmUzOWUxMzRkIn0sImlhdCI6MTY0ODg0MDEwMH0.7boXBzFqNx_osCd7wZtELLvQtotD-JkKxRFku3G2zl8",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();

    let newNotes=JSON.parse(JSON.stringify(notes))

    //Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break
      }
    }
    setNotes(newNotes)
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteSate;
