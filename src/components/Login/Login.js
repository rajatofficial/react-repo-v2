import React from 'react';
import Home from '../Home/Home';
import UserContext, { UserProvider } from '../../containers/UserContext';
import "./Login.css";


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Username: "",
            Password: "",
            loggedIn: false,
            users: [{ id:1, username: "Leanne", password: "leanne123" }, { id:2, username: "Ervin", password: "ervin123" }]
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            ...this.state, Username: event.target.value
        });
    }

    handlePasswordChange = (event) => {
        this.setState({
            ...this.state, Password: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const usr = this.state.users.filter((e) => { return e.username === this.state.Username && e.password === this.state.Password });
        if (usr.length > 0) {
            localStorage.setItem("id", usr[0].id);
            this.setState({ loggedIn: true });
        } else {
            alert("Invalid Credentials!");
        }
    }

    render() {
        var redirect = null;
        if (this.state.loggedIn) {
            return (
                <div>
                    <UserProvider value={this.state.Username}>
                        {this.context}
                        <Home/>
                    </UserProvider>
                </div>
            )
        }

        return (
            <div className="styleDiv">
                {redirect}
                <div className="innerDivs">
                <center>

                    <h2>Login</h2>
                </center>
                    <form onSubmit={this.handleSubmit} className="ui form">
                        <div className="field">
                            <label>Username</label>
                            <input type="text" onChange={this.handleUsernameChange} name="username" value={this.state.Username} placeholder="UserName" />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input type="password" onChange={this.handlePasswordChange} name="password" value={this.state.Password} placeholder="Password" />
                        </div><br />
                        <button type="submit" className="ui button">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

Login.contextType = UserContext;
export default Login;
