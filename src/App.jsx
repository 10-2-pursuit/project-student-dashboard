import Header from "./Components/Header";
import Students from "./Components/Students";
import Years from "./Components/Years";
import { useState } from "react";
import studentsData from "./data/data.json"




function App() {

  const [Cohort, setCohort] = useState("All Students")
  const [studentNotes, setStudentNotes] = useState({})


  const handleUpdateStudentNotes = (newNotes) => {
    setStudentNotes(newNotes)
 
  }

  const handleUpdateCohort = (newCohort) => {
    setCohort(newCohort)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    let thisStudentNotes = {}

    if(studentNotes[e.target.studentId.value]){
      console.log("yeah")
      thisStudentNotes = {
        [e.target.studentId.value]: 
          [
            ...studentNotes[e.target.studentId.value],
            [e.target.commenterName.value, e.target.comment.value]
          ]
          
      }
    }  else {
      console.log("nah")
      thisStudentNotes = {
        [e.target.studentId.value]: 
          [
            [e.target.commenterName.value, e.target.comment.value]
          ]
          
      }
    }


    // console.log(thisStudentNotes)
    handleUpdateStudentNotes(thisStudentNotes)
  }

  

  return (
  <>
    <Header/>
    <Years studentsData={studentsData}/>
    <Students 
      studentsData={studentsData} 
      selectedCohort={Cohort} 
      handleFormSubmit={handleFormSubmit}
      updateStudentNotes={handleUpdateStudentNotes}
      />
  </>
  );
}

export default App;
