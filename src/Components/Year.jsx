import React from 'react';

const Year = ({name}) => {
    let isYear = name.search(/[0-9]/) == -1
    let season = name.slice(0, (name.length-4))
    let year = name.slice((name.length-4), name.length)
    

    return (
        <div className='Year'>
            <h5>{isYear ? name : `${season} ${year}`}</h5>
        </div>
    );
}

export default Year;
