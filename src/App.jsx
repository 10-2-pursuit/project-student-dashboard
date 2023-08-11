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
  const [selectedCohort, setSelectedCohort] = useState(null);

  const sortCohorts = (cohortA, cohortB) => {
    const [seasonA, yearA] = cohortA.match(/\D+|\d+/g);
    const [seasonB, yearB] = cohortB.match(/\D+|\d+/g);

    const seasonOrder = ['Winter', 'Spring', 'Summer', 'Fall'];

    if (yearA === yearB) {
      return seasonOrder.indexOf(seasonA) - seasonOrder.indexOf(seasonB);
    }

    return parseInt(yearB, 10) - parseInt(yearA, 10);
  }

  const sortedCohorts = [...cohorts].sort(sortCohorts);

  const handleCohortSelect = (selectedCohort) => {
    setSelectedCohort(selectedCohort);
    
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
    <div>
      <Header />
      <div className="container">
        <div className="content">
          <CohortFilter cohorts={sortedCohorts} selectedCohort={selectedCohort} setSelectedCohort={setSelectedCohort} onSelect={handleCohortSelect} onShowAll={showAllStudents} />
          <StudentList students={students} selectedCohort={selectedCohort} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
