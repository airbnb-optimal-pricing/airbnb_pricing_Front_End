import React from 'react';


class Logout extends React.Component {
    state= {}

    logoutHandler = event => {
        event.preventDefault();
        localStorage.clear();
        window.location.reload();
    }

    render() {
        return (
            <div className="logoutbar"> 
            <button className="logout-btn" onClick={this.logoutHandler}>Logout</button>
            </div>
            
        )
    };
}

export default Logout;