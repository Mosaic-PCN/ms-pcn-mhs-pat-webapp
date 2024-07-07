import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <img src={`${process.env.PUBLIC_URL}/pcn.jpeg`} alt="Company Logo" className="logo" />
            <h1 className="title">Welcome to the MHS-PAT!</h1>
        </header>
    );
};

export default Header;