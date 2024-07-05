import React from 'react';
import './Header.css';  // Make sure you create a CSS file for styling

const Header = () => {
    return (
        <header className="banner d-flex align-items-center">
            <img src={`${process.env.PUBLIC_URL}/pcn.jpeg`} alt="Company Logo" className="logo" />
            <div className="banner-text flex-grow-1">
                <h1 className="text-white mb-0">MHS - PAT</h1>
            </div>
        </header>
    );
};

export default Header;