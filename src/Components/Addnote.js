import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState(""); //Empty string
  const charLimit = 200;
  const handleChange = (e) => {
    if (charLimit - e.target.value.length >= 0) setNoteText(e.target.value); //This will ensure that we dont
    //add more characters than the limit
  };
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) handleAddNote(noteText); //We are ensuring that we dont add a empty note
    setNoteText("");
  };
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div> //container div for the adding of notes
  );
};
export default AddNote;
