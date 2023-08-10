import studentsData from "./data/data.json";
import CohortList from "./components/cohortList";
import StudentList from "./components/studentList";
import { useState } from "react";
import "/App.css";

console.log(studentsData);

function App() {
  const [students, setStudents] = useState(studentsData);
  const [cohorts, setCohorts] = useState(["All Students"]);
  const [showMore, setShowMore] = useState(false)

 
  students.forEach((cohort) => {
    if (
      !cohorts.find((cohortSeason) => cohortSeason === cohort.cohort.cohortCode)
    ) {
      cohorts.push(cohort.cohort.cohortCode);
    }
  });

  function toggleShowMore(){
    setShowMore(!showMore)
  }

  return (
    <div className="pageLayout">
      <header>Student Dashboard</header>
      <CohortList
        cohorts={cohorts}
        setCohorts={setCohorts}
        students={students}
      />
      <StudentList students={students} toggleShowMore={toggleShowMore} showMore={showMore} setShowMore={setShowMore} />
    </div>
  );
}

export default App;
