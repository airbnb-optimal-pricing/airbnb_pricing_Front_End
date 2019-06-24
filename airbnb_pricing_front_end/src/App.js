import React from 'react';

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
      <body>
        <BaseInputs />
      </body>
      
    </div>
  );
}

export default App;
