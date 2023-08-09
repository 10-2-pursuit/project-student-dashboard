import { useState } from "react";
import React from 'react';


const StudentDetails = ({student}) => {
const [viewMore, setViewMore]= useState(false);

const toggleView = () => {
    setViewMore(!viewMore);
};

const isOnTrack = student.certifications.resume && student.certifications.linkedin && student.certifications.github && student.certifications.mockInterview && student.codewars.current.total > 600; 

const assignmentsPercentage = student.cohort.scores.assignments * 100;
const projectsPercentage = student.cohort.scores.projects * 100;
const assessmentsPercentage = student.cohort.scores.assessments * 100; 


    return (
        <div className="student-details">
         <h2>Student Details</h2>
         <img src={student.profilePhoto} alt={`${student.names.preferredName}'s profile`}/>
         <p>Name: {student.names.preferredName}</p>
         <p>UserName: {student.username}</p>
         <p>Birthday: {student.dob}</p> 
         <p>Status: {isOnTrack ? "On Track" : "Failing Foward"}</p>
         <button className="toggle-button" onClick={toggleView}> 
         {viewMore ? "Hide Details" : "Show Details"}
         </button>

        {viewMore && (
            <div className="additional-info">
                <p>Assigments Score: {assignmentsPercentage.toFixed(2)}%</p>
                <p>Project Score: {projectsPercentage.toFixed(2)}%</p>
                <p>Assesments Score: {assessmentsPercentage.toFixed(2)}%</p>
                <p>Resume Certification: {student.certifications.resume ? "✅ " : "❌"}</p>
                <p>Resume Certification: {student.certifications.resume ? "✅ " : "❌"}</p>
                <p>LinkedIn Certification:{student.certifications.linkedin ? "✅" : "❌"}</p>
                <p>GitHub Certification:{student.certifications.github ? "✅" :"❌" }</p>
                <p>Mock Interview Certification: {student.certifications.mockInterview ? "✅" :"❌" }</p>
        </div>
        )}
</div>
    );
};

export default StudentDetails;
