import { useState } from "react";
import OneOnOne from "./OneOnOne";

export default function StudentDetail({codewars, certifications, cohort, comments, setComments, studentId}){
    const [toggleDetail, setToggleDetail] = useState(false);
    const track = ((certifications.resume)&&(certifications.github)&&(certifications.linkedin)&&(certifications.mockInterview)&&(codewars.current.total > 600));
    
    function toggleDetailHandler(){
        setToggleDetail(!toggleDetail);
    }

    return(
        <div className="detail">
            <div className="track">
                <p>{track ? (<span>On track</span>) : (<span>Off track</span>)}</p>
            </div>
            <div className="certifications_and_score">
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
                    <li><span className="certification">Resume: </span><span className="certification_result">{certifications.resume ? "✅" : "❌"}</span></li>
                    <li><span className="certification">LinkedIn: </span><span className="certification_result">{certifications.linkedin ? "✅" : "❌"}</span></li>
                    <li><span className="certification">Github: </span><span className="certification_result">{certifications.github ? "✅" : "❌"}</span></li>
                    <li><span className="certification">Mock Interview: </span><span className="certification_result">{certifications.mockInterview ? "✅" : "❌"}</span></li>
                </ul>
            </div>
            <div className="one_on_one">
                <span onClick={()=>toggleDetailHandler()}>{toggleDetail ? (<>Hide 1:1</>) : (<>Show 1:1</>)}</span>
                {toggleDetail ? (<>
                                    <p>
                                        {comments.map((cmt,index)=>{ return(
                                        <>
                                            <span>{Object.keys(cmt)[0]} says {cmt[Object.keys(cmt)[0]]}</span><br />
                                        </>
                                        )})}
                                    </p>
                                    <OneOnOne comments={comments} setComments={setComments} studentId={studentId}/>
                                </>) : null}
            </div>

        </div>
    )
}