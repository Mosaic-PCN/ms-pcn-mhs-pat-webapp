import React from 'react';
import './PCCFormCard.css';

const PCCCard = ({ title, children }) => {
    return (
        <div className="pcccard">
            <h2 className="pcc-card-title">{title}</h2>
            {children}
        </div>
    );
};

export default PCCCard;