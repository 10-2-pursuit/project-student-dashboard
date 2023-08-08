import React from "react";
import { useState } from "react";
import students from "./data/data.json"
import StudentCard from "./components/StudentCard";
import StudentList from "./components/StudentList";

function App() {

console.log(students)

  return (
    <div>
      <header>Student Dashboard</header>
      <StudentList students={students}/>
    </div>
  );
}

export default App;
