import React, { useEffect, useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ label, id, name, required }) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetch('/clinic-options.txt')
            .then(response => response.text())
            .then(data => {
                const parsedOptions = data.split('\n').map(option => option.trim()).filter(option => option);
                setOptions(parsedOptions);
            })
            .catch(error => console.error('Error fetching options:', error));
    }, []);

    return (
        <div className="form-group standard-width">
            <label htmlFor={id}>{label}</label>
            <select id={id} name={name} className="form-control" required={required}>
                <option value="">Choose...</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;