import Header from "./Components/Header";
import Students from "./Components/Students";
import Years from "./Components/Years";
import { useState } from "react";
import studentsData from "./data/data.json"




function App() {

  const [Cohort, setCohort] = useState("All Students")
  const [StudentNotes, setStudentNotes] = useState({})


  const updateStudentNotes = (newNotes) => {
    setStudentNotes(newNotes)
  }

  const updateCohort = (newCohort) => {
    setCohort(newCohort)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(e)

    // const newStudentNotes = {...StudentNotes, }
  }

  

  return (
  <>
    <Header/>
    <Years studentsData={studentsData}/>
    <Students 
      studentsData={studentsData} 
      selectedCohort={Cohort} 
      handleFormSubmit={handleFormSubmit}/>
  </>
  );
}

export default App;
