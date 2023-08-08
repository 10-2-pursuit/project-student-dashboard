import React from 'react';

const StudentList =  ({students}) => {
    return (
        <div className="student-list">
            <h2>Student List</h2>
            <ul>
                {students.map(data=> (
                    <li key={data.id} className='student-item'>
                        <img
                        src={data.profilePhoto}
                        alt={`${data.names.preferredName} Profile`}
                        />
                        <div className='student-info'>
                            <h3>{data.name.preferredName}</h3>
                            <p>Username: {data.username}</p>
                            <p>Birthday: {data.dob}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;
