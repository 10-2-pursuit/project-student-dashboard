import studentsData from "./data/data.json";
import CohortList from "./components/cohortList";
import StudentList from "./components/studentList";
import { useState } from "react";
import "/App.css";

console.log(studentsData);

function App() {

  const [students, setStudents] = useState(studentsData);
  const [cohorts, setCohorts] = useState([]);

  function filterCohorts(students) {
    students.filter((student) => student.cohort.cohortCode)
  }


  return (
    <div className="pageLayout">
      <header>Student Dashboard</header>
      <CohortList cohorts={cohorts} students={students}/>
      <StudentList students={students} />
    </div>
  );
}

export default App;
