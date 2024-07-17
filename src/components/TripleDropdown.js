import React from 'react';
import './TripleDropdown.css';
import CustomDropdown from './CustomDropdown';
import NumberDropdown from './NumberDropdown';

// const TripleDropdown = ({ label, id, name, label1, label2, label3, max_count }) => {
const TripleDropdown = ({ label, id, name, max_count }) => {

    return (
        <div className="form-group standard-width">
            <label htmlFor={id}>{label}</label>
            <div className="dropdown-row">
                <div className="dropdown-container">
                    {/* <label className="ind-menu" htmlFor={`${id}-dropdown1`}>{label1}</label> */}
                    {/* <NumberDropdown className="number-dropdown" label={label1} id="count" name="count" max={max_count} place_holder="Count" /> */}
                    <NumberDropdown className="number-dropdown" id="count" name="count" max={max_count} place_holder="Count" />

                </div>
                <div className="dropdown-container">
                    {/* <label className="ind-menu" htmlFor={`${id}-dropdown1`}>{label2}</label> */}
                    {/* <CustomDropdown label={label2} id="org_time" name="duration" place_holder='Direct Time' /> */}
                    <CustomDropdown id="org_time" name="duration" place_holder='Direct Time' />

                </div>
                <div className="dropdown-container">
                    {/* <label className="ind-menu" htmlFor={`${id}-dropdown1`}>{label3}</label> */}
                    {/* <CustomDropdown label={label3} id="org_time" name="duration" place_holder='Inirect Time' /> */}
                    <CustomDropdown id="org_time" name="duration" place_holder='Inirect Time' />

                </div>
            </div>
        </div>
    );
};

export default TripleDropdown;