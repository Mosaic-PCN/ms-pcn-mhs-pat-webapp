import React, { useEffect, useState, useContext } from 'react';
import Select from 'react-select';
import { AppContext } from '../AppContext';
import './Dropdown.css';

const Dropdown = ({ label, id, name, onChange, required }) => {
    const [options, setOptions] = useState([]);
    const { formData, updateFormData } = useContext(AppContext);

    useEffect(() => {
        fetch('/clinic-options.txt')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                const parsedOptions = data.split('\n').map(option => ({ label: option.trim(), value: option.trim() })).filter(option => option.label);
                setOptions(parsedOptions);
            })
            .catch(error => {
                console.error('Error fetching options:', error);
                setOptions([{ label: 'Error loading options', value: '' }]);
            });
    }, []);

    const handleSelectChange = (selectedOption) => {
        updateFormData({ [name]: selectedOption?.value || null });
    };

    // Determine initial value from formData, and find matching label if it exists
    const initialValue = formData[name]
        ? options.find(option => option.value === formData[name]) || { label: formData[name], value: formData[name] } // Handle cases where the option isn't yet fetched
        : null;

    return (
        <div className="form-group standard-width">
            <label htmlFor={id}>{label}</label>
            <Select
                id={id}
                name={name}
                value={initialValue} // Set the initial value from formData
                options={options}
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
