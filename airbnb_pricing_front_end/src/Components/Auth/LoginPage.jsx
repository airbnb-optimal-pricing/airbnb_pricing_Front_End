import React from 'react';
import { connect } from 'react-redux';
import { LogIn } from '../../Actions/index';

import { Link } from 'react-router-dom';

import NavBar from '../Navbar';
import SimpleInputs from '../SimpleInputs';
import StaticCarousel from '../Carousel';



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
            <div>
                <NavBar />
            <div className="topbar">
                <p>AirBnB Price Navigator</p> 
            </div>
            <SimpleInputs />
            <div className="login-container">
                <div className="login-inner-container">
                <h3> Login </h3> 
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
                <StaticCarousel />
            </div>
        </div>
        </div>
        )};
}


const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn
});


export default connect(mapStateToProps, { LogIn })(LoginPage);