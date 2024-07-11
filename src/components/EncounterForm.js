import React, { useState } from 'react';
import Dropdown from './Dropdown';
import SelectDropdown from './SelectDropdown';
import CustomDropdown from './CustomDropdown';
import DatePicker from 'react-datepicker';
import RadioButtonGroup from './RadioButtonGroup';
import 'react-datepicker/dist/react-datepicker.css';
import './EncounterForm.css';

const EncounterForm = ({ onRoleChange }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [selectedRole, setSelectedRole] = useState('');

    const handleRoleChange = (selectedOption) => {
        console.log('picked', selectedOption);
        setSelectedRole(selectedOption.value);
        onRoleChange(selectedOption.value);
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
        { label: 'Activity Membership Coordinator', value: 'activity_membership_coord' }
    ];

    return (
        <main className="container mt-5">
            {/* <form onSubmit={handleSubmit} method="POST"> */}
            <form>
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
                <Dropdown label="Clinic Name" id="clinic_name" name="clinic_name" />
                <SelectDropdown label="Role" id="activity" name="activity" options={roleOptions} onChange={handleRoleChange} />
                <RadioButtonGroup label="Session Type:" name="virtual_options" options={radioOptions_virtual} />
                <RadioButtonGroup label=" " name="group_options" options={radioOptions_group} />
                <CustomDropdown label="Org Time" id="org_time" name="duration" />

                <div className="form-group">
                    <label htmlFor="editor">Encounter Notes:</label>
                    <textarea id="notes" name="notes" rows="6" cols="33" className="modern-textarea">
                        Type here...
                    </textarea>
                </div>

            </form>
        </main>
    );
};

export default EncounterForm;