import React from 'react';
import { data } from './data/data.json'
import { useState } from "react";
import OnTrack from '../Components/Ontrack';


function App() {
const [students, setStudent] = useState([])
const [onTrack, setOnTrack] = useState([])
  return (
    <div>
      <h1>Student Dashboard</h1>
      <Student />

    </div>
  );
}

export default App;
