import React from 'react';
import './RadioButtonGroup.css';

const RadioButtonGroup = ({ label, name, options, required }) => {
    return (
        <div className="form-group">
            <label>{label}</label>
            <div>
                {options.map((option, index) => (
                    <div key={index} className="form-check">
                        <input
                            type="radio"
                            id={`${name}-${option.value}`}
                            name={name}
                            value={option.value}
                            className="form-check-input"
                            required={required}
                        />
                        <label htmlFor={`${name}-${option.value}`} className="form-check-label">
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RadioButtonGroup;