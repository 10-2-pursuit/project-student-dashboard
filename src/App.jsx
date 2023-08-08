import StudentList from "./components/StudentList";
import data from './data/data.json';
import CohortList from "./components/CohortList";
import { useState } from "react";

function App() {
  const [cohortList, setCohortList] = useState(cohortListGenerator());
  const [studentList, setStudentList] = useState(data);

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
      <p>Total students: {studentList.length}</p>
      <CohortList cohortList={ cohortList } setStudentList={ setStudentList } data={data}/>
      <StudentList studentList={ studentList }/>
    </div>
  );
}

export default App;
