import OntrackStatus from "./components/OntrackStatus";
import SeasonClass from "./components/SeasonClass";
import StudentList from "./components/StudentList";
import data from "./data/data.json";
import React, { useState } from "react";

function App() {
  const [filteredStudents, setFilteredStudents] = useState(data);

  return (
    <div className="body">
      <h1>Choose a Class By Student</h1>
      <h1 className="head">Student Dashboard</h1>
      <StudentList students={filteredStudents} />
      <SeasonClass students={data} setFilteredStudents={setFilteredStudents} />
      <OntrackStatus />
    </div>
  );
}

export default App;
