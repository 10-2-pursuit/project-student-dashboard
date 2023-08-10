import React from 'react';
import StudentDetails from './studentDetails';

const StudentList =  ({students, onSelectStudent}) => {
    return (
      <div className="student-list">
        {students.map(student => (
          <div key={student.id} className='student'>
            <img src= {student.profilePhoto} alt={`${student.names.preferredName}'s profile`} />
            <br/> 
            <p>Name: {student.names.preferredName}</p>
            <br/>
            <p>UserName: {student.username}</p>
            <br/>
            <p>Birthday: {student.dob}</p>
            <button onClick={() => onSelectStudent(student)}>Show Student</button>
      </div>
      ))}
      </div>
    );
        };

export default StudentList;
