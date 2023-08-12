import React, { useState } from "react";

const StudentNotes = ({ handleNotes, notes, studentId }) => {
  const [commenterName, setCommenterName] = useState("");
  const [comment, setComment] = useState("");

  const handleCommenterNameChange = (e) => {
    setCommenterName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddNote = (e) => {
    e.preventDefault();

    const newNote = {
      studentId,
      commenterName,
      comment,
    };

    handleNotes(newNote);

    setCommenterName("");
    setComment("");
  };

  return (
    <div className="commentForm">
      <h4>1-on-1 Notes</h4>
      <form onSubmit={handleAddNote}>
        <p>Commenter Name</p>
        <input
          type="text"
          placeholder="Enter commenters name"
          value={commenterName}
          onChange={handleCommenterNameChange}
        ></input>
        <br />
        <p>Comment</p>
        <input
          type="text"
          placeholder="Comment"
          value={comment}
          onChange={handleCommentChange}
        ></input>
        <br />
        <button>Add Note</button>
      </form>
      <div>
        <h5>Notes</h5>
        <ul>
            {notes.filter((note) => note.studentId === studentId).map((note) => 
                <li>
                    <p>{note.commenterName}: {note.comment}</p>
                </li>
            )}
        </ul>
      </div>
    </div>
  );
};

export default StudentNotes;
