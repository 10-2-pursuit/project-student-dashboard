

import React, { useState } from "react";
import data from "./data/data.json";
import StudentList from "./components/StudentList";
import SeasonClass from "./components/SeasonClass";

function App() {
  const [filteredStudents, setFilteredStudents] = useState(data);

  const handleAddNote = (studentId, commenterName, comment) => {
    const updatedStudents = filteredStudents.map((student) =>
      student.id === studentId
        ? { ...student, notes: [...student.notes, { commenterName, comment }] }
        : student
    );
    setFilteredStudents(updatedStudents);
  };

  return (
    <div className="body">
      <SeasonClass students={data} setFilteredStudents={setFilteredStudents} />

      <StudentList students={filteredStudents} handleAddNote={handleAddNote} />
    </div>
  );
}

export default App;
