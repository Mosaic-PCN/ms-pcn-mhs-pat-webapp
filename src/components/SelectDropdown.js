import React, { useContext } from 'react';
import Select from 'react-select';
import { AppContext } from '../AppContext'; // Import the context
import './SelectDropdown.css';

const SelectDropdown = ({ label, id, name, options, required, onChange }) => {
    const { formData, updateFormData } = useContext(AppContext); // Access context

    const handleSelectChange = (selectedOption) => {
        updateFormData({ [name]: selectedOption?.value || null }); // Update formData
        onChange(selectedOption); // Call the original onChange if needed
    };

    return (
        <div className="form-group standard-width">
            <label htmlFor={id}>{label}</label>
            <Select
                id={id}
                name={name}
                value={options.find(option => option.value === formData[name])} // Find the selected option from formData
                options={options}
                className="react-select-container"
                classNamePrefix="react-select"
                isSearchable
                placeholder="Choose..."
                isClearable
                required={required}
                onChange={handleSelectChange} // Use the updated handler
            />
        </div>
    );
};

export default SelectDropdown;
