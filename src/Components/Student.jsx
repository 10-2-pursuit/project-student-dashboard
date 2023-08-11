import React from 'react';
import { useState } from 'react';

import StudentDetails from './StudentDetails';

const Student = ({student, handleFormSubmit}) => {
    const name = student.names

    const [ShowDetails, setShowDetails] = useState(false)

    const handleShowDetails = () => {
        setShowDetails(!ShowDetails)
    }

    const checkOnTrack = (student) => {
        if (student.certifications.resume != true 
        ||  student.certifications.linkedin != true
        || student.certifications.github != true) {
            return false
        }
        return true
    }

    let onTrack = checkOnTrack(student)

    return (
        <div className='Student' id={student.id}>
            <img src={student.profilePhoto} alt="" />
            <div className='StudentInfo'>
                <h3>{`${name.preferredName} ${name.middleName} ${name.surname}`}</h3>
                <span>{`${student.username}`}</span>
                <span><span className='SpanGreen'>Birthday: </span>{`${student.dob}`}</span>
            </div>
                {onTrack ? (
                   <span className='SpanGreen onTrack'>
                        On Track to Graduate
                   </span>
                ): null }
            <span 
                    className='SpanGreen ShowMore'
                    onClick={handleShowDetails}
                    >{ShowDetails ? "Hide Details..." : "Show Details..."}
            </span>
            {ShowDetails ? (
                <>
                    <StudentDetails 
                        codewars={student.codewars}
                        scores={student.cohort.scores} 
                        certifications={student.certifications}
                        handleFormSubmit={handleFormSubmit}
                        studentId={student.id}
                    />
                </>
                ) : null}
        </div>
    );
}

export default Student;
