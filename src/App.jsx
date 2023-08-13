import Header from "./Components/Header";
import Students from "./Components/Students";
import Years from "./Components/Years";
import { useState } from "react";
import studentsData from "./data/data.json"




function App() {

  const [Cohort, setCohort] = useState("All Students")
  const [studentNotes, setStudentNotes] = useState({})
  const [darkMode, setDarkMode] = useState(false)


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
      thisStudentNotes = { 
        ...studentNotes,
        [e.target.studentId.value]: 
          [
            ...studentNotes[e.target.studentId.value],
            [e.target.commenterName.value, e.target.comment.value]
          ]
          
      }
    }  else {
      thisStudentNotes = {
        ...studentNotes,
        [e.target.studentId.value]: 
          [
            [e.target.commenterName.value, e.target.comment.value]
          ]
          
      }
    }

    handleUpdateStudentNotes(thisStudentNotes)
  }

  const readableYear = (name) => {
    let isYear = name.search(/[0-9]/) == -1
    let season = name.slice(0, (name.length-4))
    let year = name.slice((name.length-4), name.length)

    return isYear ? name : `${season} ${year}`
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
  <div className={`TopLevel ${darkMode ? `DarkMode`: ``}`}>
    <Header
      toggleDarkMode={toggleDarkMode}
      />
    <Years 
      studentsData={studentsData}
      handleUpdateCohort={handleUpdateCohort}
      readableYear={readableYear}
      />
    <Students 
      studentsData={studentsData} 
      selectedCohort={Cohort} 
      studentNotes={studentNotes}
      handleFormSubmit={handleFormSubmit}
      updateStudentNotes={handleUpdateStudentNotes}
      readableYear={readableYear}
      />
  </div>
  );
}

export default App;
