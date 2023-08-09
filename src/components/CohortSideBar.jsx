import React from "react";

const CohortSideBar = ({ setSelectedCohort, students, selectedCohort }) => {
  const sortedStudents = [...students].sort((a, b) =>
    a.cohort.cohortCode.localeCompare(b.cohort.cohortCode)
  );

  const groupedByCohort = {};
  sortedStudents.forEach((student) => {
    const cohortCode = student.cohort.cohortCode;
    if (!groupedByCohort[cohortCode]) {
      groupedByCohort[cohortCode] = [];
    }
    groupedByCohort[cohortCode].push(student);
  });
  return (
    <div>
      {Object.entries(groupedByCohort).map(([cohortCode, students]) => (
        <div key={cohortCode}>
          <h3 onClick={() => setSelectedCohort(cohortCode)}>
            {cohortCode} {selectedCohort === cohortCode ? "(Selected)" : ""}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CohortSideBar;
