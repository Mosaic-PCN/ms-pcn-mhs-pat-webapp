import React from 'react';
import { Tooltip } from 'react-tooltip'; // Import the Tooltip component directly

const HelpIcon = ({ id, explanation }) => {
    return (
        <div>
            <span id={id} className="help-icon">
                ⓘ
            </span>
            <Tooltip anchorId={id} content={explanation} /> {/* Use the Tooltip component */}
        </div>
    );
};

export default HelpIcon;
