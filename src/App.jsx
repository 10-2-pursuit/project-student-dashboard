import React, { useState } from "react";
import StudentList from "./components/StudentList";
import StudentDetails from "./components/studentDetails";
import data from "./data/data.json";

const App = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [notes, setNotes] = useState({});

  const handleSelectedStudent = (student) => {
    setSelectedStudent(student);
  };

  const addNote = (studentId, newNote) => {
    setNotes((previousNotes) => ({
      ...previousNotes,
      [studentId]: [...(previousNotes[studentId] || []), newNote],
    }));
  };

  return (
    <div className="dashboard">
      <h1>All Students</h1>
      <p>Total students: {data.length}</p>{/*Display Total Count of Students */}
      <StudentList students={data} onSelectStudent={handleSelectedStudent} />
      {selectedStudent && (
        <div className="student-details">
          {<StudentDetails student={selectedStudent} />}
        </div>
      )}
    </div>
  );
};

export default App;
