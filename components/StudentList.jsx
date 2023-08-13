import React from "react";
import StudentCard from "./StudentCard";

//  const StudentList = ({data}) => {
//     <div className="students"></div>
//  }
import { useState } from "react";
export default function StudentList({ data, showStudents }) {
  const [selectedStudent, setSelectedStudent] = useState(-1);
  return (
    <ul>
      {showStudents.map((student, index) => {
        return (
          <StudentCard
            index={index}
            setSelectedStudent={setSelectedStudent}
            student={student}
          />
        );
      })}
    </ul>
  );
}
//  {showStudents.map((student,index) => {
//     if(index !=selectedStudent){
//     return <StudentCard index={index} setSelectedStudent={setSelectedStudent}  student={student}/>
//     }else{
//         return <h1>Expanded student</h1>
//     return <StudentDetails details={student}/>
//     }
//  })}

// setSelectedStudent={setSelectedStudent} ** AFTER THE RETURN FOR STUDENTCARD
