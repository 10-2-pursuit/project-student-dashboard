import React from 'react';
import Year from './Year';


const Years = ({studentsData}) => {

    let yearList = [ "All Students" , ...Array.from(new Set(studentsData.map((student) => 
    student.cohort.cohortCode)))]
        

    // console.log(yearList)
    // console.log(studentsData[0].cohort.cohortCode)

    return (
        <div className='Years'>
            <h3> Choose a Class by Start Date</h3>
            {yearList.map((year) => <Year name={year}/>)}
        </div>
    );
}

export default Years;
