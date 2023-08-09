import React from 'react';
import { useState } from 'react';
import data from './data/data.json'

console.log(data)

function App() {
  const [studentsData, setStudentsData] = useState(data);
    const onTrackStatus = (student) => { 
        const studentsResume = student.certifications.resume;
        const studentsGithub = student.certifications.github;
        const studentsLinkedIn = student.certifications.linkedIn;
        const studentsMockInterview= student.certifications.mockInterview;
        const studentCodeWars = student.codewars.current.total;



        return (

      studentsResume && studentsGithub && studentsLinkedIn && studentsMockInterview
        && studentCodeWars> 600

)
        }


  return (
    <div>
      <h1>Student Dashboard</h1>
    <ul>
      {studentsData.map((student) => (
        <li key={student.id}>
          <h3>{student.names.preferredName}</h3>
          <p>Email: {student.username}</p>
          <p>Birthday: {student.dob}</p>
          <img src={student.profilePhoto} alt={student.names.prefferedName} />
            <p>{onTrackStatus(student) ? "onTrack": "notOnTrack"}</p>



        </li>
      ))}
    </ul>

    
    </div>
  );
}

export default App;