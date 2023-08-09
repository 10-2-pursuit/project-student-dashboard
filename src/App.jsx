import React from "react";
import { useState } from "react";
import students from "./data/data.json"
import StudentList from "./components/StudentList";
import ClassOfStudents from "./components/ClassOfStudents";

function App() {

  const [selectedCohort, setSelectedCohort] = useState(null)

  return (
    <div>
      <header>Student Dashboard</header>
      <div>
        <h3 onClick={() => setSelectedCohort(null)}>All Students</h3>
      </div>
      {selectedCohort ? ( <ClassOfStudents  selectedCohort={selectedCohort} /> ) : ( <StudentList students={students}/> )}
    </div>
  );
}

export default App;
