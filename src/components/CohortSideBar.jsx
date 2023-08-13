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
    <div className="cohortclasses">
      {Object.entries(groupedByCohort).map(([cohortCode, students]) => {
        const match = cohortCode.match(/([a-zA-Z]+)(\d+)/);
        const wordCohort = match[1];
        const cohortYear = match[2];
        
        return (
          <div key={cohortCode}>
            <h3 className="cohortSelect" onClick={() => setSelectedCohort(cohortCode)}>
              {wordCohort} {cohortYear} {selectedCohort === cohortCode ? "(Selected)" : ""}
            </h3>
          </div>
        );
      })}
    </div>
  );
}
export default CohortSideBar;
