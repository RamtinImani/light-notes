import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import NotesProvider from "./contexts/notesContext";

function App() {
  const [sortBy, setSortBy] = useState("latest");

  return (
    <NotesProvider>
      <div className="note">
        {/* //! Header */}
        <NoteHeader sortBy={sortBy} onSortNote={(e) => setSortBy(e.target.value)} />
        {/* //! Contents */}
        <div className="note__body">
          <AddNewNote />
          <div className="note__container">
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
