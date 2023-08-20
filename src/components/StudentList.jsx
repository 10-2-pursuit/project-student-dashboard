import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students, selectedCohort, handleNotes, notes }) => {
  const selectedStudents = !selectedCohort
    ? students
    : students.filter(
        (student) => student.cohort.cohortCode === selectedCohort
      );
  return (
    <div>
        <h2>Total Students: <span id="studenttotal">{students.length}</span></h2>
      {selectedStudents.map((student, index) => (
        <StudentCard
          handleNotes={handleNotes}
          notes={notes}
          key={index}
          student={student}
        />
      ))}
      <ul></ul>
    </div>
  );
};

export default StudentList;
