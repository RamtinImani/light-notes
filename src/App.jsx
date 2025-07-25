import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";

function App() {
  //! notes state => lifted up state
  const [notes, setNotes] = useState([]);

  //! add new note handler
  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  //! delete note handler
  const handleDeleteNote = (noteId) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };

  return (
    <div className="note-app">
      <div className="note-app__header">header</div>

      <div className="note-app__body">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-app__container">
          <NoteList notes={notes} onDeleteNote={handleDeleteNote} />
        </div>
      </div>
    </div>
  );
}

export default App;
