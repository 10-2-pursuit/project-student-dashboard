import React from 'react';

const StudentDetails = ({student}) => {
const isOnTrack = student.certifications.resume && student.certifications.linkedin && student.certifications.github && student.certifications.mockInterview && student.codewars.current.total > 600; 

    return (
        <div className="student-details">
         <h2>Student Details</h2>
         <img src={student.profilePhoto} alt={`${student.names.preferredName}'s profile`}/>
         <p>Name: {student.names.preferredName}</p>
         <p>UserName: {student.username}</p>
         <p>Birthday: {student.dob}</p> 
         <p>Status: {isOnTrack ? "On Track" : "Failing Foward"}</p>
        </div>

    );
};

export default StudentDetails;
