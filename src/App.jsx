import React from "react";
import { useState } from "react";
import studentData from "./data/data.json"
import Header from "./Components/Header";
import CohortFilter from "./Components/CohortFilter";
import StudentList from "./Components/StudentList";
import Footer from "./Components/Footer";

function App() {
  const [students, setStudents] = useState(studentData)
  const cohorts = [...new Set(students.map(student => student.cohort.cohortCode))]

  const handleCohortSelect = (selectedCohort) => {
    if (!selectedCohort) {
      setStudents(studentData);
    } else {
      const filteredStudents = studentData.filter(
        student => student.cohort.cohortCode === selectedCohort
      );
      setStudents(filteredStudents)
    }
  }

  const showAllStudents = () => {
    setStudents(studentData);
  }

  return (
    <body>
      <Header />
      <div className="container">
        <div className="content">
          <CohortFilter cohorts={cohorts} onSelect={handleCohortSelect} onShowAll={showAllStudents} />
          <StudentList students={students} />
        </div>
        <Footer />
      </div>
    </body>
  );
}

export default App;
