import React from 'react';

const Year = ({
        name,
        handleUpdateCohort,
        readableYear
    }) => {
        
    return (
        <div 
            onClick={() => handleUpdateCohort(name)} 
            className='Year'>
            <h5>{readableYear(name)}</h5>
        </div>
    );
}

export default Year;
