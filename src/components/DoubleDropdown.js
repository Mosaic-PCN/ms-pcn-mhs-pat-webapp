import React from 'react';
import Select from 'react-select';
import './TripleDropdown.css';
import CustomDropdown from './CustomDropdown';


const DoubleDropdown = ({ label, id, name, onChangeDirectTime, onChangeIndirectTime }) => {
    return (
        <div className="dropdown-group">
            <div className="group-label">{label}</div>
            <div className="dropdown-container">
                <div className="dropdown-item">
                    <label htmlFor="dropdown2">Direct Time</label>
                    <CustomDropdown
                        className="custom-dropdown width2" // Added width2 class
                        id={`${id}-directTime`}
                        name={`${name}DirectTime`}
                        place_holder="Choose"
                        onChange={onChangeDirectTime}
                    />
                </div>
                <div className="dropdown-item">
                    <label htmlFor="dropdown3">Indirect Time</label>
                    <CustomDropdown
                        className="custom-dropdown width3" // Added width3 class
                        id={`${id}-indirectTime`}
                        name={`${name}IndirectTime`}
                        place_holder="Choose"
                        onChange={onChangeIndirectTime}
                    />
                </div >
            </div >
        </div>
    );
};

export default DoubleDropdown;