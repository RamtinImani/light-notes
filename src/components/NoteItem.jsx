import { TrashIcon } from "@heroicons/react/24/outline";

function NoteItem({ note, onDeleteNote, onCompleteNote }) {
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
          <button className="note__trash--btn" onClick={() => onDeleteNote(note.id)}>
            <TrashIcon className="note__trash" />
          </button>

          <input
            onChange={onCompleteNote}
            className="note__complete"
            type="checkbox"
            name={note.title}
            id={note.id}
            value={note.id}
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
