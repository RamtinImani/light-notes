import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useNotesDispatch } from "../contexts/NotesContext";
import { useState } from "react";
import Modal from "./Modal";

function NoteItem({ note }) {
  const dispatch = useNotesDispatch();
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

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
          {/* edit note */}
          <button
            className="note__edit--btn"
            onClick={() => setIsOpenEditModal((prevOpen) => !prevOpen)}
          >
            <PencilIcon className="note__edit" />
          </button>
          {/* edit note modal */}
          <Modal title="Edit Note" open={isOpenEditModal} onOpen={setIsOpenEditModal}>
            note data: form with title, description and edit button for submit changes
          </Modal>
          {/* delete note */}
          <button
            className="note__trash--btn"
            onClick={() => setIsOpenDeleteModal((prevOpen) => !prevOpen)}
          >
            <TrashIcon className="note__trash" />
          </button>
          {/* delete note modal */}
          <Modal title="Delete Note" open={isOpenDeleteModal} onOpen={setIsOpenDeleteModal}>
            <div className="modal__body">
              <h3>
                Do you want to delete "<span className="modal__note-title">{note.title}</span>"
                note?
              </h3>
              <div className="modal__buttons">
                <button onClick={() => setIsOpenDeleteModal(false)} className="btn btn--cancel">
                  Cancel
                </button>
                <button
                  onClick={() => {
                    dispatch({ type: "DELETE NOTE", payload: note.id });
                    setIsOpenDeleteModal(false);
                  }}
                  className="btn btn--delete"
                >
                  Delete
                </button>
              </div>
            </div>
          </Modal>
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
