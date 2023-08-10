import { useState } from "react";
export default function Details({ student }) {

  const [newNote, setNewNote] = useState([]);

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
        <form>
          <label htmlFor="name">Commentor Name: </label>
          <input type="text" id="name"/>
        </form>
      </div>
    </div>
  );
}
