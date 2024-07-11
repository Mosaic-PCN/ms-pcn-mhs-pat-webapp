import React from 'react';
import Select from 'react-select';
import './Dropdown.css';
import { generateTimeOptions } from '../utils';


const CustomDropdown = ({ label, id, name, required, place_holder }) => {
    const options = generateTimeOptions();

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
                placeholder={place_holder}
                isClearable
                required={required}
            />
        </div>
    );
};

export default CustomDropdown;