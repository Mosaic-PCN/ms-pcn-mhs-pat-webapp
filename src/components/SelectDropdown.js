import React from 'react';
import './SelectDropdown.css';

const SelectDropdown = ({ label, id, name, options, required }) => {
    return (
        <div className="form-group standard-width">
            <label htmlFor={id}>{label}</label>
            <select className="form-control" id={id} name={name} required={required}>
                <option value="">Choose...</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectDropdown;