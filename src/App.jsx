import React, { useState } from "react";
import data from "./data/data.json";
import StudentList from "./components/StudentList";
import SeasonClass from "./components/SeasonClass";

function App() {
  const [filteredStudents, setFilteredStudents] = useState(data);
  const [selectedClass, setSelectedClass] = useState("All Students");

  const handleAddNote = (studentId, commenterName, comment) => {
    const updatedStudents = filteredStudents.map((student) =>
      student.id === studentId
        ? { ...student, notes: [...student.notes, { commenterName, comment }] }
        : student
    );
    setFilteredStudents(updatedStudents);
  };

  const handleClassFilter = (cohortCode) => {
    const filteredStudents =
      cohortCode === "All Students"
        ? data
        : data.filter((student) => student.cohort.cohortCode === cohortCode);
    setFilteredStudents(filteredStudents);
    setSelectedClass(cohortCode);
  };

  return (
    <div className="body">
      <SeasonClass
        students={data}
        setFilteredStudents={setFilteredStudents}
        handleClassFilter={handleClassFilter}
      />

      <StudentList
        students={filteredStudents}
        selectedClass={selectedClass}
        handleAddNote={handleAddNote}
      />
    </div>
  );
}

export default App;
