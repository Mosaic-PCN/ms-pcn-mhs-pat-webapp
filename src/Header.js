
import React from 'react';
import './Header.css';  // Make sure you create a CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <img src={process.env.PUBLIC_URL + '/pcn.jpeg'} alt="Company Logo" className="logo" />
            <div className="banner-text">
                <h1 className="text">MHS - PAT</h1>
            </div>
        </header>
    );
};

export default Header;