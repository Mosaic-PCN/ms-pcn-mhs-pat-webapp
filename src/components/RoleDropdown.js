import React, { useContext } from 'react';
import Select from 'react-select';
import { AppContext } from '../AppContext';
import './SelectDropdown.css';

const RoleDropdown = ({ label, id, name, options, required, value, onChange }) => {
    const { formData, updateFormData } = useContext(AppContext);

    // Find the selected option from formData
    const initialValue = options.find(option => option.value === formData[name]) || { value: '', label: 'Choose' }; // Default to 0 if not found or null

    const handleSelectChange = (selectedOption) => {
        updateFormData({ [name]: selectedOption?.value }); // Update with selected value
    };

    return (
        <div className="form-group standard-width">
            <label htmlFor={id}>{label}</label>
            <Select
                id={id}
                name={name}
                value={value}
                options={options}
                className="react-select-container"
                classNamePrefix="react-select"
                isSearchable
                placeholder="Choose..."
                isClearable
                required={required}
                onChange={handleSelectChange}
            />
        </div>
    );
};

export default RoleDropdown;
