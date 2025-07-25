import { useState } from "react";

function AddNewNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //! handle add new note form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    //! prevent empty inputs
    if (!title || !description) return;

    //! create new note object
    const newNote = {
      title,
      description,
      id: Date.now(),
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };

    //! Clear form inputs after submission
    setTitle("");
    setDescription("");
    //! update notes state
    onAddNote(newNote);
  };

  return (
    <div className="note-app__data">
      <h2>Add New Note</h2>
      {/* //! Add New Note Form */}
      <form className="note-app__form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="text-field"
          name="note-title"
          placeholder="Note Title"
        />

        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="text-field"
          name="note-description"
          placeholder="Note Description"
        />

        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
