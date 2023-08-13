import React, { useState } from "react";
import OneOnOneSection from "./OneOnOneSection";

const StudentList = ({ students, handleAddNote }) => {
  const [expandedDetails, setExpandedDetails] = useState({});

  const isOnTrack = (student) =>
    student.certifications.resume &&
    student.certifications.linkedin &&
    student.certifications.github &&
    student.certifications.mockInterview &&
    student.cohort.scores > 600;

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
            <p className="student-info2">
              Class Season: {student.cohort.cohortCode}
            </p>
            <p className="student-info3">Birthday: {student.dob}</p>
            <p className="student-status">
              Status: {isOnTrack(student) ? "On Track" : "Off Track"}
            </p>
          </div>

          <button
            className="additional-info"
            onClick={() => toggleDetails(student.id)}
          >
            {expandedDetails[student.id] ? "Hide Details" : "Show More"}
          </button>
          {expandedDetails[student.id] && (
            <>
              <div className="additional-details">
                <div className="codewars">
                  <h3>CodeWars</h3>
                  <p>Current Total: {student.codewars.current.total}</p>
                  <p>Last Week : {student.codewars.current.lastWeek}</p>
                  <p>Goal: {student.codewars.goal.total}</p>
                </div>
                <div className="score">
                  <h3>Scores</h3>
                  <p>Assigments: {student.cohort.scores.assignments}%</p>
                  <p>Projects: {student.cohort.scores.projects}%</p>
                  <p>Assesments: {student.cohort.scores.assignments}%</p>
                </div>
                <div className="certification">
                  <h3>Certifications</h3>
                  <p>Resume: {student.certifications.resume ? "✅" : "❌"}</p>
                  <p>
                    LikedIn: {student.certifications.linkedin ? "✅" : "❌"}
                  </p>
                  <p>
                    Mock Interview:{" "}
                    {student.certifications.mockInterview ? "✅" : "❌"}
                  </p>
                  <p>GitHub: {student.certifications.github ? "✅" : "❌"}</p>
                </div>
              </div>
              <div className="student-details">
                <OneOnOneSection
                  notes={student.notes}
                  addNote={(name, comment) =>
                    handleAddNote(student.id, name, comment)
                  }
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default StudentList;
