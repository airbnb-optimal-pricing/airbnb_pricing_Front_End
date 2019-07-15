import React from 'react';
import { connect } from 'react-redux';
import { LogIn } from '../../Actions/index';

import { Link } from 'react-router-dom';

import NavBar from '../Navbar';
import FullInputs from '../HomeInputs';
import Carousel from '../Carousel';

//styled-components

import styled from 'styled-components';

const StyledTopBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 5%;
    margin-right: 5%;
`;

const StyledCarouselDiv = styled.div`
    display: flex;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 5%;
    margin-bottom: 5%;
    width: 100%;
`;

//component

class LoginPage extends React.Component {
    state = {
        auth: {
            username: '',
            password: '',
        }
    };

    handleChanges = event => {
        this.setState({
            auth: {
                ...this.state.auth,
                [event.target.name]: event.target.value
            }
        });
    };

    login = event => {
        event.preventDefault();
        // check auth for proper info
        console.log(this.state.auth);
        this.props.LogIn(this.state.auth).then(() => {
            this.props.history.push('/');
        })
    }


    render() {
        return (
            <div style={{height: "100%", background: 'linear-gradient(to bottom, #ffafbd , #ffc3a0)'}} >
                <NavBar />
                <StyledTopBar>
                    <h1>Welcome to AirBnB Price Navigator</h1>
                    <h3>Know the value of your property</h3>
                    <h3>Enter your information below:</h3>
                </StyledTopBar>
                <FullInputs />
                <br/>
                <StyledCarouselDiv>
                    <Carousel />
                </StyledCarouselDiv>
                <br/>
                </div>
        )};
}


const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn
});


export default connect(mapStateToProps, { LogIn })(LoginPage);