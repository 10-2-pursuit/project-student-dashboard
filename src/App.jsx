import StudentList from "./components/StudentList";
import data from './data/data.json';
import CohortList from "./components/CohortList";
import { useEffect, useState } from "react";
import Header from "./components/Header";

function App() {
  const [cohortList, setCohortList] = useState(cohortListGenerator());
  const [studentList, setStudentList] = useState(data);
  const [darkmode, setDarkmode] = useState(false);
  const [comments, setComments] = useState({});

  useEffect(()=> {
      const tempComments = {};
      for(let i = 0; i < studentList.length; i++){
        tempComments[data[i].id] = [];
      }
      setComments(tempComments)
    },[]
  );

  console.log(comments);

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
    <div className={"app" + ' ' + (darkmode ? "dark" : null)}>
      <Header cohortList={ cohortList } setStudentList={ setStudentList } data={data} darkmode={ darkmode } setDarkmode={ setDarkmode }/>
      <main>
        <p>Total students: {studentList.length}</p>
        <StudentList studentList={ studentList } darkmode={ darkmode } comments={ comments } setComments={ setComments }/>
      </main>
    </div>
  );
}

export default App;
