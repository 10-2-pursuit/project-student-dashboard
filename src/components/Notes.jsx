import { useState } from "react";

export default function Notes() {
//   const [notes, setNotes] = useState([]);
//   const [comment, setComment] = useState("");
//   const [writer, setWriter] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newNote = {
      id: id,
      writer: writer,
      comment: comment,
    };
    setNotes([...notes, newNote]);
    setWriter("");
    setComment("");
  }

  const getNote = notes.filter((note) => note.id === id);

  return (
    <>
      <form onSubmit={handleSubmit} className="notesForm">
        <label htmlFor="id">ID</label>
        <input
          type="text"
          id="id"
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
        ></input>
        <label htmlFor="comment">Comment</label>
        <input
          type="text"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <button>Submit</button>
      </form>
      {getNote.map((note, index) => (
        <div key={index}>
          <>
            {note.writer} says {note.comment}
          </>
        </div>
      ))}
    </>
  );
}
