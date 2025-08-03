function NoteHeader({ notes, sortBy, onSortNote }) {
  return (
    <div className="note__header">
      <div className="note__info">
        <span className="note__info--name">My Notes</span>
        <span className="note__counter">{notes.length}</span>
      </div>

      <select value={sortBy} onChange={onSortNote} name="filter-notes" id="filter-notes">
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}

export default NoteHeader;
