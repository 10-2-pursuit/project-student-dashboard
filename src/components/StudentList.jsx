import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students, selectedCohort }) => {
const selectedStudents = !selectedCohort ? students : students.filter((student) => student.cohort.cohortCode === selectedCohort)
  return (
    <div className="StudentList">
        {selectedStudents.map((student, index) => (
            <StudentCard key={index} student={student} />
          ))}
      <ul>
      </ul>
    </div>
  );
};

export default StudentList;
