import React, { useState } from 'react';
import Select from 'react-select';
import './TripleDropdown.css';

const TripleDropdown = ({ label, id, name, required, options }) => {
    return (
        <div className="form-group standard-width">
            <label htmlFor={id}>{label}</label>
            <div className="dropdown-row">
                <Select
                    id={`${id}-dropdown1`}
                    name={`${name}-dropdown1`}
                    options={options}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    isSearchable
                    placeholder="Choose..."
                    isClearable
                />
                <Select
                    id={`${id}-dropdown2`}
                    name={`${name}-dropdown2`}
                    options={options}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    isSearchable
                    placeholder="Choose..."
                    isClearable
                />
                <Select
                    id={`${id}-dropdown3`}
                    name={`${name}-dropdown3`}
                    options={options}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    isSearchable
                    placeholder="Choose..."
                    isClearable
                />
            </div>
        </div>
    );
};

export default TripleDropdown;