import studentsData from "./data/data.json";
import CohortList from "./components/CohortList";
import StudentList from "./components/StudentList";
import { useState } from "react";
import "/App.css";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [cohorts, setCohorts] = useState(["All Students"]);
  const [tempCohort, setTempCohort] = useState([...students]);
  const [listTitle, setListTitle] = useState("All Students");

  students.forEach((cohort) => {
    if (
      !cohorts.find((cohortSeason) => cohortSeason === cohort.cohort.cohortCode)
    ) {
      cohorts.push(cohort.cohort.cohortCode);
    }
  });

  function filteredCohorts([cohort]) {
    if (cohort) {
      const filteredList = students.filter(
        (student) => student.cohort.cohortCode === cohort
      );
      setTempCohort([...filteredList]);
      setListTitle(cohort);
      console.log(cohort);
    }
    if (cohort === "All Students") {
      setTempCohort([...students]);
      setListTitle("All Students");
    }
  }

  cohorts.sort();

  return (
    <div className="pageLayout">
      <header>Student Dashboard</header>
      <CohortList cohorts={cohorts} filteredCohorts={filteredCohorts} />
      <StudentList
        tempCohort={tempCohort}
        students={students}
        listTitle={listTitle}
      />
    </div>
  );
}

export default App;
