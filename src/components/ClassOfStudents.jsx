import React, { useState } from "react";
import students from "../data/data.json";
import StudentCard from "./StudentCard";

const ClassOfStudents = () => {
  const sortedStudents = [...students].sort((a, b) =>
    a.cohort.cohortCode.localeCompare(b.cohort.cohortCode)
  );

  const groupedByCohort = {};
  sortedStudents.forEach((student) => {
    const cohortCode = student.cohort.cohortCode;
    if (!groupedByCohort[cohortCode]) {
      groupedByCohort[cohortCode] = [];
    }
    return groupedByCohort[cohortCode].push(student);
  });

    const [expanedCohorts, setExpanedCohorts] = useState({})

    const toggleCohort = (cohortCode) => {
        setExpanedCohorts((prevState) => ({
            ...prevState, [cohortCode]: !prevState[cohortCode],
        }));
    };

  return (
    <div>
      {Object.entries(groupedByCohort).map(([cohortCode, students]) => (
        <div key={cohortCode}>
          <h3 onClick={() => toggleCohort(cohortCode)}>{cohortCode} {expanedCohorts[cohortCode]? "▼" : "▶️"}
          </h3>
          {expanedCohorts[cohortCode] && (
          <ul>
            {students.map((student, index) => (
              <li key={index}>
                <StudentCard student={student} />
              </li>
            ))}
          </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ClassOfStudents;
