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
    // const [startDate, setStartDate] = useState(new Date());
    // const { updateFormData, formData, errors } = useContext(AppContext);
    const { formData, updateFormData, errors } = useContext(AppContext);
    const [startDate, setStartDate] = useState(formData.workDate ? new Date(formData.workDate) : new Date());



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

    const handleGamePlanTimeChange = (selectedOption) => {
        updateFormData({ gamePlanTime: selectedOption.value });
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
                <SelectDropdown label="Service Location" id="location" name="service_location" options={locationOptions} onChange={handleLocationChange} value={formData.location || ''} // Default from formData
                    required />
                <Dropdown label="Clinic Name" id="clinic_name" name="clinic_name" onChange={handleClinicNameChange} required />
                <SelectDropdown label="Role" id="activity" name="activity" options={roleOptions} onChange={handleRoleChange} required />
                <RadioButtonGroup label="Session Type:" name="session_type" options={radioOptions_virtual} onChange={handleSessionTypeChange} value={formData.sessionType || ''} />
                <RadioButtonGroup label="Meeting Type:" name="meeting_type" options={radioOptions_group} onChange={handleGroupTypeChange} value={formData.meetingType || ''} />
                <CustomDropdown label="Org Time" id="org_time" name="org_time" onChange={handleOrgTimeChange} required />
                <CustomDropdown label="Game Planning" id="game_time" name="game_time" onChange={handleGamePlanTimeChange} required />
            </form>
        </main>
    );
};

export default EncounterForm;