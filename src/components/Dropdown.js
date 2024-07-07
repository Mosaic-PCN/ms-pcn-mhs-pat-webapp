import React, { useEffect, useState } from 'react';

const Dropdown = () => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetch('/options.json')
            .then(response => response.json())
            .then(data => setOptions(data.options))
            .catch(error => console.error('Error fetching options:', error));
    }, []);

    return (
        <div className="form-group">
            <label htmlFor="dynamicDropdown">Select an option:</label>
            <select id="dynamicDropdown" name="dynamicDropdown" className="form-control" required>
                <option value="">Choose...</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;