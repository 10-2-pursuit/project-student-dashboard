//  import React from "react";
import { useState } from "react";
import StudentList from "./components/StudentList";
import StudentDetails from "./components/studentDetails";
import data from './data/data.json';

import React from 'react';

const App = () => {
  const [selectedStudent, setselectedStudent]= useState(null);

  const handleSelectedStudent = student => {
     setselectedStudent(student);
  };

  return (
    <div className= "dashboard">
      <h1>All Students</h1>
      <StudentList students={data}onSelectStudent={handleSelectedStudent} />
      {selectedStudent && ( 
        <div className="student-details">
          <StudentDetails student={selectedStudent}/>{/*show selected student data*/}
          </div>
      )}
      
    </div>
  );
}

export default App;





