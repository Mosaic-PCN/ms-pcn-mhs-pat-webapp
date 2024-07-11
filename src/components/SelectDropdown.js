import React from 'react';
import Select from 'react-select';
import './SelectDropdown.css';

const SelectDropdown = ({ label, id, name, options, required, onChange }) => {
    return (
        <div className="form-group standard-width">
            <label htmlFor={id}>{label}</label>
            <Select
                id={id}
                name={name}
                options={options} // Correctly pass the options array
                className="react-select-container"
                classNamePrefix="react-select"
                isSearchable
                placeholder="Choose..."
                isClearable
                required={required}
                onChange={(selectedOption) => onChange(selectedOption)} // Capture the selected option
            />
        </div>
    );
};

export default SelectDropdown;