import React from 'react';
import './PFFormCard.css';

const PFCard = ({ title, children }) => {
    return (
        <div className="pf-card">
            <h2 className="pf-card-title">{title}</h2>
            {children}
        </div>
    );
};

export default PFCard;