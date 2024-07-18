import React from 'react';
import './TripleDropdown.css';
import CustomDropdown from './CustomDropdown';
import NumberDropdown from './NumberDropdown';

const TripleDropdown = ({ label, id, name, max_count, onChangeCount, onChangeDirectTime, onChangeIndirectTime }) => {
    return (
        <div className="form-group standard-width">
            <label htmlFor={id}>{label}</label>
            <div className="dropdown-row">
                <div className="dropdown-container">
                    <NumberDropdown
                        className="number-dropdown"
                        id={`${id}-count`}
                        name={`${name}Count`}
                        max={max_count}
                        place_holder="Count"
                        onChange={onChangeCount}
                    />
                </div>
                <div className="dropdown-container">
                    <CustomDropdown
                        id={`${id}-directTime`}
                        name={`${name}DirectTime`}
                        place_holder="Direct Time"
                        onChange={onChangeDirectTime}
                    />
                </div>
                <div className="dropdown-container">
                    <CustomDropdown
                        id={`${id}-indirectTime`}
                        name={`${name}IndirectTime`}
                        place_holder="Indirect Time"
                        onChange={onChangeIndirectTime}
                    />
                </div>
            </div>
        </div>
    );
};

export default TripleDropdown;