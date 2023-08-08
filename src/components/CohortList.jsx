import { useState,useEffect } from "react";

export default function CohortList({cohortList, setStudentList, data}){

    function studentListHandler(cohort){
        updateCohortList(cohort)
    }

    function updateCohortList(filterValue){        
        if(filterValue !== "all"){
            const tempList = data.filter((student)=>student.cohort.cohortCode === filterValue);
            setStudentList(tempList);
        }
        else{
            setStudentList(data);
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