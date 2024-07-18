import React, { useContext } from 'react';
import Select from 'react-select';
import { AppContext } from '../AppContext';
import './CustomDropdown.css';
import { generateTimeOptions } from '../utils';


const CustomDropdown = ({ label, id, name, onChange, value, required, place_holder }) => {
    const { formData, updateFormData } = useContext(AppContext); // Access context

    const handleChange = (selectedOption) => {
        updateFormData({ [name]: selectedOption?.value || null }); // Update formData
        onChange(selectedOption);
    };

    const options = generateTimeOptions();

    return (
        <div className="form-group standard-width">
            <label htmlFor={id}>{label}</label>
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

export default CustomDropdown;