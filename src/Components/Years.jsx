import React from 'react';
import Year from './Year';


const Years = ({
    studentsData,
    handleUpdateCohort,
    readableYear
}) => {

    let yearList = [ ...Array.from(new Set(studentsData.map((student) => 
    student.cohort.cohortCode)))]

    // Properly sort the years chronologically
    function yearSorter(a,b) {
        const seasonRank = {
            'Winter': 0,
            'Spring': 1,
            "Summer": 2,
            'Fall': 3
        }

        a = readableYear(a).split(' ')
        b = readableYear(b).split(' ')

        if (a[1] < b[1]) {
            return -1
        }
        if (a[1] > b[1]) {
            return 1
        }
        if(seasonRank[a[0]] < seasonRank[b[0]]){
            return -1
        }
        if(seasonRank[a[0]] > seasonRank[b[0]]){
            return 1
        }
        return 0
    }

    yearList.sort(yearSorter)
    yearList = ["All Students" , ...yearList]

    // console.log(yearList)
    // console.log(studentsData[0].cohort.cohortCode)

    return (
        <div className='Years'>
            <h3> Choose a Class by Start Date</h3>
            {yearList.map((year) => 
                <Year 
                    name={year}
                    handleUpdateCohort={handleUpdateCohort}
                    readableYear={readableYear}
                    />)}
        </div>
    );
}

export default Years;
