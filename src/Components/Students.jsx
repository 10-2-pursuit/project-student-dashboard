import React from 'react';
import Student from './Student';

const Students = ({studentsData, selectedCohort}) => {
    console.log(selectedCohort)
    console.log(studentsData)
    
    // studentsData.map(() => {})
    return (
        <div className='Students'>
    
            {studentsData.map((student) => 
                <Student student={student}/>
                )}
            {/* <Student/> */}
        </div>
    );
}

export default Students;
