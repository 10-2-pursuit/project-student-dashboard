import React, { useState } from "react";

const OneOnOneNotes = ({ onAddNote }) => {
  const [commenter, setCommenter] = useState("");
  const [comment, setComment] = useState("");

  const handleCommenterChange = (event) => {
    setCommenter(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commenter && comment) {
      onAddNote({ commenter, comment });
      setCommenter("");
      setComment("");
    }
  };

  return (
    <div className="one-on-one-note">
      <h3>1-on-1 Notes</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="commenter">Professor:</label>
          <input
            type="text"
            id="commenter"
            value={commenter}
            onChange={handleCommenterChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="comment">FeedBack:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
          />
        </div>
        <br />
        <button type="submit">Add Review</button>
      </form>
    </div>
  );
};

export default OneOnOneNotes;
