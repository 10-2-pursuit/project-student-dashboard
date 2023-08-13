import React from "react";
import data from "./data/data.json";
import StudentCard from "../components/StudentCard";
import StudentList from "../components/StudentList";
import CohortList from "../components/CohortList";
import { useState } from "react";
import "./index.css";

function extractCohortData(students){
  let result={}
  for(let i=0;i<students.length;i++){
   let student=students[i]
   let studentCohort=student.cohort
   let studentCohortCode=studentCohort.cohortCode
   
    if(result[studentCohortCode]==undefined){///if cohort is not initialize yet
     result[studentCohortCode]={
     startDate:studentCohort.cohortStartDate,
      students: [student]
     
     }   
     //create the cohort and add the student to it
    }else{
     result[studentCohortCode].students.push(student)//push the student to the cohort
    }
  }
  

  return result
 }

const cohortObject = extractCohortData(data)
const cohortList = Object.keys(cohortObject)

function App() {
  const [showStudents, setShowStudents] = useState([]);
  const [showCohort, setShowCohort] = useState(cohortList);


  
  
  
 
  return (
    <div>
      <header>Student Dashboard</header>
      <div className="container">
          <div className="students">
             <StudentList data={data} showStudents={showStudents} />
          </div>
      <div>
      <h2 className="message">Choose a Class by Start Date</h2>
        
        {showCohort.map((cohort) => {
         
          let  splitIndex=cohort.length-4;
          let sem=cohort.substring(0,splitIndex)//ignore last 4 chars
          let year=cohort.substring(splitIndex)///keep only last 4 chars
          let title=sem+" "+year

        
          return <CohortList title={title} startDate={cohortObject[cohort].startDate} studentsList={cohortObject[cohort].students} setShowStudents={setShowStudents} />;
        })}
      </div>
        </div>
    </div>
  );
}

export default App;
