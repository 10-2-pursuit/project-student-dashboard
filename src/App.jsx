import React, { useState } from "react";
import StudentList from "./components/StudentList";
import StudentDetails from "./components/studentDetails";
import data from "./data/data.json";

const App = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedCohort, setSelectedCohort]= useState(null);
 
  const handleSelectedStudent = (student) => {
    setSelectedStudent(student);
  };

  const handleSelectedCohort = (cohort)=> {
selectedCohort(cohort);
  };

const filteredStudents = selectedCohort ? data.filter((student)) => student.cohort.cohortCode === selectedCohort) : data; 

  return (
    <div className="dashboard">
      <h1>DashBoard</h1>
      <p className="total-count">Total students: {data.length}</p>{/*Display Total Count of Students */}
      <StudentList 
      students={filteredStudents} 
      onSelectStudent={handleSelectedStudent} 
      onSelectCohort={handleSelectedCohort}// pass this function to StudentList
      />
      {selectedStudent && (
        <div className="student-details">
          <StudentDetails student={selectedStudent}/>
        </div>
      )}
    </div>
  );
};

export default App;
