import React, { useState } from 'react';

const StudentDetails = ({student}) => {
    const [showDetails, setShowDetails] = useState(false)

    function toggleShowDetails() {
        setShowDetails(!showDetails)
    }

    return (
        <div>
            <button onClick={ toggleShowDetails }>
                { !showDetails ? "Show More..": "Show Less.."}
            </button>
            {showDetails ? (
        <>
        <div>
          <h3>CodeWars</h3><br />
          <p>Current Total:<span>{student.codewars.current.total}</span></p><br />
          <p>{student.codewars.current.lastWeek}</p><br />
          <p>{student.goal.total}</p>
        </div>
        <div>
            <h3>Scores</h3><br />
          <p>Assignments:{student.cohort.scores.assignments}</p><br />
          <p>Projects: {student.cohort.scores.projects}</p><br />
          <p>Assessments: {student.cohort.scores.assignments}</p><br />
        </div>
        <div>
            <h3>Certifications</h3><br />
            <p>Resume: {student.certifications.resume ? '❌' : '✅'}</p><br />
          <p>Linkedin: {student.certifications.linkedin ? '❌' : '✅'}</p><br />
          <p>Github: {student.certifications.githib ? '❌' : '✅'}</p><br />
          <p>Mock Interview: {student.certifications.mockInterview ? '❌' : '✅'}</p>
        </div>
        </>
      ) : null}
        </div>
    );
}

export default StudentDetails;
