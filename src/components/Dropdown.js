import React, { useEffect, useState, useContext } from 'react';
import Select from 'react-select';
import { AppContext } from '../AppContext';
import './Dropdown.css';

const Dropdown = ({ label, id, name, options, onChange, required, loadOptionsFromFile }) => {
    const [localOptions, setLocalOptions] = useState(options || []); // Start with provided options, if any
    const { formData, updateFormData } = useContext(AppContext);


    useEffect(() => {
        if (loadOptionsFromFile) {
            fetch('/clinic-options.txt')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(data => {
                    const parsedOptions = data.split('\n').map(option => ({ label: option.trim(), value: option.trim() })).filter(option => option.label);
                    setLocalOptions(parsedOptions);
                })
                .catch(error => {
                    console.error('Error fetching options:', error);
                    setLocalOptions([{ label: 'Error loading options', value: '' }]);
                });
        }
    }, [loadOptionsFromFile]); // Only run if loadOptionsFromFile is true

    const handleSelectChange = (selectedOption) => {
        updateFormData({ [name]: selectedOption?.value || null });
    };

    const initialValue = formData[name]
        ? localOptions.find(option => option.value === formData[name]) || { label: formData[name], value: formData[name] }
        : null;

    return (
        <div className="form-group standard-width">
            <label htmlFor={id}>{label}</label>
            <Select
                id={id}
                name={name}
                value={initialValue}
                options={localOptions}
                onChange={handleSelectChange}
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

export default Dropdown;
