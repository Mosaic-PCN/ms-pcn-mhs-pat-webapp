import React, { useState } from 'react';
import Dropdown from './Dropdown';
import CustomDropdown from './CustomDropdown';
import DatePicker from 'react-datepicker';
import RadioButtonGroup from './RadioButtonGroup';
import SelectDropdown from './SelectDropdown';
import 'react-datepicker/dist/react-datepicker.css';
import './Form.css';

const Form = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted");
    };

    const radioOptions_virtual = [
        { label: 'Virtual', value: 'virtual_session' },
        { label: 'In-person', value: 'inperson_session' }
    ];

    const radioOptions_group = [
        { label: '1:1', value: 'one_one_session' },
        { label: 'Group', value: 'group_session' },
        { label: 'Non-Visit Encounter', value: 'non_visit' }
    ];

    const roleOptions = [
        { label: 'EMR', value: 'emr' },
        { label: 'PCC', value: 'pcc' },
        { label: 'PF', value: 'pf' },
        { label: 'HPF', value: 'hpf' },
        { label: 'Activity Membership Coordinator', value: 'activity-membership-coord' }
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
                    />
                </div>
                {/* <Dropdown label="Clinic Name" id="clinic_name" name="clinic_name" />
                <CustomDropdown label="Duration" id="duration" name="duration" />
                <SelectDropdown label="Role" id="activity" name="activity" options={roleOptions} /> */}
                <CustomDropdown label="Duration" id="duration" name="duration" />
                <RadioButtonGroup label="Session Type:" name="options" options={radioOptions_virtual} />
                <RadioButtonGroup label=" " name="options" options={radioOptions_group} />

            </form>
        </main>
    );
};

export default Form;