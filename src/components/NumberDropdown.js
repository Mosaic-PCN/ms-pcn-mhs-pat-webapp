import React from 'react';
import Select from 'react-select';

const NumberDropdown = ({ label, id, name, required, max }) => {
    const options = [];
    for (let i = 0; i <= max; i++) {
        options.push({ value: i, label: i.toString() });
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
                placeholder="Counts"
                isClearable
                required={required}
            />
        </div>
    );
};

export default NumberDropdown;