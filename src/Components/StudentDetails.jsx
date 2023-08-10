import React from 'react';
import Notes from './Notes';

const StudentDetails = ({
    studentId,
    codewars, 
    scores, 
    certifications, 
    handleFormSubmit
}) => {

    const convertPercent = (total, divide) => {
        return ((total / divide) * 100).toFixed()
    }

    const goalAchieved = convertPercent(codewars.current.total, codewars.goal.total)


    return (
        <>
            <div className='StudentDetails'>
                <section>
                    <h4>Codewars:</h4>
                    <span><span className='SpanGreen'>{`Current Total: `}</span>{codewars.current.total}</span><br /><br />
                    <span><span className='SpanGreen'>{`Last Week: `}</span>{codewars.current.lastWeek}</span><br /><br />
                    <span><span className='SpanGreen'>{`Goal: `}</span>{codewars.goal.total}</span><br /><br />
                    <span><span className='SpanGreen'>{`Percent of Goal Achieved: `}</span>{`${goalAchieved}%`}</span><br /><br />
                </section>
                <section>
                    <h4>Scores</h4>
                    <span><span className='SpanGreen'>{`Assignments: `}</span>{`${convertPercent(scores.assignments,1)}%`}</span><br /><br />
                    <span><span className='SpanGreen'>{`Projects: `}</span>{`${convertPercent(scores.projects,1)}%`}</span><br /><br />
                    <span><span className='SpanGreen'>{`Assessments: `}</span>{`${convertPercent(scores.assessments,1)}%`}</span><br /><br />
                </section>
                <section>
                    <h4>Certifications</h4>
                    <span><span className='SpanGreen'>{`Resume: `}</span>{certifications.resume ? `✅` :`❌`}</span><br /><br />
                    <span><span className='SpanGreen'>{`LinkedIn: `}</span>{certifications.linkedin ? `✅` :`❌`}</span><br /><br />
                    <span><span className='SpanGreen'>{`Mock Interview: `}</span>{certifications.mockInterview ? `✅` :`❌`}</span><br /><br />
                    <span><span className='SpanGreen'>{`GitHub: `}</span>{certifications.github ? `✅` :`❌`}</span><br /><br />
                </section>
            </div>
            <br />
            <Notes 
                handleFormSubmit={handleFormSubmit}
                studentId={studentId}
            />
        </>
    );
}

export default StudentDetails;
