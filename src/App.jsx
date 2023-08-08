import React from "react";
import "./index.css";
import data from './data/data.json';
import StudentList from "./components/StudentList";


function App() {
  return (
    <div>className="app"
      <header className="app-header">Student Dashboard</header>
      <mmain className= "app-main">
        <StudentList />
      </mmain>
    </div>
  );
}

export default App;
