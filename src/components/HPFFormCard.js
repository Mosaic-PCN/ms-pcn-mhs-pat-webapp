import React from 'react';
import './AMCFormCard.css';

const HPFCard = ({ title, children }) => {
    return (
        <div className="amc-card">
            <h2 className="amc-card-title">{title}</h2>
            {children}
        </div>
    );
};

export default HPFCard;