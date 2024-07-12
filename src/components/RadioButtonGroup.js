import React from 'react';

const RadioButtonGroup = ({ label, name, options, onChange, value }) => {
    const handleChange = (event) => {
        onChange({ value: event.target.value });
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
                            checked={option.value === value}
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
