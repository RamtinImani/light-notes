import Message from "./Message";

function NoteStatus({ notes }) {
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.isCompleted).length;
  const unCompletedNotes = allNotes - completedNotes;

  if (!allNotes)
    return (
      <Message>
        <h2>
          <span>🖋️</span>No notes found
        </h2>
      </Message>
    );

  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        Open <span>{unCompletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
