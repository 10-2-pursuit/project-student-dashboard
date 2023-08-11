import React from "react";
// import { useState } from "react";

const StudentList = ({ students, onSelectStudent }) => {
  const cohortNamesSet = [
    ...new Set(students.map((student) => student.cohort.cohortCode)),
  ];
  const readableCohortName = Array.from(cohortNamesSet).map((cohortCode) => {
    const parts = cohortCode.match(/([A-Za-z]+)(\d+)/);
    return `${parts[1]} ${parts[2]}`;
  });
  return (
    <div className="student-list">
      <h2>All Students</h2>
      <ul>
        {students.map((student) => (
          <div key={student.id} className="student">
            <img
              src={student.profilePhoto}
              alt={`${student.names.preferredName}'s profile`}
            />
            <br />
            <p>Name: {student.names.preferredName}</p>
            <br />
            <p>UserName: {student.username}</p>
            <br />
            <p>Birthday: {student.dob}</p>
            <button onClick={() => onSelectStudent(student)}>
              Show Student
            </button>
          </div>
        ))}
      </ul>
      <div className="cohort-list">
  <h2>Available Cohorts</h2>
  <ul>
    {readableCohortName.map((cohortNames, index) => (
      <li key={index}>{cohortNames}</li>
    ))}
  </ul>
</div>
    </div>
  );
};

export default StudentList;
