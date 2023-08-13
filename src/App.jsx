import StudentList from "./components/StudentList";
import data from './data/data.json';
import { useEffect, useState } from "react";
import Header from "./components/Header";

/**
 * app()
 * --------------------------------------------
 * a basic component to start. All other components will be rendered in here.
 * 
 */
function App() {
  /** 
   * cohortList is used to filter students by their cohort code 
   * studentList is used to render each student card, and initialized by data.json
   * darkmode is a boolean state to toggle dark/light mode
   * comments will store 1on1 comments for each student */
  const [cohortList, setCohortList] = useState(cohortListGenerator());
  const [studentList, setStudentList] = useState(data);
  const [darkmode, setDarkmode] = useState(false);
  const [comments, setComments] = useState({});

  /** initialize comments w/ student id 
   * comments = {[`${student id}`]:[[commenter1, comment1],[commenter2, comment2],...]}
   */
  useEffect(()=> {
      const tempComments = {};
      for(let i = 0; i < studentList.length; i++){
        tempComments[data[i].id] = [];
      }
      setComments(tempComments)
    },[]
  );

  /**
   * cohortListGenerator()
   * -----------------------------
   * initializer for cohortList. It will collect each cohortcode once, and store to an array.
   * 
   * @returns (string[]) - return array of strings that filled w/ cohortcodes
   */
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
        <div className="left_container">
          <p><span className="total_student_number">Total number of students: {studentList.length}</span></p>
        </div>
        <div className="main_container">
          <StudentList studentList={ studentList } darkmode={ darkmode } comments={ comments } setComments={ setComments }/>
        </div> 
      </main>
    </div>
  );
}

export default App;
