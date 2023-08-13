import React from "react";

const StudentList = ({ students, onSelectStudent }) => {
 
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
            <br />
            <button onClick={() => onSelectStudent(student)}>
              Show Student
            </button>
          </div>
        ))}
         <br />
     </ul> 
    </div>
  );
};

export default StudentList;
