import React from "react";

const StudentCard = ({data, showStudent}) => {
    const FirstName = data.names.preferredName;
    const MiddleInitial = data.names.middleName.charAt(0);
    const LastName = data.names.surname;
     const Username = data.username;
    const Birthday = data.dob.toString();
     const ProfilePhoto = data.profilePhoto;
    return (
        <div className="student-card">
            <h3>{(FirstName) + " " + (MiddleInitial) + ". " + (LastName)}</h3>
            <p>{ Username }</p>
            <p> Birthday: { Birthday } </p>
        </div>
    );
}


export default StudentCard;