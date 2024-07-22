import React from 'react';
import './TripleDropdown.css';
import CustomDropdown from './CustomDropdown';
import NumberDropdown from './NumberDropdown';

const TripleDropdown = ({ label, id, name, max_count, onChangeCount, onChangeDirectTime, onChangeIndirectTime }) => {
    return (
        <div className="dropdown-group">
            <div className="group-label">{label}</div>
            <div className="dropdown-container">
                <div className="dropdown-item">
                    <label htmlFor="dropdown1">Count</label>
                    <NumberDropdown
                        className="number-dropdown width1"
                        id={`${id}-count`}
                        name={`${name}Count`}
                        max={max_count}
                        place_holder="Choose"
                        onChange={onChangeCount}
                    />
                </div>
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
                {/* <div className="form-group standard-width"> */}
                {/* <label htmlFor={id}>{label}</label> */}
                {/* <div className="dropdown-row"> */}
                {/* <div className="dropdown-container"> */}

                {/* </div>
                    <div className="dropdown-container">
                    </div>
                    <div className="dropdown-container">
                    </div> */}
            </div >
        </div>
    );
};

export default TripleDropdown;