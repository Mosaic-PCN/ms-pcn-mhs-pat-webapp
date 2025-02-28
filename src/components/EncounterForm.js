import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../AppContext';
import Dropdown from './Dropdown';
import SelectDropdown from './SelectDropdown';
import CustomDropdown from './CustomDropdown';
import DatePicker from 'react-datepicker';
import RadioButtonGroup from './RadioButtonGroup';
import 'react-datepicker/dist/react-datepicker.css';
import './EncounterForm.css';

// const EncounterForm = ({ onRoleChange, onServiceLocationChange, onClinicNameChange, onSessionTypeChange, onMeetingTypeChange, onOrgTimeChange, onGamePlanTimeChange }) => {
const EncounterForm = ({ onRoleChange }) => {

    const { formData, updateFormData, errors } = useContext(AppContext);
    const [startDate, setStartDate] = useState(formData.workDate ? new Date(formData.workDate) : new Date());
    const [isPcnMosaicInternal, setIsPcnMosaicInternal] = useState(formData.isPcnMosaicInternal || false);
    const [showMosaicPCNFields, setshowMosaicPCNFields] = useState(formData.isPcnMosaicInternal || false);

    useEffect(() => {
        setIsPcnMosaicInternal(formData.isPcnMosaicInternal || false);
        setshowMosaicPCNFields(formData.isPcnMosaicInternal || false);
    }, [formData]);

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
        const serviceLocation = selectedOption.value;
        updateFormData({ serviceLocation: selectedOption.value });
        // onServiceLocationChange(serviceLocation);
    };

    const handleClinicNameChange = (selectedOption) => {
        const clinicName = selectedOption.value;
        updateFormData({ clinicName: selectedOption.value });
        // onClinicNameChange(clinicName);
    };

    const handleCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        setIsPcnMosaicInternal(isChecked);
        setshowMosaicPCNFields(isChecked);
        updateFormData({ isPcnMosaicInternal: isChecked });
    };

    const handleSessionTypeChange = (selectedOption) => {
        const sessionType = selectedOption.value;
        updateFormData({ sessionType: selectedOption.value });
        // onSessionTypeChange(sessionType);
    };

    const handleMeetingTypeChange = (selectedOption) => {
        const meetingType = selectedOption.value;
        updateFormData({ meetingType: selectedOption.value });
        // onMeetingTypeChange(meetingType)
    };

    const handleOrgTimeChange = (selectedOption) => {
        const orgTime = selectedOption.value;
        updateFormData({ orgTime: selectedOption.value });
        // onOrgTimeChange(orgTime)
    };

    const handleGamePlanTimeChange = (selectedOption) => {
        const gamePlanTime = selectedOption.value;
        updateFormData({ gameTime: selectedOption.value });
        // onGamePlanTimeChange(gamePlanTime)
    };
    const radioOptions_virtual = [
        { label: 'Virtual', value: 'Virtual' },
        { label: 'In-person', value: 'In-Person' }
    ];

    const radioOptions_group = [
        { label: '1:1', value: '1:1' },
        { label: 'Group', value: 'Group' },
        { label: 'Non-Visit Encounter', value: 'Non-Visit' }
    ];

    const roleOptions = [
        { label: 'EMRS', value: 'EMRS' },
        { label: 'PCC', value: 'PCC' },
        { label: 'PF', value: 'PF' },
        { label: 'HPF', value: 'HPF' },
        { label: 'Membership Coordinator', value: 'Membership Coordinator' }
    ];

    const locationOptions = [
        { label: 'Home', value: 'Home' },
        { label: 'Mosaic Central Offices', value: 'Mosaic Office' },
        { label: 'Clinic', value: 'Clinic' }
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
                        name="isPcnMosaicInternal"
                        checked={isPcnMosaicInternal}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="pcnMosaicInternal">Mosaic PCN - Internal</label>
                </div>

                {!showMosaicPCNFields && <Dropdown
                    label="Clinic Name"
                    id="clinic_name"
                    name="clinicName"
                    onChange={handleClinicNameChange}
                    required
                />}
                <SelectDropdown label="Role" id="role" name="role" options={roleOptions} onChange={handleRoleChange} value={formData.role || ''} />
                {!showMosaicPCNFields && <RadioButtonGroup label="Session Type:" name="sessionType" options={radioOptions_virtual} onChange={handleSessionTypeChange} value={formData.sessionType || ''} />}
                {!showMosaicPCNFields && < RadioButtonGroup label="Meeting Type:" name="meetingType" options={radioOptions_group} onChange={handleMeetingTypeChange} value={formData.meetingType || ''} />}
                {showMosaicPCNFields && <CustomDropdown label="Org Time" id="org_time" name="orgTime" onChange={handleOrgTimeChange} required value={formData.orgTime || ''} />}
                {showMosaicPCNFields && <CustomDropdown label="Game Planning" id="game_time" name="gameTime" onChange={handleGamePlanTimeChange} required value={formData.gamePlanTime || ''} />}            </form>
        </main>
    );
};

export default EncounterForm;