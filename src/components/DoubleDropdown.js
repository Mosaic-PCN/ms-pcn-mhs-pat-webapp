import React from 'react';
import Select from 'react-select';
import './TripleDropdown.css';
import CustomDropdown from './CustomDropdown';


const DoubleDropdown = ({ label, id, name, required, label1, label2 }) => {
    return (
        <div className="form-group standard-width">
            <label htmlFor={id}>{label}</label>
            <div className="dropdown-row">
                <div className="dropdown-container">
                    <CustomDropdown label={label1} id={`${id}-direct`} name="duration" place_holder='Direct Time' />
                </div>
                <div className="dropdown-container">
                    <CustomDropdown label={label2} id={`${id}-indirect`} name="duration" place_holder='Indirect Time' />
                </div>
            </div>
        </div>
    );
};

export default DoubleDropdown;