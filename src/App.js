import Homepage from './components/Homepage';
import { Navbar } from './components/Navbar';
import './App.css';


import axios from 'axios'
import React, {useState, useEffect} from 'react';
import ParticleBackground from './components/ParticleBackground';

function App() {
const [items, setItems] = useState([]);
const [isLoading, setIsLoading] = useState(true);


  return (
    <div className="App">
      <Navbar />
      <ParticleBackground />
      <Homepage />
      
  
     
    </div>
  );
}



export default App;
