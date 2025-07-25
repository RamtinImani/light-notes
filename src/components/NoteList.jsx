import NoteItem from "./NoteItem";

function NoteList({ notes, onDeleteNote }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDeleteNote={onDeleteNote} />
      ))}
    </div>
  );
}

export default NoteList;
