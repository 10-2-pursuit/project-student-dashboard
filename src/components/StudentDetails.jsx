import React, { useState } from "react";
import StudentNotes from "./StudentNotes";

const StudentDetails = ({ student, handleNotes, notes }) => {
  const [showDetails, setShowDetails] = useState(false);

  function toggleShowDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <div className="detailsOnStudents">
      <button onClick={toggleShowDetails}>
        {!showDetails ? "Show More.." : "Show Less.."}
      </button>
      {showDetails ? (
        <div className="certs-scores-codewars">
          <ul className="codeWars-List">
            <h5>CodeWars</h5>
            <br />
            <li>
              Current Total: <span>{student.codewars.current.total}</span>
            </li>
            <br />
            <li>Last Week: {student.codewars.current.lastWeek}</li>
            <br />
            <li>Goal: {student.codewars.goal.total}</li>
            <br />
            <li>
              Percent of Goal Achieved:{" "}
              {Number(
                (student.codewars.current.total / student.codewars.goal.total) *
                  100
              ).toFixed(2)}
              %
            </li>
          </ul>
          <ul className="scores-List">
            <h5>Scores</h5>
            <br />
            <li>Assignments:{student.cohort.scores.assignments * 100}%</li>
            <br />
            <li>Projects: {student.cohort.scores.projects * 100}%</li>
            <br />
            <li>Assessments: {student.cohort.scores.assignments * 100}%</li>
            <br />
          </ul>
          <ul className="certification-List">
            <h5>Certifications</h5>
            <br />
            <li>Resume: {student.certifications.resume ? "✅" : "❌"}</li>
            <br />
            <li>Linkedin: {student.certifications.linkedin ? "✅" : "❌"}</li>
            <br />
            <li>Github: {student.certifications.github ? "✅" : "❌"}</li>
            <br />
            <li>
              Mock Interview:{" "}
              {student.certifications.mockInterview ? "✅" : "❌"}
            </li>
            <div>
              <h5 id="tracking">
                {student.certifications.resume === true &&
                student.certifications.linkedin === true &&
                student.certifications.github === true &&
                student.certifications.mockInterview === true &&
                student.codewars.current.total > 600
                  ? "On Track"
                  : "Off Track"}
              </h5>
            </div>
            <StudentNotes studentId={student.id} handleNotes={handleNotes} notes={notes} />
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default StudentDetails;
