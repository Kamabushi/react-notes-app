import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./Components/NoteList";
import SearchBar from "./Components/search";
import Header from "./Components/header";
const App = () => {
  const [notes, setNotes] = useState(
    localStorage.getItem("react-notes-app-data")
      ? JSON.parse(localStorage.getItem("react-notes-app-data"))
      : []
  );
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(), //convert date to a countries local date format
    };
    const notesList = [...notes, newNote]; //we have added our new note at the end of the noteslists
    setNotes(notesList); //finally we have re rendered the notelists
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <SearchBar handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};
export default App;
