import React from "react";
import { useState } from "react";
import students from "./data/data.json"
import StudentList from "./components/StudentList";
import ClassOfStudents from "./components/ClassOfStudents";

function App() {
console.log(<ClassOfStudents />)
  return (
    <div>
      <header>Student Dashboard</header>
      <StudentList students={students}/>
      <ClassOfStudents  />
    </div>
  );
}

export default App;
