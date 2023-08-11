import React, { useState } from "react";
import students from "./data/data.json";
import StudentList from "./components/StudentList";
import CohortSideBar from "./components/CohortSideBar";

function App() {
  const [selectedCohort, setSelectedCohort] = useState(null);

  return (
    <div className="app-container">
      <header>Student Dashboard</header>
      <div>
        <h1>Choose a Class by Start Date</h1>
        <h3 onClick={() => setSelectedCohort(null)}>All Students</h3>
      </div>
      <CohortSideBar students={students} setSelectedCohort={setSelectedCohort} selectedCohort={selectedCohort} />
      <StudentList students={students} selectedCohort={selectedCohort} />
    </div>
  );
}

export default App;