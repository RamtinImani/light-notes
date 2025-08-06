import { TrashIcon } from "@heroicons/react/24/outline";
import { useNotesDispatch } from "../contexts/notesContext";

function NoteItem({ note }) {
  const dispatch = useNotesDispatch();

  //! date options
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={`note__item ${note.isCompleted ? "completed" : ""}`}>
      <div className="note__item--header">
        <div>
          <p className="note__title">{note.title}</p>
          <p className="note__description">{note.description}</p>
        </div>

        <div className="note__actions">
          {/* delete note */}
          <button
            className="note__trash--btn"
            onClick={() => dispatch({ type: "DELETE NOTE", payload: note.id })}
          >
            <TrashIcon className="note__trash" />
          </button>
          {/* complete note */}
          <input
            onChange={() => dispatch({ type: "COMPLETE NOTE", payload: note.id })}
            className="note__complete"
            type="checkbox"
            name={note.title}
            id={note.id}
            checked={note.isCompleted}
          />
        </div>
      </div>

      <div className="note__item--footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}

export default NoteItem;
