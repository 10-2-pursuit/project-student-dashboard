import React, { useState } from 'react';
import StudentNotes from './StudentNotes';

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
          <p>Current Total: <span>{student.codewars.current.total}</span></p><br />
          <p>Last Week: {student.codewars.current.lastWeek}</p><br />
          <p>Goal: {student.codewars.goal.total}</p>
        </div>
        <div>
            <h3>Scores</h3><br />
          <p>Assignments:{student.cohort.scores.assignments}</p><br />
          <p>Projects: {student.cohort.scores.projects}</p><br />
          <p>Assessments: {student.cohort.scores.assignments}</p><br />
        </div>
        <div>
            <h3>Certifications</h3><br />
            <p>Resume: {student.certifications.resume ? '✅' : '❌'}</p><br />
          <p>Linkedin: {student.certifications.linkedin ? '✅' : '❌'}</p><br />
          <p>Github: {student.certifications.githib ? '✅' : '❌'}</p><br />
          <p>Mock Interview: {student.certifications.mockInterview ? '✅' : '❌'}</p>
           <div>
            <p>Student is {student.certifications.resume === true && student.certifications.linkedin && student.certifications.github === true && student.certifications.mockInterview === true && student.codewars.current.total >= 600 ? 'Student is on track' : 'Student is not on Track'}</p>
           </div>
        </div>
        <div>
            <StudentNotes />
        </div>
        </>
      ) : null}
        </div>
    );
}

export default StudentDetails;
