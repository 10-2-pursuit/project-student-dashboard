export default function StudentListItem({
  student,
  toggleShowMore,
  showMore,
  setShowMore,
}) {
  function getGoalPercentage(student) {
    return Math.floor(
      (student.codewars.current.total / student.codewars.goal.total) * 100
    );
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
          Resume: <br></br>LinkedIn:<br></br> Mock Interview: <br></br>GitHub:
        </span>
      </>
    );
  }

  return (
    <div className="student" key={student.id}>
      <img src={student.profilePhoto} alt="student" />
      <h3>{studentName}</h3>
      <span>{student.username}</span>
      <br></br>
      <span>Birthday: {student.dob}</span>
      <br></br>
      <span onClick={toggleShowMore}>
        {!showMore ? "Show more..." : "Show less..."}
      </span>
      {showMore ? <>{getMoreInfo(student)}</> : null}
    </div>
  );
}
