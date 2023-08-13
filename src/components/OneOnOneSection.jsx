import React, { useState } from "react";

const OneOnOneSection = ({ notes, addNote }) => {
  const [commenterName, setCommenterName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(commenterName, comment);
    setCommenterName("");
    setComment("");
  };

  return (
    <div className="one-on-one-section">
      <h3>1-on-1 Notes</h3>
      <div className="notes-list">
        {notes.map((note, index) => (
          <div className="note" key={index}>
            <p>{note.commenterName}: {note.comment}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
      <textarea
          placeholder="Add your note here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <input
        
          type="text"
          placeholder="Your Name"
          value={commenterName}
          onChange={(e) => setCommenterName(e.target.value)}
        />
       
        <button className="summit" type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default OneOnOneSection;



