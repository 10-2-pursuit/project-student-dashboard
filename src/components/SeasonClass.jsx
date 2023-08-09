import React, { useState } from "react";

const SeasonClass = ({ students, setFilteredStudents }) => {
  const handleFilterChange = (cohortCode) => {
    const filteredStudents = students.filter(
      (student) => student.cohort.cohortCode === cohortCode
    );
    setFilteredStudents(filteredStudents);
  };

  return (
    <div>
      <h2 className="spring25" onClick={() => handleFilterChange("Spring2025")}>
        Class Spring 2025
      </h2>
      <h2 className="spring26" onClick={() => handleFilterChange("Spring2026")}>
        Class Spring 2026
      </h2>
      <h2 className="summer25" onClick={() => handleFilterChange("Summer2025")}>
        Class Summer 2025
      </h2>
      <h2 className="summer26" onClick={() => handleFilterChange("Summer2026")}>
        Class Summer 2026
      </h2>
      <h2 className="fall25" onClick={() => handleFilterChange("Fall2025")}>
        Class Fall 2026
      </h2>
      <h2 className="fall26" onClick={() => handleFilterChange("Fall2026")}>
        Class Fall 2026
      </h2>
      <h2 className="winter25" onClick={() => handleFilterChange("Winter2025")}>
        Class Winter 2025
      </h2>
      <h2 className="winter26" onClick={() => handleFilterChange("Winter2026")}>
        Class Winter 2026
      </h2>
    </div>
  );
};

export default SeasonClass;
