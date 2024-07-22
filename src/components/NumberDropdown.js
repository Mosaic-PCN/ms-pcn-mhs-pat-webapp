import Select from 'react-select';
import React, { useContext } from 'react';
import './CustomDropdown.css';
import { AppContext } from '../AppContext';

const NumberDropdown = ({ label, id, name, onChange, value, required, max, place_holder }) => {
    const { formData, updateFormData } = useContext(AppContext); // Access context

    const handleChange = (selectedOption) => {
        updateFormData({ [name]: selectedOption?.value || null }); // Update formData
        if (onChange) {
            onChange(selectedOption);
        }
    };

    const options = [];
    for (let i = 0; i <= max; i++) {
        options.push({ value: i, label: i.toString() });
    }

    return (
        <div className="form-group standard-width">
            {label && <label htmlFor={id}>{label}</label>}
            <Select
                id={id}
                name={name}
                options={options}
                value={options.find(option => option.value === formData[name])} // Find the selected option from formData
                className="react-select-container"
                classNamePrefix="react-select"
                isSearchable
                placeholder={place_holder}
                isClearable
                required={required}
                onChange={handleChange}
            />
        </div>
    );
};

export default NumberDropdown;