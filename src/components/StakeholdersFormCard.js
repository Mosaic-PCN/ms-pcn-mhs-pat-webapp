import React from 'react';
import './StakeholdersFormCard.css';

const StakeholdersCard = ({ title, children }) => {
    return (
        <div className="stakeholders-card">
            <h2 className="stakeholders-card-title">{title}</h2>
            {children}
        </div>
    );
};

export default StakeholdersCard;