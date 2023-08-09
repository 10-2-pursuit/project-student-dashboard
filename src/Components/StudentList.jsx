import { useState } from "react";
import Details from "./Details";

export default function StudentList({ students }) {
  const [studentDetails, setStudentDetails] = useState(null);

  const total = students.length;

  const formatDate = (inputDate) => {
    const partDate = inputDate.split("/");
    const month = parseInt(partDate[0], 10);
    const day = parseInt(partDate[1], 10);
    const year = parseInt(partDate[2], 10);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthName = months[month - 1];

    const formattedDate = `${monthName} ${day}, ${year}`;

    return formattedDate;
  };

  const toggleStudentDetails = (studentId) => {
    if (studentDetails === studentId) {
      setStudentDetails(null);
    } else {
      setStudentDetails(studentId);
    }
  };

  const isOnTrack = (student) => {
    return (
      student.certifications.resume &&
      student.certifications.linkedin &&
      student.certifications.github &&
      student.certifications.mockInterview &&
      student.codewars.score.current.total > 600
    );
  };

  return (
    <div className="student-list">
      <h2>Students</h2>
      <p>Total Students: {total} </p>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <img src={student.profilePhoto} alt={student.names.surname} />
            <p>
              {student.names.preferredName} {student.names.middleName.charAt(0)}
              . {student.names.surname}{" "}
              {isOnTrack(student) ? (
                <span className="on-track">On Track</span>
              ) : (
                <span className="off-track">Off Track</span>
              )}{" "}
              <br />
              {student.username} <br /> Birthday: {formatDate(student.dob)}
              <br />
              <span onClick={() => toggleStudentDetails(student.id)}>
                {studentDetails === student.id
                  ? "Show Less..."
                  : "Show More..."}
              </span>
            </p>
            {studentDetails === student.id ? (
              <div className="student-details">
                <Details student={student} />
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
