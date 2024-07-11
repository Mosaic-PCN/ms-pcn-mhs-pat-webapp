import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContext';
import Dropdown from './Dropdown';
import SelectDropdown from './SelectDropdown';
import CustomDropdown from './CustomDropdown';
import DatePicker from 'react-datepicker';
import RadioButtonGroup from './RadioButtonGroup';
import 'react-datepicker/dist/react-datepicker.css';
import './EncounterForm.css';

const EncounterForm = ({ onRoleChange }) => {
    const [startDate, setStartDate] = useState(new Date());
    const { updateFormData } = useContext(AppContext);

    const handleRoleChange = (selectedOption) => {
        const role = selectedOption.value;
        updateFormData({ role });
        onRoleChange(role);
    };

    const handleDateChange = (date) => {
        setStartDate(date);
        updateFormData({ workDate: date });
    };

    const handleLocationChange = (selectedOption) => {
        updateFormData({ location: selectedOption.value });
    };

    const handleClinicNameChange = (selectedOption) => {
        updateFormData({ clinicName: selectedOption.value });
    };

    const handleSessionTypeChange = (selectedOption) => {
        updateFormData({ sessionType: selectedOption.value });
    };

    const handleGroupTypeChange = (selectedOption) => {
        updateFormData({ meetingType: selectedOption.value });
    };

    const handleOrgTimeChange = (selectedOption) => {
        updateFormData({ orgTime: selectedOption.value });
    };

    // const handleNotesChange = (e) => {
    //     updateFormData({ notes: e.target.value });
    // };

    const handleGamePlanTimeChange = (selectedOption) => {
        updateFormData({ orgTime: selectedOption.value });
    };

    const radioOptions_virtual = [
        { label: 'Virtual', value: 'virtual' },
        { label: 'In-person', value: 'in-person' }
    ];

    const radioOptions_group = [
        { label: '1:1', value: '1:1' },
        { label: 'Group', value: 'group-session' },
        { label: 'Non-Visit Encounter', value: 'non_visit' }
    ];

    const roleOptions = [
        { label: 'EMR', value: 'emr' },
        { label: 'PCC', value: 'pcc' },
        { label: 'PF', value: 'pf' },
        { label: 'HPF', value: 'hpf' },
        { label: 'Activity Membership Coordinator', value: 'amc' }
    ];

    const locationOptions = [
        { label: 'Home', value: 'home' },
        { label: 'Mosaic Central Offices', value: 'mosaic_offices' },
        { label: 'Clinic', value: 'clinic' }
    ];

    return (
        <main className="container mt-5">
            <form>
                <div className="form-group standard-width">
                    <label htmlFor="workDate">Date</label>
                    <DatePicker
                        selected={startDate}
                        onChange={handleDateChange}
                        className="form-control"
                        dateFormat="yyyy/MM/dd"
                        placeholderText="Select a date"
                    />
                </div>
                <SelectDropdown label="Service Location" id="location" name="service_location" options={locationOptions} onChange={handleLocationChange} />
                <Dropdown label="Clinic Name" id="clinic_name" name="clinic_name" onChange={handleClinicNameChange} />
                <SelectDropdown label="Role" id="activity" name="activity" options={roleOptions} onChange={handleRoleChange} />
                <RadioButtonGroup label="Session Type:" name="session_type" options={radioOptions_virtual} onChange={handleSessionTypeChange} />
                <RadioButtonGroup label="Meeting Type:" name="meeting_type" options={radioOptions_group} onChange={handleGroupTypeChange} />
                <CustomDropdown label="Org Time" id="org_time" name="org_time" onChange={handleOrgTimeChange} />
                <CustomDropdown label="Game Planning" id="game_time" name="game_time" onChange={handleGamePlanTimeChange} />

                {/* <div className="form-group">
                    <label htmlFor="editor">Encounter Notes:</label>
                    <textarea id="notes" name="notes" rows="6" cols="33" className="modern-textarea" onChange={handleNotesChange}>
                        Type here...
                    </textarea>
                </div> */}
            </form>
        </main>
    );
};

export default EncounterForm;