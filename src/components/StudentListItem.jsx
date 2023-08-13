import { useState } from "react";

export default function StudentListItem({ student }) {
  const [showNotes, setShowNotes] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [notes, setNotes] = useState([]);
  const [comment, setComment] = useState("");
  const [writer, setWriter] = useState("");

  function toggleShowMore() {
    setShowMore(!showMore);
  }

  function toggleShowNotes() {
    setShowNotes(!showNotes);
  }

  function getGoalPercentage(student) {
    return Math.floor(
      (student.codewars.current.total / student.codewars.goal.total) * 100
    );
  }

  function translateCertification(student, certificationType) {
    if (student.certifications[certificationType] === false) {
      return "❌";
    } else {
      return "✅";
    }
  }
  function getTrackStatus(student) {
    if (
      student.codewars.current.total > 600 &&
      student.certifications.resume &&
      student.certifications.linkedin &&
      student.certifications.github &&
      student.certifications.mockInterview === true
    ) {
      return <>On Track to Graduate</>;
    }
  }

  const studentName = `${student.names.preferredName} ${student.names.middleName} ${student.names.surname}`;

  function getMoreInfo(student) {
    return (
      <>
        <span>
          <h3>Codewars:</h3>
          Current Total: {student.codewars.current.total} <br></br>
          Last Week: {student.codewars.current.lastWeek} <br></br>
          Goal: {student.codewars.goal.total} <br></br>
          Percent of Goal Achieved: {getGoalPercentage(student)}%
        </span>
        <span>
          <h3>Scores</h3>
          Assignments: {student.cohort.scores.assignments * 100}% <br></br>
          Projects: {student.cohort.scores.projects * 100}% <br></br>
          Assessments: {student.cohort.scores.assessments * 100}%
        </span>
        <span>
          <h3>Certifications</h3>
          Resume: {translateCertification(student, "resume")}
          <br></br>LinkedIn: {translateCertification(student, "linkedin")}
          <br></br> Mock Interview: {translateCertification(student, "github")}
          <br></br>GitHub: {translateCertification(student, "mockInterview")}
        </span>
      </>
    );
  }

  function testNotes() {
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
    <div className="student" key={student.id}>
      <img src={student.profilePhoto} alt="student" /> <h3>{studentName}</h3>
      <div style={{ color: "green" }}>{getTrackStatus(student)}</div>
      <span>{student.username}</span>
      <br></br>
      <span>Birthday: {student.dob}</span>
      <br></br>
      <span onClick={toggleShowMore}>
        {!showMore ? "Show more..." : "Show less..."}
      </span>
      {showMore ? (
        <>
          {getMoreInfo(student)} <br></br>
          <span onClick={toggleShowNotes}>
            {!showNotes ? "1-on-1 Notes" : "Hide 1-on-1 Notes"}
          </span>
          {showNotes ? <>{testNotes(student)}</> : null}
        </>
      ) : null}
    </div>
  );
}
