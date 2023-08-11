import React, { useState } from 'react';
import StudentNotes from './StudentNotes';

const StudentDetails = ({student}) => {
    const [showDetails, setShowDetails] = useState(false)

    function toggleShowDetails() {
        setShowDetails(!showDetails)
    }

    return (
        <div className='detailsOnStudents'>
            <button onClick={ toggleShowDetails }>
                { !showDetails ? "Show More..": "Show Less.."}
            </button>
            {showDetails ? (
        <>
        <ul className='codeWars-List'>
          <h3>CodeWars</h3><br />
          <li>Current Total: <span>{student.codewars.current.total}</span></li><br />
          <li>Last Week: {student.codewars.current.lastWeek}</li><br />
          <li>Goal: {student.codewars.goal.total}</li>
          <li>Percent of Goal Achieved: {Number(student.codewars.current.total / student.codewars.goal.total * 100).toFixed(2)}%</li>
        </ul>
        <ul className='scores-List'>
            <h3>Scores</h3><br />
          <li>Assignments:{student.cohort.scores.assignments * 100}%</li><br />
          <li>Projects: {student.cohort.scores.projects * 100}%</li><br />
          <li>Assessments: {student.cohort.scores.assignments * 100}%</li><br />
        </ul>
        <ul className='certification-List'>
            <h3>Certifications</h3><br />
          <li>Resume: {student.certifications.resume ? '✅' : '❌'}</li><br />
          <li>Linkedin: {student.certifications.linkedin ? '✅' : '❌'}</li><br />
          <li>Github: {student.certifications.githib ? '✅' : '❌'}</li><br />
          <li>Mock Interview: {student.certifications.mockInterview ? '✅' : '❌'}</li>
           <div>
            <p>Student is {student.certifications.resume === true && student.certifications.linkedin && student.certifications.github === true && student.certifications.mockInterview === true && student.codewars.current.total >= 600 ? 'Student is on track' : 'Student is not on Track'}</p>
           </div>
        </ul>
        <div>
            <StudentNotes />
        </div>
        </>
      ) : null}
        </div>
    );
}

export default StudentDetails;
