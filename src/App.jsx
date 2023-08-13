import studentsData from "./data/data.json";
import CohortList from "./components/cohortList";
import StudentList from "./components/studentList";
import { useState } from "react";
import "/App.css";


function App() {
  const [students, setStudents] = useState(studentsData);
  const [cohorts, setCohorts] = useState(["All Students"]);
  const [tempCohort, setTempCohort] = useState([...students])
  const [showMore, setShowMore] = useState(false);
  const [createNotes, setCreateNotes] = useState("");
  const [showNotes, setShowNotes] = useState(false);

 students.forEach((cohort) => {
    if (
      !cohorts.find((cohortSeason) => cohortSeason === cohort.cohort.cohortCode)
    ) {
      cohorts.push(cohort.cohort.cohortCode);
    }
  });

  console.log(tempCohort)




  function filteredCohorts([cohort]) {
    if(cohort) {
      const filteredList = students.filter((student) => 
        student.cohort.cohortCode === cohort
      )
      setTempCohort([...filteredList])
    }
    if (cohort === "All Students"){
      setTempCohort([...students])
    }
   }

  cohorts.sort();

  function handleTextChange(e) {
    
  }

  function toggleShowNotes() {
    setShowNotes(!showNotes)
  }

  function toggleShowMore() {
    setShowMore(!showMore);
  }

  return (
    <div className="pageLayout">
      <header>Student Dashboard</header>
      <CohortList
        cohorts={cohorts}
        setCohorts={setCohorts}
        students={students}
        filteredCohorts={filteredCohorts}
        />
      <StudentList
        tempCohort={tempCohort}
        students={students}
        toggleShowMore={toggleShowMore}
        showMore={showMore}
        setShowMore={setShowMore}
        showNotes={showNotes}
        setShowNotes={setShowNotes}
        toggleShowNotes={toggleShowNotes}
        createNotes={createNotes}
        setCreateNotes={setCreateNotes}
      />
    </div>
  );
}

export default App;
