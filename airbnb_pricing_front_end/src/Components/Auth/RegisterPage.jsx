import React from 'react';
import { connect } from 'react-redux';
import { Register } from '../../Actions/index';
import { Link } from 'react-router-dom';

import NavBar from '../Navbar';



class RegisterPage extends React.Component {
    state = {
        regauth: {
            username: '',
            password: '',
        }
    }

    handleChanges = event => {
        this.setState({
            regauth: {
                ...this.state.regauth,
                [event.target.name]: event.target.value
                }
            })
        }

    register = event => {
        event.preventDefault();
        //register action
        console.log('registering:')
        console.log(this.state.regauth);

        this.props.Register(this.state.regauth).then( () => {
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
            <div className="register-container">
                <div className="register-inner-container">
                <h3> Register </h3>
                <form className="register-form" onSubmit={this.register}>

                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={this.handleChanges}
                        value={this.state.regauth.username}
                    />
                     <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChanges}
                        value={this.state.regauth.password}
                    />
                    <button> Submit </button>
                    <h4> Already a member? Log in <Link to="/login"> here </Link></h4>
                </form>
                </div>
            </div>
        </div>
    )};
}

const mapStateToProps = state => ({
    isRegistering : state.isRegistering
});

export default connect(mapStateToProps, { Register })(RegisterPage);