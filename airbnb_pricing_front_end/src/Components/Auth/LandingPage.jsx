import React from 'react';
import { connect } from 'react-redux';

import { LogIn } from '../../Actions/index';
import NavBar from '../Navbar';
import FullInputs from '../HomeInputs';

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
        console.log(this.state.auth);  // No console
        this.props.LogIn(this.state.auth).then(() => {
            this.props.history.push('/');
        })
    }


    render() {
        return (
            <div className="landing-page" >
                <NavBar />
                <div className="Styled-Top-Bar">
                    <h1>Welcome to AirBnB Price Navigator</h1>
                    <h3>Know the value of your property</h3>
                </div>
                <FullInputs />
                <br/>
                <br/>
            </div>
        )};
}


const mapStateToProps = state => ({
    isLoggingIn: state.isLoggingIn
});


export default connect(mapStateToProps, { LogIn })(LoginPage);