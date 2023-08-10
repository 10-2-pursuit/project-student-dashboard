import { useState } from "react";
export default function Details({ student }) {

  const [newNote, setNewNote] = useState({commenter: "", comment: ""});

  function handleAddNote() {
    const createNote = {commenter: newNote.commenter, comment: newNote.comment};
    const updatedNotes = [...student.notes, createNote];
    setNewNote({ commenter: "", comment: "" });
    student.notes = updatedNotes;
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleAddNote();
  }

  function handleTextChange(e) {
    const { id, value } = e.target;
    setNewNote((prevNote) => ({ ...prevNote, [id]: value }));
  }

  return (
    <div className="student-details">
      <div className="grades">
        <div className="codewars">
          <h3>Codewars</h3>
          <p>Current Total: {student.codewars.current.total}</p>
          <p>Current Last Week: {student.codewars.current.lastWeek}</p>
          <p>Goal Total: {student.codewars.goal.total}</p>
          <p>Goal Last Week: {student.codewars.goal.lastWeek}</p>
        </div>

        <div className="cert">
          <h3>Certifications</h3>
          <p>Resume: {student.certifications.resume ? "✅" : "❌"}</p>
          <p>LinkedIn: {student.certifications.linkedin ? "✅" : "❌"}</p>
          <p>GitHub: {student.certifications.github ? "✅" : "❌"}</p>
          <p>
            Mock Interview: {student.certifications.mockInterview ? "✅" : "❌"}
          </p>
        </div>

        <div>
          <h3>Cohort Scores</h3>
          <p>Assignments: {student.cohort.scores.assignments * 100}%</p>
          <p>Projects: {student.cohort.scores.projects * 100}%</p>
          <p>Assessments: {student.cohort.scores.assessments * 100}%</p>
        </div>
      </div>
      <hr />
      <div>
        <h3>1-On-1 Notes</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="commenter">Commentor Name: </label>
          <input type="text" id="commenter" onChange={handleTextChange} value={newNote.commenter}required /> <br />

          <label htmlFor="comment">Comment: </label>
          <input type="text" id="comment" onChange={handleTextChange} value={newNote.comment} required/>
          <br />
          <button type="submit">Add Note</button>
        </form>
        <ul>
          {student.notes.map((person, index) => (
            <li key={index}>{person.commenter} says, "{person.comment}"</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
