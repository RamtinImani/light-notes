function NoteHeader({ notes, sortBy, onSortNote }) {
  return (
    <div className="note-app__header">
      <h1>My Notes({notes.length})</h1>

      <select value={sortBy} onChange={onSortNote} name="filter-notes" id="filter-notes">
        <option value="latest">Latest Notes</option>
        <option value="oldest">Oldest Notes</option>
        <option value="completed">Completed Notes</option>
      </select>
    </div>
  );
}

export default NoteHeader;
