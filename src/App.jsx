import React, { useState } from "react";
import students from "./data/data.json";
import StudentList from "./components/StudentList";
import CohortSideBar from "./components/CohortSideBar";

function App() {
  const [selectedCohort, setSelectedCohort] = useState(null);

  return (
    <div className="app-container">
      <h1 id="heading">Student Dashboard</h1>
        <aside className="sideBar">
          <h1>Choose a Class by Start Date</h1>
          <h3 className="allcohorts" onClick={() => setSelectedCohort(null)}>
            All Students
          </h3>
          <CohortSideBar
            students={students}
            setSelectedCohort={setSelectedCohort}
            selectedCohort={selectedCohort}
          />
        </aside>
      <div className="StudentList">
        <StudentList students={students} selectedCohort={selectedCohort} />
      </div>
    </div>
  );
}

export default App;
