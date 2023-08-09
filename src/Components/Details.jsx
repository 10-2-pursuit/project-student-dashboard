export default function StudentCard({student}) {
    return (
      <>
      <h2>Codewars</h2>
      <p>Current Total: {student.codewars.current.total}</p>
      <p>Current Last Week: {student.codewars.current.lastWeek}</p>
      <p>Goal Total: {student.codewars.goal.total}</p>
      <p>Goal Last Week: {student.codewars.goal.lastWeek}</p>

      <h2>Certifications</h2>
      <p>
        Resume:{" "}
        {student.certifications.resume
          ? "Available"
          : "Not available"}
      </p>
      <p>
        LinkedIn:{" "}
        {student.certifications.linkedin
          ? "Available"
          : "Not available"}
      </p>
      <p>
        GitHub:{" "}
        {student.certifications.github
          ? "Available"
          : "Not available"}
      </p>
      <p>
        Mock Interview:{" "}
        {student.certifications.mockInterview
          ? "Available"
          : "Not available"}
      </p>

      <h2>Cohort Scores</h2>
      <p>Assignments: {student.cohort.scores.assignments}</p>
      <p>Projects: {student.cohort.scores.projects}</p>
      <p>Assessments: {student.cohort.scores.assessments}</p>
    </>
      );
}