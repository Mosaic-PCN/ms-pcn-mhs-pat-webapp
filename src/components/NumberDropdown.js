import Select from 'react-select';
import React, { useContext } from 'react';
import { AppContext } from '../AppContext';


const NumberDropdown = ({ label, id, name, onChange, value, required, max, place_holder }) => {
    const { formData, updateFormData } = useContext(AppContext); // Access context

    const options = [];
    for (let i = 0; i <= max; i++) {
        options.push({ value: i, label: i.toString() });
    }

    const handleChange = (selectedOption) => {
        updateFormData({ [name]: selectedOption?.value || null }); // Update formData
        onChange(selectedOption);
    };

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

export default NumberDropdown;