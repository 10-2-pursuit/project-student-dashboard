import React from 'react';

const Student = ({student}) => {
    return (
        <div className='Student'>
            <img src={student.profilePhoto} alt="" />
            <span>spooky</span>
        </div>
    );
}

export default Student;
