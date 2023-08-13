import React from "react";

const StudentDetail = ({ details, handleSubmit }) => {
  const current = details.codewars.current.total;
  const lastWeek = details.codewars.current.lastWeek;
  const goal = details.codewars.goal.total;
  const percentage = ((current / goal) * 100).toFixed(0);
  const assignments = details.cohort.scores.assignments * 100;
  const projects = details.cohort.scores.projects * 100;
  const assessments = details.cohort.scores.assessments * 100;
  const resume = details.certifications.resume;
  const linkedin = details.certifications.linkedin;
  const github = details.certifications.github;
  const mockInterview = details.certifications.mockInterview;
  const commenter = details.notes.commenter;
  const comment = details.notes.comment;
  let certificationResult = "";
  let studentComment = ""
  function handleSubmit(e) {
    e.preventDefault();
  }

  resume & linkedin & github & (mockInterview == true)
    ? (certificationResult = "On Track to Graduate")
    : (certificationResult = "Not On Track to Graduate");

    commenter & comment == !undefined ? (studentComment = `${commenter}: ${comment}`) : null

  return (
    <div>
      <p className="graduation-track"> {certificationResult} </p>
      <div className="student-detail">
        <div className="codewars">
          <h4>Codewars: </h4>
          <p>Current Total: {current}</p>
          <p>Last Week: {lastWeek}</p>
          <p>Goal: {goal} </p>
          <p>Percent of Goal Achieved: {percentage}% </p>
        </div>
        <div className="Scores">
          <h4>Scores</h4>
          <p>Assignments: {assignments} </p>
          <p>Projects: {projects} </p>
          <p>Assessments: {assessments} </p>
        </div>
        <div className="certifications">
          <h4>Certifications</h4>
          <p>Resume: {resume ? "✅" : "❌"} </p>
          <p>Linkedin: {linkedin ? "✅" : "❌"} </p>
          <p>Mock Interview: {mockInterview ? "✅" : "❌"} </p>
          <p>Github: {github ? "✅" : "❌"} </p>
        </div>
        <div className="notes">
          <h4>1-on-1 Notes</h4>
          <form onSubmit={handleSubmit}>
            <label htmlFor="commenter-name">Commenter Name:</label>
            <input type="text" />

            <label htmlFor="comment">Comment:</label>
            <input type="text" />
            <br />
            <input className="submit-button" type="submit" />
          </form>
          <p>{studentComment}</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
