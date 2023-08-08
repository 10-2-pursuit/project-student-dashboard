import studentsData from "./data/data.json";
import CohortList from "./components/cohortList";
import StudentList from "./components/studentList";
import StudentListItem from "./components/StudentListItem";
import { useState } from "react";


console.log(studentsData);

function App() {

  const [students, setStudents] = useState(studentsData)

  return (
    <div>
      <h1>Student Dashboard</h1>
      <CohortList />
      <StudentList students={students}/>
    </div>
  );
}

export default App;
