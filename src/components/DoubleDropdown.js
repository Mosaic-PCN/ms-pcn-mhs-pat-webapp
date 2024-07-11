import React from 'react';
import './DoubleDropdown.css';
import CustomDropdown from './CustomDropdown';

import { generateTimeOptions } from '../utils';


const TripleDropdown = ({ label, id, name, required, options1, options2, label1, label2 }) => {
    return (
        <div className="form-group standard-width">
            <label htmlFor={id}>{label}</label>
            <div className="dropdown-row">
                <div className="dropdown-container">
                    {/* <label className="ind-menu" htmlFor={`${id}-dropdown1`}>{label2}</label> */}
                    <CustomDropdown label={label1} id="direct_time" name="direct_time" />
                </div>
                <div className="dropdown-container">
                    {/* <label className="ind-menu" htmlFor={`${id}-dropdown1`}>{label3}</label> */}
                    <CustomDropdown label={label2} id="indirect_time" name="indirect_time" />
                </div>
            </div>
        </div>
    );
};

export default TripleDropdown;