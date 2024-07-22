import React from 'react';
import './Box.css';

const Box = ({ title, children, className }) => {
    return (
        <div className={`box ${className}`}>
            <h2 className="box-title">{title}</h2>
            <div className="box-content">
                {children}
            </div>
        </div>
    );
};

export default Box;