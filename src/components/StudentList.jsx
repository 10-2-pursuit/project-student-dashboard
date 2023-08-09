import React from 'react';
import StudentDetails from './studentDetails';

const StudentList =  ({students, onSelectStudent}) => {
    return (
      <div className="student-list">
        {students.map(student => (
          <div key={student.id} className='student'>
            <img src= {student.profilePhoto} alt={`${student.names.preferredName}'s profile`} />
            <p>Name: {student.names.preferredName}</p>
            <p>Birthday: {student.dob}</p>
            <button onClick={() => onSelectStudent(student)}>Show Details</button>
      </div>
      ))}ea
      </div>
    );
        };

export default StudentList;
