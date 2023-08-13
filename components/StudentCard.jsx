import React, { useState } from "react";
import StudentDetail from "./StudentDetail";

const StudentCard = ({
  student,
  setSelectedStudent,
  index,
  toggleStudentDetails,
  handleSubmit,
}) => {
  const firstName = student.names.preferredName;
  const middleInitial = student.names.middleName.charAt(0);
  const lastName = student.names.surname;
  const username = student.username;
  const birthday = student.dob.toString();
  const profilePhoto = student.profilePhoto;
  const [showStudentDetails, setShowStudentDetails] = useState(false);

  function toggleStudentDetails() {
    setShowStudentDetails(!showStudentDetails);
  }

  return (
    <div className="student-card">
      <div className="image">
        <img className="profile-img" src={profilePhoto} alt="" />
      </div>
      <div className="text">
        <h3>{firstName + " " + middleInitial + ". " + lastName}</h3>
        <p>{username}</p>
        <p> Birthday: {birthday} </p>
      </div>
      <div>
        <button className="toggle-button" onClick={toggleStudentDetails}>
          {showStudentDetails ? "Show Less..." : "Show More..."}
        </button>
        {showStudentDetails ? (
          <StudentDetail details={student} handleSubmit={handleSubmit} />
        ) : null}
      </div>
    </div>
  );
}; // setSelectedStudent(index)

export default StudentCard;
