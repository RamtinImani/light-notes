import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  //! add new note handler
  const handleAddNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  //! delete note handler
  const handleDeleteNote = (noteId) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };

  //! complete note handler
  const handleCompleteNote = (event) => {
    const noteId = Number(event.target.value);

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, isCompleted: !note.isCompleted } : note
      )
    );
  };

  return (
    <div className="note-app">
      {/* //! Header */}
      <NoteHeader notes={notes} sortBy={sortBy} onSortNote={(e) => setSortBy(e.target.value)} />
      {/* //! Contents */}
      <div className="note-app__body">
        <AddNewNote onAddNote={handleAddNote} />
        <div className="note-app__container">
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
