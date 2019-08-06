import React from 'react';

import { Redirect } from 'react-router-dom';

//components

import NavBar from '../Components/Navbar';
import FullInputs from '../Components/LoggedIn';
import StaticCarousel from '../Components/Carousel';




class Home extends React.Component {
    state={
    }
    
    render() {
        if (localStorage.getItem('token'))
            return (
                <div style={{background: 'linear-gradient(to bottom, #bdc3c7 , #2c3e50)'}}>
                    <NavBar />
                    <FullInputs />
                    <StaticCarousel />
                </div>
                );
       else 
        return ( 
                <Redirect to='/' />
        );
    }
}

export default Home;