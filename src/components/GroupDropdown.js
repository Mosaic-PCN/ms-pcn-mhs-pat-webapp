import React, { useState } from 'react';
import './DropdownGroup.css'; // Import your CSS file for styling

const DropdownGroup = ({ groupLabel, onSelect1, onSelect2, onSelect3, value1, value2, value3 }) => {

    return (
        <div className="dropdown-group">
            {/* Group Label */}
            <div className="group-label">{groupLabel}</div>

            {/* Container for Dropdowns and Labels */}
            <div className="dropdown-container">

                {/* Dropdown 1 */}
                <div className="dropdown-item">
                    <label htmlFor="dropdown1">{label1}</label>
                    <select id="dropdown1" value={value1} onChange={onSelect1}>
                        {options1.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>

                {/* Dropdown 2 */}
                <div className="dropdown-item">
                    <label htmlFor="dropdown2">{label2}</label>
                    <select id="dropdown2" value={value2} onChange={onSelect2}>
                        {options2.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>

                {/* Dropdown 3 */}
                <div className="dropdown-item">
                    <label htmlFor="dropdown3">{label3}</label>
                    <select id="dropdown3" value={value3} onChange={onSelect3}>
                        {options3.map((option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </div>

            </div>
        </div>
    );
};

export default DropdownGroup;
