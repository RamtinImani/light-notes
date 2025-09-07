import { createContext, useContext, useReducer } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

//! contexts
const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

//! notes reducer
function notesReducer(notes, { type, payload }) {
  switch (type) {
    case "ADD NOTE": {
      return [...notes, payload];
    }
    case "EDIT NOTE": {
      return notes.map((note) =>
        note.id === payload.id
          ? {
              ...note,
              title: payload.title,
              description: payload.description,
              createdAt: payload.createdAt,
            }
          : note
      );
    }
    case "DELETE NOTE": {
      return notes.filter((note) => note.id !== payload);
    }
    case "COMPLETE NOTE": {
      return notes.map((note) =>
        note.id === payload ? { ...note, isCompleted: !note.isCompleted } : note
      );
    }
    default:
      throw new Error("Unknown Action Error: " + type);
  }
}

export default function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(
    notesReducer,
    JSON.parse(localStorage.getItem("Notes")) || []
  );

  //! save notes
  useLocalStorage("Notes", notes);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>{children}</NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

//! notes & dispatch custom hooks
export function useNotes() {
  return useContext(NotesContext);
}

export function useNotesDispatch() {
  return useContext(NotesDispatchContext);
}
