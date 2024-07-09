// src/components/SelectDropdown.js
import React from 'react';
import Select from 'react-select';
import './SelectDropdown.css';

const SelectDropdown = ({ label, id, name, options, required }) => {
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

export default SelectDropdown;