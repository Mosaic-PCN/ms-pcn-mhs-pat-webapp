import React from 'react';
import Select from 'react-select';
import './TripleDropdown.css';
import CustomDropdown from './CustomDropdown';
import NumberDropdown from './NumberDropdown';

import { generateTimeOptions } from '../utils';

const TripleDropdown = ({ label, id, name, required, options1, options2, options3, label1, label2, label3, max_count }) => {
    return (
        <div className="form-group standard-width">
            <label htmlFor={id}>{label}</label>
            <div className="dropdown-row">
                <div className="dropdown-container">
                    <NumberDropdown className="number-dropdown" label={label1} id={`${id}-count`} name="count" required={true} max={max_count} />
                </div>
                <div className="dropdown-container">
                    <CustomDropdown label={label2} id={`${id}-org_time1`} name="duration" />
                </div>
                <div className="dropdown-container">
                    <CustomDropdown label={label3} id={`${id}-org_time2`} name="duration" />
                </div>
            </div>
        </div>
    );
};

export default TripleDropdown;