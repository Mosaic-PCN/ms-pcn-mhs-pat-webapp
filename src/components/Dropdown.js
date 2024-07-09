// src/components/Form.js
import React, { useState } from 'react';
import './Form.css';
import Dropdown from './Dropdown';
import CustomDropdown from './CustomDropdown';
import DatePicker from 'react-datepicker';
import RadioButtonGroup from './RadioButtonGroup';
import SelectDropdown from './SelectDropdown';
import 'react-datepicker/dist/react-datepicker.css';

const Form = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
    };

    const radioOptions = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' }
    ];

    const roleOptions = [
        { label: 'EMR', value: 'emr' },
        { label: 'PCC', value: 'pcc' },
        { label: 'PF', value: 'pf' },
        { label: 'HPF', value: 'hpf' },
        { label: 'Activity Membership Coordinator', value: 'activity-membership-coord' },
        { label: 'Session Lead', value: 'session-lead' },  // Example session type
        { label: 'Session Assistant', value: 'session-assistant' }  // Example session type
    ];

    return (
        <main className="container mt-5">
            <form onSubmit={handleSubmit} method="POST">
                <div className="form-group standard-width">
                    <label htmlFor="workDate">Date</label>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="form-control"
                        dateFormat="yyyy/MM/dd"
                        placeholderText="Select a date"
                        required
                    />
                </div>
                <Dropdown label="Clinic Name" id="clinic_name" name="clinic_name" required={true} />
                <CustomDropdown label="Duration" id="duration" name="duration" required={true} />
                <div className="form-group standard-width">
                    <label htmlFor="activity" className="bold-label">Session Type</label>
                    <SelectDropdown label="Role" id="activity" name="activity" options={roleOptions} required={true} />
                </div>
                <RadioButtonGroup label="Choose an option" name="options" options={radioOptions} required={true} />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </main>
    );
};

export default Form;