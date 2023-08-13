import React from 'react';

const Header = ({toggleDarkMode}) => {
    return (
        <>
            <div className='Header'>
                <h1>Student Dashboard</h1>
                <section>
                    <button 
                        className='DayNight' 
                        onClick={toggleDarkMode}
                        >🌙</button>
                </section>
            </div>
        </>
    );
}

export default Header;
