import React from 'react';
import Select from 'react-select';

const TimeDropdown = ({ label, id, name, required }) => {
    // Generate options from 5 minutes to 6 hours in 5-minute increments
    const options = [];
    for (let i = 5; i <= 360; i += 5) {
        const hours = Math.floor(i / 60);
        const minutes = i % 60;
        const label = hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''} ${minutes > 0 ? `${minutes} minutes` : ''}` : `${minutes} minutes`;
        options.push({ value: i, label: label.trim() });
    }

    return (
        <div className="form-group standard-width">
            <label htmlFor={id}>{label}</label>
            <Select
                id={id}
                name={name}
                options={options}
                className="react-select-container"
                classNamePrefix="react-select"
                isSearchable
                placeholder="Choose..."
                isClearable
                required={required}
            />
        </div>
    );
};

export default TimeDropdown;