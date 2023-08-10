import React from 'react';
import Student from './Student';

const Students = ({studentsData, selectedCohort, handleFormSubmit}) => {
    console.log(selectedCohort)
    console.log(studentsData)
    
    // studentsData.map(() => {})
    return (
        <div className='Students'>
            <h3>All Students</h3>
            <h4>Total Students: <span className='Glow'>{studentsData.length}</span></h4>
            {studentsData.map((student) => 
                <Student student={student}/>
                )}
            {/* <Student/> */}
        </div>
    );
}

export default Students;
