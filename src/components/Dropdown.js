import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './Dropdown.css';

const Dropdown = ({ label, id, name, required }) => {
    const [options, setOptions] = useState([]);

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
                placeholder="Choose..."
                isClearable
                required={required}
            />
        </div>
    );
};

export default Dropdown;