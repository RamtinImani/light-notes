import { useNotes } from "../contexts/notesContext";
import Message from "./Message";

function NoteStatus() {
  const notes = useNotes();

  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.isCompleted).length;
  const unCompletedNotes = allNotes - completedNotes;

  if (!allNotes)
    return (
      <Message>
        <h3 className="note__message">
          <span>✒️</span> No notes found!
        </h3>
      </Message>
    );

  return (
    <ul className="note__status">
      <li className="note__status--info">
        All <span className="note__counter">{allNotes}</span>
      </li>
      <li className="note__status--info">
        Completed <span className="note__counter">{completedNotes}</span>
      </li>
      <li className="note__status--info">
        Open <span className="note__counter">{unCompletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
