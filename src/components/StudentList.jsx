import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students }) => {

  return (
    <div>
      <ul>
          {students.map((student, index) => (
            <StudentCard key={index} student={student} />
          ))}
      </ul>
    </div>
  );
};

export default StudentList;
