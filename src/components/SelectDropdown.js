import React from 'react';
import Select from 'react-select';
import './SelectDropdown.css';

const SelectDropdown = ({ label, id, name, options, required }) => {
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            fontWeight: state.data.value.includes('session') ? 'bold' : 'normal',
        }),
        singleValue: (provided, state) => ({
            ...provided,
            fontWeight: state.data.value.includes('session') ? 'bold' : 'normal',
        })
    };

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
                styles={customStyles}
            />
        </div>
    );
};

export default SelectDropdown;