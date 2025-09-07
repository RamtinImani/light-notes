import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useNotesDispatch } from "../contexts/NotesContext";
import { useState } from "react";
import Modal from "./Modal";

function NoteItem({ note }) {
  const dispatch = useNotesDispatch();
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  //! date options
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  //! handle edit note form submission
  const handleEditNote = (event) => {
    event.preventDefault();
    dispatch({
      type: "EDIT NOTE",
      payload: {
        id: note.id,
        title,
        description,
        isCompleted: false,
        createdAt: new Date().toISOString(),
      },
    });
    setIsOpenEditModal(false);
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
            <form className="modal__edit-form" onSubmit={handleEditNote}>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="note__text-field"
                name="note-title"
                placeholder="Note Title"
              />
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="note__text-field"
                name="note-description"
                placeholder="Note Description"
              />

              <div className="modal__buttons">
                <button
                  onClick={() => {
                    setTitle(note.title);
                    setDescription(note.description);
                    setIsOpenEditModal(false);
                  }}
                  className="btn btn--cancel"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn--edit">
                  Edit
                </button>
              </div>
            </form>
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
              <h3 className="modal__question">
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
