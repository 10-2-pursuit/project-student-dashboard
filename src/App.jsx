import React from "react";
import data from "./data/data.json";
import StudentCard from "../components/StudentCard";
// import StudentList from "../components/StudentList";
// import CohortList from "../components/CohortList";
import { useState } from "react";
import "./index.css";

function App() {
  
  const [showStudent, setShowStudent] = useState(data)

  
  return (
    <div>
      <header>Student Dashboard</header>
      <div>
      <div className="container">
    <div className="students">
        {showStudent.map((data) => {
        return <StudentCard data={data} showStudent={showStudent}/>
        })}
    </div>
    </div>
  </div> 
    </div>
  );
}

export default App;
