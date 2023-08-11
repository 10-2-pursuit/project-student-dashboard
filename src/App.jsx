import React, { useState } from "react";
import StudentList from "./components/StudentList";
import StudentDetails from "./components/studentDetails";
import data from "./data/data.json";

const App = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
 
  const handleSelectedStudent = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div className="dashboard">
      <h1>DashBoard</h1>
      <p className="total-count">Total students: {data.length}</p>{/*Display Total Count of Students */}
      <StudentList students={data} onSelectStudent={handleSelectedStudent} />
      {selectedStudent && (
        <div className="student-details">
          <StudentDetails student={selectedStudent}/>
        </div>
      )}
    </div>
  );
};

export default App;
