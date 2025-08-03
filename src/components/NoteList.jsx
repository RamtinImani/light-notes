import NoteItem from "./NoteItem";

function NoteList({ notes, onDeleteNote, onCompleteNote, sortBy }) {
  //! sort notes
  let sortedNotes = notes;

  if (sortBy === "oldest") {
    sortedNotes = [...notes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  }

  if (sortBy === "latest") {
    sortedNotes = [...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  if (sortBy === "completed") {
    sortedNotes = [...notes].sort((a, b) => Number(b.isCompleted) - Number(a.isCompleted));
  }

  return (
    <div className="note__list">
      {sortedNotes.map((note) => (
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
