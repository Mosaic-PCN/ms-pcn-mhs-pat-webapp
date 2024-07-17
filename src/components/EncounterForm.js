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
    const [showOrgTime, setShowOrgTime] = useState(false);
    const [showMosaicPCNFields, setshowMosaicPCNFields] = useState(false);
    const [isPcnMosaicInternal, setIsPcnMosaicInternal] = useState(false);


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
        updateFormData({ serviceLocation: selectedOption.value });
    };

    const handleClinicNameChange = (selectedOption) => {
        updateFormData({ clinicName: selectedOption.value });
        // setShowOrgTime(selectedOption.value === 'Mosaic PCN - Internal');
    };

    const handleCheckboxChange = (event) => {
        setIsPcnMosaicInternal(event.target.checked);
        updateFormData({ isPcnMosaicInternal: event.target.checked });
        const isChecked = event.target.checked;
        // setShowOrgTime(event.target.checked);
        setshowMosaicPCNFields(event.target.checked);

    };

    const handleSessionTypeChange = (selectedOption) => {
        updateFormData({ sessionType: selectedOption.value });
    };

    const handleMeetingTypeChange = (selectedOption) => {
        updateFormData({ meetingType: selectedOption.value });
    };

    const handleOrgTimeChange = (selectedOption) => {
        updateFormData({ orgTime: selectedOption.value });
    };

    const handleGamePlanTimeChange = (selectedOption) => {
        updateFormData({ gamePlanTime: selectedOption.value });
    };

    const radioOptions_virtual = [
        { label: 'Virtual', value: 'Virtual' },
        { label: 'In-person', value: 'In-Person' }
    ];

    const radioOptions_group = [
        { label: '1:1', value: '1:1' },
        { label: 'Group', value: 'Group' },
        { label: 'Non-Visit Encounter', value: 'Non Visit' }
    ];

    const roleOptions = [
        { label: 'EMRS', value: 'emr' },
        { label: 'PCC', value: 'pcc' },
        { label: 'PF', value: 'pf' },
        { label: 'HPF', value: 'hpf' },
        { label: 'Membership Coordinator', value: 'amc' }
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
                <SelectDropdown label="Service Location" id="service_location" name="serviceLocation" options={locationOptions} onChange={handleLocationChange} value={formData.location || ''}
                    required />

                <div className="checkbox-form-group standard-width">
                    <input
                        type="checkbox"
                        id="pcnMosaicInternal"
                        name="pcnMosaicInternal"
                        checked={isPcnMosaicInternal}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="pcnMosaicInternal">PCN Mosaic - Internal</label>
                </div>

                {!showMosaicPCNFields && <Dropdown
                    label="Clinic Name"
                    id="clinic_name"
                    name="clinicName"
                    onChange={handleClinicNameChange}
                    required
                />}
                {/* <Dropdown label="Clinic Name" id="clinic_name" name="clinicName" onChange={handleClinicNameChange} required /> */}
                <SelectDropdown label="Role" id="activity" name="role" options={roleOptions} onChange={handleRoleChange} value={formData.role || ''} />
                {!showMosaicPCNFields && <RadioButtonGroup label="Session Type:" name="sessionType" options={radioOptions_virtual} onChange={handleSessionTypeChange} value={formData.sessionType || ''} />}
                {!showMosaicPCNFields && < RadioButtonGroup label="Meeting Type:" name="meetingType" options={radioOptions_group} onChange={handleMeetingTypeChange} value={formData.meetingType || ''} />}
                {showMosaicPCNFields && <CustomDropdown label="Org Time" id="org_time" name="orgTime" onChange={handleOrgTimeChange} required />}
                {showMosaicPCNFields && <CustomDropdown label="Game Planning" id="game_time" name="gameTime" onChange={handleGamePlanTimeChange} required />}
            </form>
        </main>
    );
};

export default EncounterForm;