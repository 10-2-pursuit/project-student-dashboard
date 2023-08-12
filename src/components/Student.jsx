import { useEffect, useState } from "react";
import StudentDetail from "./StudentDetail";

/**
 * Student()
 * ---------------------------------------------------
 * A react component to render 'single' student card
 * 
 * @param {React.props} param0 
 * @property student -
 * @property comments - 
 * @property setComments -
 * @property darkmode - 
 * 
 * @returns 
 */
export default function Student({ student, comments, setComments, darkmode }){
    const [showDetail, setShowDetail] = useState(false);
    
    function detailHandler(){
        setShowDetail(!showDetail);
    }

    return(
        <div id={student.id} className={"studentCard"+' '+(showDetail ? "detail_open" : null)}>
            <div className="image" >
                <img src={ student.profilePhoto} />
            </div>
            <div className="brief_info" >
                <h4>
                    { student.names.preferredName } {}
                    {student.names.middleName.length != 0 ? student.names.middleName[0] + "." : null} {}
                    {student.names.surname}
                </h4>
                <span>{ student.username }</span><br />
                <span>{ student.dob }</span><br />
                <span>{showDetail ? (<span onClick={()=>detailHandler()}>Show less</span>) : (<span onClick={()=>detailHandler()}>Show more</span>)}</span>
            </div>
            <>
                {showDetail ? <StudentDetail codewars={ student.codewars } certifications={ student.certifications } cohort={ student.cohort } comments={comments} setComments={ setComments } studentId={ student.id }/> : null}
            </>
        </div>
    )
}