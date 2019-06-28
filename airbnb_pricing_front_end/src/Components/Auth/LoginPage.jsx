import React from 'react';
import { connect } from 'react-redux';
import { LogIn } from '../../Actions/index';

import { Link } from 'react-router-dom';

import NavBar from '../Navbar';
import SimpleInputs from '../SimpleInputs';
import StaticCarousel from '../Carousel';

//styled-components

import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 10%;
`;


const StyledTopBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
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
            <div style={{height: 1000, background: 'linear-gradient(to bottom, #ff1a1a, #ff4d4d)'}} >
                <NavBar />
                <StyledTopBar>
                    <h1>Welcome to AirBnB Price Navigator</h1>
                    <h3>Know the value of your property by entering your information below:</h3>
                </StyledTopBar>
                <SimpleInputs />
                <div className="login-container">
                    <StyledDiv>
                    <h3> Login to see if you can make even more!</h3> 
                    <form className="login-form" onSubmit={this.login}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={this.handleChanges}
                            value={this.state.auth.username}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            
                            onChange={this.handleChanges}
                            value={this.state.auth.password}
                        />
                        <button> Submit </button>
                        <h4> Not a member? Sign up <Link to="/register"> here </Link></h4>
                        </form>
                    </StyledDiv>
                     {/* <StaticCarousel /> */}
                </div>
            </div>
        )};
}


const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn
});


export default connect(mapStateToProps, { LogIn })(LoginPage);