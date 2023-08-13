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

   const handleSelectedCohort = (cohort) => {
 setSelectedCohort(cohort);
   };

   const cohortNames = [
    ...new Set(data.map((student) => student.cohort.cohortCode)),
  ];

 const filteredStudents = selectedCohort 
 ? data.filter((student) => student.cohort.cohortCode === selectedCohort) : data; 

 const cohortTitle = selectedCohort ? `${selectedCohort}` : `All Cohorts`;

 return (
  <div className="container">
    <div className="box1">
      <h1>DashBoard</h1>
      <h1>{cohortTitle}</h1>
      <p className="total-count">Total students: {filteredStudents.length}</p>
      {/*Display Total Count of Students */}
      <div className="cohort-list">
        <h2>Available Cohorts</h2>
        <ul>
          {cohortNames.map((cohort, index) => (
            <li
              key={index}
              className={`cohort-item ${
                selectedCohort === cohort ? "selected" : ""
              }`}
              onClick={() => handleSelectedCohort(cohort)}
            >
              {cohort}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="box2">
      <StudentList
        students={filteredStudents}
        onSelectStudent={handleSelectedStudent}
      />
    </div>
    <div className="box3">
      {selectedStudent && (
        <div className="student-details">
          <StudentDetails student={selectedStudent} />
        </div>
      )}
    </div>
  </div>
 );
};

export default App;