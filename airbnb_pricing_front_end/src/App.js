import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//components
import NavBar from './Components/Navbar';
import BaseInputs from './Components/BaseInputs';





import './App.css';

function App() {

  return (
    <div>
       <NavBar />
      <header className="App-header"> 
        <h1>Hero Title</h1>
        <h2>Subheader</h2>
      </header>
      <div>
        <BaseInputs />
      </div>
    </div>
  );
}

export default App;
