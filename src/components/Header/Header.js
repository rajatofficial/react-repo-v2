import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
        <img className="logo" src={process.env.PUBLIC_URL + '/coxLogo.png'} /><br/>
            <h1>ECommerce Portal</h1>
        </header>
    )
}

export default Header;