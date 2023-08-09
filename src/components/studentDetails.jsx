import React from 'react';

const StudentDetails = ({student}) => {
    return (
        <div className="student-details">
         <h2>Student Details</h2>
         <img src={student.profilePhoto} alt={`${student.names.preferredName}'s profile`}/>
         <p>Name: {student.names.preferredName}</p>
         <p>UserName: {student.username}</p>
         <p>Birthday: {student.dob}</p>
        </div>

    );
}

export default StudentDetails;
