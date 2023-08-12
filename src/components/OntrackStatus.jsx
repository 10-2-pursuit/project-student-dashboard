import React from "react";

const OnTrackStatus = ({ students }) => {
  const isOnTrack = (student) => {
    const {
      certifications,
      codewars: { current },
    } = student;

    return (
      certifications.resume &&
      certifications.linkedin &&
      certifications.github &&
      certifications.mockInterview &&
      current.total > 600
    );
  };

  return (
    <div className="on-track-status">
      <h2>On-Track Status</h2>
      {students.map((student) => (
        <div
          className={`status-card ${isOnTrack(student) ? "on-track" : "off-track"}`}
          key={student.id}
        >
          <img
            src={student.profilePhoto}
            alt={`${student.names.preferredName}'s profile`}
            className="student-photo"
          />
          <h3 className="student-name">
            {student.names.preferredName} {student.names.surname}
          </h3>
          <p className="status">
            Status: {isOnTrack(student) ? "On Track" : "Off Track"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default OnTrackStatus;
