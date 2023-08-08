import studentsData from "./data/data.json";
import CohortList from "./components/cohortList";
import StudentList from "./components/studentList";
import StudentListItem from "./components/StudentListItem";
import { useState } from "react";
import "/App.css"


console.log(studentsData);

function App() {

  const [students, setStudents] = useState(studentsData)

  return (
    <div className="pageLayout">
      <header>Student Dashboard</header>
      <CohortList />
      <StudentList students={students}/>
    </div>
  );
}

export default App;
