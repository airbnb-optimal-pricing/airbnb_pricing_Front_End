import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavBar from './Navbar';

function FirstQuote()  {
    return (
        <div>
           <NavBar />
          <header className="App-header"> 
            <h1>This is your rough estimate</h1>
            <h2></h2>
          </header>
          <div>
          </div>
        </div>
      );
    }

    export default FirstQuote;