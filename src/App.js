import Homepage from './componants/Homepage';
import { Navbar } from './componants/Navbar';
import './App.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react';

function App() {
const [items, setItems] = useState([]);
const [isLoading, setIsLoading] = useState(true);


  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
