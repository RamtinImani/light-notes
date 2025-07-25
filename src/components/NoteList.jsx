import NoteItem from "./NoteItem";

function NoteList({ notes, onDeleteNote, onCompleteNote }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDeleteNote={onDeleteNote}
          onCompleteNote={onCompleteNote}
        />
      ))}
    </div>
  );
}

export default NoteList;
