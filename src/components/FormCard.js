import React from 'react';
import './FormCard.css';

const Card = ({ title, children }) => {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            {children}
        </div>
    );
};

export default Card;