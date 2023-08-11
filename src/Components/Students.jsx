import React from 'react';
import Student from './Student';

const Students = ({
    studentsData, 
    selectedCohort, 
    handleFormSubmit,
    studentNotes,
    readableYear
    }) => {
    // console.log(selectedCohort)
    // console.log(studentsData)
    
    return (
        <div className='Students'>
            <h3>{readableYear(selectedCohort)}</h3>
            <h4>Total Students: <span className='SpanGreen'>{studentsData.length}</span></h4>

            {studentsData.map((student) => { 
                return selectedCohort == "All Students" 
                || student.cohort.cohortCode == selectedCohort ? 
                (
                <>
                    <Student 
                        student={student}
                        handleFormSubmit={handleFormSubmit}
                        studentNotes={studentNotes}/>
                </>) : null
                }
            )}
          
        </div>
    );
}

export default Students;
