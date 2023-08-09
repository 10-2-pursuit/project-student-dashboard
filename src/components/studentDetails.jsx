import React from 'react';

const StudentDetails = ({student}) => {
const [viewMore, setViewMore]= useState(false);

const toggleView = () => {
    setViewMore(!viewMore);
};

const isOnTrack = student.certifications.resume && student.certifications.linkedin && student.certifications.github && student.certifications.mockInterview && student.codewars.current.total > 600; 

const assignmentsPercentage = student.cohort.scores.assignments * 100;
const projectsPercentage = student.cohort.scores.projects * 100;
const assessmentsPercentage = student.cohort.scores.assessment * 100; 


    return (
        <div className="student-details">
         <h2>Student Details</h2>
         <img src={student.profilePhoto} alt={`${student.names.preferredName}'s profile`}/>
         <p>Name: {student.names.preferredName}</p>
         <p>UserName: {student.username}</p>
         <p>Birthday: {student.dob}</p> 
         <p>Status: {isOnTrack ? "On Track" : "Failing Foward"}</p>
         <button onclick={toggleView}> 
         {viewMore ? "Hide Details" : "Show Details"}
         </button>


        {viewMore && (
            <dic className= "additional-info"
        )}
        </div>

    );
};

export default StudentDetails;
