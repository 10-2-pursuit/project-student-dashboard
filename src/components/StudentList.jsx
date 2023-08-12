import React, { useState } from "react";
import OneOnOneSection from "./OneOnOneSection";

const StudentList = ({ students, handleAddNote }) => {
  const [expandedDetails, setExpandedDetails] = useState({});

  const isOnTrack = (student) =>
    student.certifications.resume &&
    student.certifications.linkedin &&
    student.certifications.github &&
    student.certifications.mockInterview &&
    student.codeWarsScore > 600;

  const toggleDetails = (studentId) => {
    setExpandedDetails((prevState) => ({
      ...prevState,
      [studentId]: !prevState[studentId],
    }));
  };

  return (
    <div className="student-list">
      {students.map((student) => (
        <div
          className={`student-card ${
            isOnTrack(student) ? "on-track" : "off-track"
          }`}
          key={student.id}
        >
          <div className="student-info">
            <img
              src={student.profilePhoto}
              alt={`${student.names.preferredName}'s profile`}
              className="student-photo"
            />
            <h3 className="student-name">
              {student.names.preferredName} {student.names.surname}
            </h3>
            <p className="student-info1">Username: {student.username}</p>
            <p className="student-info2">Class Season: {student.cohort.cohortCode}</p>
            <p className="student-info3">Birthday: {student.dob}</p>
          </div>

          <button
            className="additional-info"
            onClick={() => toggleDetails(student.id)}
          >
            {expandedDetails[student.id] ? "Hide Details" : "Show More"}
          </button>
          {expandedDetails[student.id] && (
            <div className="student-details">
              <OneOnOneSection
                notes={student.notes}
                addNote={(name, comment) =>
                  handleAddNote(student.id, name, comment)
                }
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StudentList;
