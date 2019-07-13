import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import Home from './Views/Home';
// import PrivateRoute from './PrivateRoute';
import LoginPage from './Components/Auth/LoginPage';
import RegisterPage from './Components/Auth/RegisterPage';

//style
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
      </div>
        <Route exact path="/" component={LoginPage} />
    </Router>
  );
}

export default App;
