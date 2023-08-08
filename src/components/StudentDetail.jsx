export default function StudentDetail({codewars, certifications, cohort}){
    return(
        <div className="detail">
            <ul>
                <h5>Code Wars</h5>
                <li>Current Total: {codewars.current.total}</li>
                <li>Last Week: {codewars.current.lastWeek}</li>
                <li>Goal: {codewars.goal.total}</li>
                <li>Percent of Goal Achieved: {Number(codewars.current.total/codewars.goal.total * 100).toFixed(2)}%</li>
            </ul>
            <ul>
                <h5>Scores</h5>
                <li>Assignments: {Number(cohort.scores.assignments * 100).toFixed(2)}%</li>
                <li>Projects: {Number(cohort.scores.projects * 100).toFixed(2)}%</li>
                <li>Assessments: {Number(cohort.scores.assessments * 100).toFixed(2)}%</li>
            </ul>
            <ul>
                <h5>Certifications</h5>
                <li>Resume: {certifications.resume ? "✅" : "❌"}</li>
                <li>LinkedIn: {certifications.linkedin ? "✅" : "❌"}</li>
                <li>Github: {certifications.github ? "✅" : "❌"}</li>
                <li>Mock Interview: {certifications.mockInterview ? "✅" : "❌"}</li>
            </ul>
        </div>
    )
}