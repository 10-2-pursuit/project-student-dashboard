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
    
    let filteredStudents = []

    if(selectedCohort != "All Students"){
        filteredStudents = [...studentsData].filter(
                (student) => student.cohort.cohortCode == selectedCohort)
    } else {
        filteredStudents = [...studentsData]
    }
    



    // console.log(filteredStudents.length)


    return (
        <div className='Students'>
            <h3>{readableYear(selectedCohort)}</h3>
            <h4>Total Students: <span className='SpanGreen'>{filteredStudents.length}</span></h4>

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
