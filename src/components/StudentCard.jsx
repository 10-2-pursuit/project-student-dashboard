import React from "react";
import StudentDetails from "./StudentDetails";

export default function StudentCard({ student, handleNotes, notes }) {
    
  const { names, username, dob, profilePhoto } = student;

  const firstName = names.preferredName;
  const middleInitial = names.middleName
    ? names.middleName.charAt(0) + "."
    : "";
  const lastName = names.surname;

  return (
    <li className="studentcard">
      <img src={profilePhoto} alt={`${firstName} ${lastName}`} />
      <div className="student-details-container">
        <h5>{`${firstName} ${middleInitial} ${lastName}`}</h5>
        <p>{username}</p>
        <p>Birthday: {dob}</p>
        <StudentDetails
          handleNotes={handleNotes}
          notes={notes}
          student={student}
        />
      </div>
    </li>
  );
}
