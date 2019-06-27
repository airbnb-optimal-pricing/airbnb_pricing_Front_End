import React from 'react';

import { Redirect } from 'react-router-dom';

//components

import NavBar from '../Components/Navbar';
import FullInputs from '../Components/LoggedIn';
import Logout from '../Components/Auth/Logout';
import StaticCarousel from '../Components/Carousel';




class Home extends React.Component {
    state={
    }
    
    render() {
        if (localStorage.getItem('token'))
            return (
                <div>
                    <NavBar />
                    <FullInputs />
                    <Logout />
                    <StaticCarousel />
                </div>
                );
       else 
        return ( 
                <Redirect to='/login' />
        );
    }
}

export default Home;