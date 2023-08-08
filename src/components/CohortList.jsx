import { useEffect } from "react";

export default function CohortList({cohortList, studentList, setStudentList, resetStudentList}){

    function studentListHandler(filterValue){
        console.log(filterValue);
        resetStudentList();
        if(filterValue !== "all"){
            console.log(studentList);
            const tempList = studentList.filter((student)=>student.cohort.cohortCode === filterValue);
            console.log(tempList);
            setStudentList(tempList);
            console.log(tempList);
        }
    }

    return(
        <ul>
            {cohortList.map((cohort)=>{
                return(
                    <li key={cohort} onClick={()=>studentListHandler(cohort)}>{cohort}</li>
                )
            })}
        </ul>
    )
}