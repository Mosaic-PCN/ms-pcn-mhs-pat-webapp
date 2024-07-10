import React from 'react';
import './FormCardStakeholders.css';

const StakeholdersCard = ({ title, children }) => {
    return (
        <div className="stakeholdercard">
            <h2 className="card-title">{title}</h2>
            {children}
        </div>
    );
};

export default StakeholdersCard;