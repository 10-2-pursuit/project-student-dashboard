import React from 'react';

const Year = ({
        name,
        handleUpdateCohort,
        readableYear
    }) => {

    // let isYear = name.search(/[0-9]/) == -1
    // let season = name.slice(0, (name.length-4))
    // let year = name.slice((name.length-4), name.length)
    // console.log(name)

    return (
        <div 
            onClick={() => handleUpdateCohort(name)} 
            className='Year'>
            <h5>{readableYear(name)}</h5>
        </div>
    );
}

export default Year;
