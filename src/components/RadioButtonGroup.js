import React from 'react';

const RadioButtonGroup = ({ label, name, options, onChange }) => {
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        onChange({ value: selectedValue });
    };

    return (
        <div className="form-group">
            <label>{label}</label>
            <div className="radio-group">
                {options.map((option) => (
                    <div key={option.value} className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name={name}
                            id={`${name}-${option.value}`}
                            value={option.value}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor={`${name}-${option.value}`}>
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RadioButtonGroup;