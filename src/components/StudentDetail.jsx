import { useState } from "react";
import OneOnOne from "./OneOnOne";

export default function StudentDetail({codewars, certifications, cohort, comments, setComments, studentId}){
    const [toggleDetail, setToggleDetail] = useState(false);
    

    function toggleDetailHandler(){
        setToggleDetail(!toggleDetail);
    }

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
                <li>Assignments: { cohort.scores.assignments * 100 }%</li>
                <li>Projects: { cohort.scores.projects * 100 }%</li>
                <li>Assessments: { cohort.scores.assessments * 100}%</li>
            </ul>
            <ul>
                <h5>Certifications</h5>
                <li>Resume: {certifications.resume ? "✅" : "❌"}</li>
                <li>LinkedIn: {certifications.linkedin ? "✅" : "❌"}</li>
                <li>Github: {certifications.github ? "✅" : "❌"}</li>
                <li>Mock Interview: {certifications.mockInterview ? "✅" : "❌"}</li>
            </ul>
            <span onClick={()=>toggleDetailHandler()}>{toggleDetail ? (<>Show 1:1</>) : (<>Hide 1:1</>)}</span>
            {toggleDetail ? (<>
                                <p>{comments.map((cmt,index)=>{ return(
                                <span>{cmt.id} says {cmt.comment}{console.log(cmt.length)}</span>
                            )})}</p>
                                <OneOnOne comments={comments} setComments={setComments} studentId={studentId}/>
                            </>) : null}

        </div>
    )
}