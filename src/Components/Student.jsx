import React from 'react';
import { useState } from 'react';

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
                <span><span className='Glow'>Birthday: </span>{`${student.dob}`}</span><br />
                <span 
                    className='Glow ShowMore'
                    onClick={handleShowDetails}
                    >{ShowDetails ? "Hide Details..." : "Show Details..."}</span><br />
                {ShowDetails ? (
                <>
                supae
                </>
                ) : null}
            </div>
        </div>
    );
}

export default Student;
