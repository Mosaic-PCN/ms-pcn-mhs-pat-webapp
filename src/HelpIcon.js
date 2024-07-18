import React, { useState, useRef, useEffect } from 'react';
import './HelpIcon.css';

const HelpIcon = ({ explanation }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const tooltipRef = useRef(null);

    const handleIconClick = () => {
        setShowTooltip(!showTooltip);
    };

    const handleClickOutside = (event) => {
        if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
            setShowTooltip(false);
        }
    };

    useEffect(() => {
        if (showTooltip) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showTooltip]);

    return (
        <div className="help-icon-container">
            <span className="help-icon" onClick={handleIconClick}>?</span>
            {showTooltip && (
                <div className="tooltip" ref={tooltipRef}>
                    {explanation}
                </div>
            )}
        </div>
    );
};

export default HelpIcon;