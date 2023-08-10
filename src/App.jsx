import React from "react";
import data from "./data/data.json";
import StudentCard from "../components/StudentCard";
// import StudentList from "../components/StudentList";
import CohortList from "../components/CohortList";
import { useState } from "react";
import "./index.css";

function App() {
  
  const [showStudent, setShowStudent] = useState(data)
  const [showCohort, setShowCohort] = useState(data)
  const [showStudentDetails, setShowStudentDetails] =useState(false)

  function toggleStudenDetails() {
    setShowStudentDetails(!showStudentDetails)
  }
  return (
    <div>
      <header>Student Dashboard</header>
      <div className="container">
    <div className="students">
        {showStudent.map((data) => {
        return <StudentCard data={data} showStudent={showStudent}/>
        })}
    </div>
    <div className="cohort-list">
        {showCohort.map((data) => {
        return <CohortList data={data} showCohort={showCohort}/>
        })}
    
    </div>
  
    </div>
    </div>
  );
}

export default App;
