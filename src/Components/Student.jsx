import React from 'react';
import { useState } from 'react';

import StudentDetails from './StudentDetails';

const Student = ({student}) => {
    const name = student.names

    const [ShowDetails, setShowDetails] = useState(false)

    const handleShowDetails = () => {
        setShowDetails(!ShowDetails)
    }

    return (
        <div className='Student' id={student.id}>
            <img src={student.profilePhoto} alt="" />
            <div className='StudentRight'>
                <h3>{`${name.preferredName} ${name.middleName} ${name.surname}`}</h3>
                <span>{`${student.username}`}</span><br />
                <span><span className='SpanGreen'>Birthday: </span>{`${student.dob}`}</span><br /><br />
                <span 
                    className='SpanGreen ShowMore'
                    onClick={handleShowDetails}
                    >{ShowDetails ? "Hide Details..." : "Show Details..."}</span><br />
                
            </div>
            {ShowDetails ? (
                <>
                    <StudentDetails 
                        codewars={student.codewars}
                        scores={student.cohort.scores} 
                        certifications={student.certifications}
                    />
                </>
                ) : null}
        </div>
    );
}

export default Student;
