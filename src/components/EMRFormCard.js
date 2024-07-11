import React from 'react';
import './EMRFormCard.css';

const EMRCard = ({ title, children }) => {
    return (
        <div className="emrcard">
            <h2 className="emr-card-title">{title}</h2>
            {children}
        </div>
    );
};

export default EMRCard;