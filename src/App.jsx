import StudentList from "./components/StudentList";
import data from './data/data.json';
import CohortList from "./components/CohortList";
import { useEffect, useState } from "react";

function App() {
  const [cohortList, setCohortList] = useState(cohortListGenerator());
  const [studentList, setStudentList] = useState(data);

  useEffect(()=>undefined,[studentList]);

  function resetStudentList(){
    setStudentList(data);
  }

  function cohortListGenerator(){
    let cohortList = [];
    cohortList.push("all");
    data.forEach((student)=>{
      if(!cohortList.find((elem) => elem == student.cohort.cohortCode)){
        cohortList.push(student.cohort.cohortCode);
      }
    });
    return cohortList;
  }

  return (
    <div>
      <h1>Student Dashboard</h1>
      <CohortList cohortList={ cohortList } studentList={ studentList } setStudentList={ setStudentList } resetStudentList={ resetStudentList }/>
      <StudentList studentList={ studentList }/>
    </div>
  );
}

export default App;
