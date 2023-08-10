import React, { useState } from "react";
import students from "./data/data.json";
import StudentList from "./components/StudentList";
import CohortSideBar from "./components/CohortSideBar";
import StudentNotes from "./components/StudentNotes";

function App() {
  const [selectedCohort, setSelectedCohort] = useState(null);

  return (
    <div>
      <header>Student Dashboard</header>
      <div>
        <h3 onClick={() => setSelectedCohort(null)}>All Students</h3>
      </div>
      <CohortSideBar students={students} setSelectedCohort={setSelectedCohort} selectedCohort={selectedCohort} />
      <StudentList students={students} selectedCohort={selectedCohort} />
    </div>
  );
}

export default App;