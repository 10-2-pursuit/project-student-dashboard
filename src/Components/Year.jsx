import React from 'react';

const Year = ({name}) => {
    let season = name.slice(0, (name.length-4))
    let year = name.slice((name.length-4), name.length)
    return (
        <div className='Year'>
            <h6>{`${season} ${year}`}</h6>
        </div>
    );
}

export default Year;
