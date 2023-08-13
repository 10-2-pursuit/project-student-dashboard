import React from "react";

const SeasonClass = ({ students, setFilteredStudents }) => {
  const handleFilterChange = (cohortCode) => {
    const filteredStudents = students.filter(
      (student) => student.cohort.cohortCode === cohortCode
    );
    setFilteredStudents(filteredStudents);
  };

  return (
    <div className="bar">
      <h1>Choose a Class By Start Date</h1>

      <h2 onClick={() => handleFilterChange("Spring2025")}>Spring 2025</h2>
      <h2 onClick={() => handleFilterChange("Spring2026")}>Spring 2026</h2>
      <h2 onClick={() => handleFilterChange("Summer2025")}>Summer 2025</h2>
      <h2 onClick={() => handleFilterChange("Summer2026")}>Summer 2026</h2>
      <h2 onClick={() => handleFilterChange("Fall2025")}>Fall 2025</h2>
      <h2 onClick={() => handleFilterChange("Fall2026")}>Fall 2026</h2>
      <h2 onClick={() => handleFilterChange("Winter2025")}>Winter 2025</h2>
      <h2 onClick={() => handleFilterChange("Winter2026")}>Winter 2026</h2>
    </div>
  );
};

export default SeasonClass;
