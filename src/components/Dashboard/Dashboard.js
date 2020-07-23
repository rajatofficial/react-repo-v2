import React, { Component } from 'react';
import './styles.css';
class Dashboard extends Component {

    homeHandler = () => {
        window.location.href = "/home";
    }

    render() {
        return (
            <div>
                <div className="logout extra content">
                    <div>
                        <div className="ui basic red button" onClick={this.homeHandler}> Home </div>
                    </div>
                </div>
                <h2> Welcome To Dashboard </h2>
                <dashboard-component userid={localStorage.getItem("id")}>{localStorage.getItem("id")}</dashboard-component>
            </div>
        )
    }
}

export default Dashboard;