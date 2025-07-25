import "./App.css";
import AddNewNote from "./components/AddNewNote";

function App() {
  return (
    <div className="note-app">
      <div className="note-app__header">header</div>

      <div className="note-app__body">
        <AddNewNote />
        <div className="note-app__container">notes</div>
      </div>
    </div>
  );
}

export default App;
