import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students, selectedCohort }) => {

  return (
    <div>
        {students.filter((student) => student.cohort.cohortCode === selectedCohort ).map((student, index) => (
            <StudentCard key={index} student={student} />
          ))}
      <ul>
      </ul>
    </div>
  );
};

export default StudentList;
