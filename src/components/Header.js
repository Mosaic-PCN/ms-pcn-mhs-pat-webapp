import React from 'react';
import './Header.css';

const Header = ({ signOut, user }) => {
    return (
        <header className="header">
            <div className="left-section">
                <img src={"/pcn.jpeg"} alt="PCN Logo" className="logo" />
                <h1 className="title">MHS-PAT</h1>
            </div>
            <div className="right-section">
                <button className="sign-out-btn" onClick={signOut}>Sign Out</button>
                {user && <p className="username">Username: {user.username}</p>}
            </div>
        </header>
    );
};

export default Header;