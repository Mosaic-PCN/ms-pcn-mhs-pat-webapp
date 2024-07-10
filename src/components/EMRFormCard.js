import React from 'react';
import './StakeholdersFormCard.css';

const EMRCard = ({ title, children }) => {
    return (
        <div className="stakeholdercard">
            <h2 className="stakeholder-card-title">{title}</h2>
            {children}
        </div>
    );
};

export default EMRCard;