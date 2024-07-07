import React from 'react';
import './Card.css';

const Card = ({ title, content, children }) => {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            {/* <p className="card-content">{content}</p> */}
            {children}
        </div>
    );
};

export default Card;