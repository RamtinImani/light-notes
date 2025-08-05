import { useEffect, useReducer, useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

function notesReducer(notes, { type, payload }) {
  switch (type) {
    case "ADD NOTE": {
      return [...notes, payload];
    }
    case "DELETE NOTE": {
      return notes.filter((note) => note.id !== payload);
    }
    case "COMPLETE NOTE": {
      return notes.map((note) =>
        note.id === payload ? { ...note, isCompleted: !note.isCompleted } : note
      );
    }
    default:
      throw new Error("Unknown Action Error" + type);
  }
}

function App() {
  const [notes, dispatch] = useReducer(
    notesReducer,
    JSON.parse(localStorage.getItem("Notes")) || []
  );
  const [sortBy, setSortBy] = useState("latest");

  //! save notes
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  //! add new note handler
  const handleAddNote = (newNote) => {
    dispatch({ type: "ADD NOTE", payload: newNote });
  };

  //! delete note handler
  const handleDeleteNote = (noteId) => {
    dispatch({ type: "DELETE NOTE", payload: noteId });
  };

  //! complete note handler
  const handleCompleteNote = (event) => {
    const noteId = Number(event.target.value);
    dispatch({ type: "COMPLETE NOTE", payload: noteId });
  };

  return (
    <div className="note">
      {/* //! Header */}
      <NoteHeader notes={notes} sortBy={sortBy} onSortNote={(e) => setSortBy(e.target.value)} />
      {/* //! Contents */}
      <div className="note__body">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note__container">
          <NoteStatus notes={notes} />
          <NoteList
            notes={notes}
            sortBy={sortBy}
            onDeleteNote={handleDeleteNote}
            onCompleteNote={handleCompleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
