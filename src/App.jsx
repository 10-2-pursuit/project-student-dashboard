import Header from "./Components/Header";
import Students from "./Components/Students";
import Years from "./Components/Years";
import studentsData from "./data/data.json"

// let data = require("./data/data.json")



function App() {

 

  return (
  <>
    <Header/>
    <Years studentsData={studentsData}/>
    <Students/>
  </>
  );
}

export default App;
