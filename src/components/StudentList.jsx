import React from "react";

const StudentList = ({ students }) => {
  const details = () => {};

  return (
    <div className="student-list">
      <h2>Students List</h2>
      {students.map((student) => (
        <div className="student-card" key={student.id}>
          <img
            src={student.profilePhoto}
            alt={`${student.names.preferredName}'s profile`}
            className="student-photo"
          />
          <h3 className="student-name">
            {student.names.preferredName} {student.names.surname}
          </h3>
          <p className="student-info">Username: {student.username}</p>
          <p className="student-info">Birthday: {student.dob}</p>
          <button onClick={details}>Show More</button>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
