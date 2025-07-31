import { TrashIcon } from "@heroicons/react/24/outline";

function NoteItem({ note, onDeleteNote, onCompleteNote }) {
  //! date options
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={`note-item ${note.isCompleted ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>

        <div className="actions">
          <button className="trash" onClick={() => onDeleteNote(note.id)}>
            <TrashIcon className="remove" />
          </button>

          <input
            onChange={onCompleteNote}
            className="complete"
            type="checkbox"
            name={note.title}
            id={note.id}
            value={note.id}
            checked={note.isCompleted}
          />
        </div>
      </div>

      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}

export default NoteItem;
