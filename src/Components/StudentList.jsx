import { useState } from "react";
import StudentCard from "./StudentCard";

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
              . {student.names.surname} <br />
              {student.username} <br /> Birthday: {formatDate(student.dob)}
              <button onClick={toggleStudentDetails(student.id)}>
                {studentDetails === student.id ? "Show More" : "Show Less"}
              </button>
            </p>
            {studentDetails === student.id && (
                <StudentCard />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
