import React, { useContext } from 'react';
import NumberDropdown from './NumberDropdown';
import TripleDropdown from './TripleDropdown';
import CustomDropdown from './CustomDropdown';
import DoubleDropdown from './DoubleDropdown';
import { AppContext } from '../AppContext';
import './EMRForm.css';

const EMRForm = () => {
    const { updateFormData } = useContext(AppContext);

    const yes_no_Options = [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
    ];

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
    ];

    const handleChange = (field) => (selectedOption) => {
        updateFormData({ [field]: selectedOption.value });
    };

    return (
        <main className="container mt-5">
            <div className="emr-form">
                <div className="emr-column">
                    <CustomDropdown label="Documentation - C&C visit" id="C_C_visit" name="C_C_visit" required options={options} />
                    <CustomDropdown label="Documentation - QI template" id="QI_template" name="QI_template" required options={options} />
                    <CustomDropdown label="Documentation - Menu of Service templates" id="Service_templates" name="Service_templates" required options={options} />
                    <CustomDropdown label="Documentation - Clinic Processes" id="inputId" name="inputName" required options={options} />
                    <CustomDropdown label="Documentation - Other" id="inputId" name="inputName" required options={options} />
                    <CustomDropdown label="Scheduling appointments" id="inputId" name="inputName" required options={options} />
                    <NumberDropdown className="number-dropdown" label="EMRs" id="EMRs" name="EMRs" required max={10} place_holder="Count" onChange={handleChange('emrs')} />
                    <NumberDropdown className="number-dropdown" label="HPF" id="HPF" name="HPF" required max={10} place_holder="Count" onChange={handleChange('hpf')} />
                    <NumberDropdown className="number-dropdown" label="Membership Coordinator" id="Membership_Coordinator" name="Membership_Coordinator" required max={5} place_holder="Count" onChange={handleChange('memberCoord')} />
                </div>
                <div className="emr-column">
                    <DoubleDropdown label="Liaise with external partners" id="inputId" name="inputName" required options={options} />
                    <TripleDropdown label="Provider or clinic inquiry" id="inputId" name="inputName" required options={options} max_count={100} />
                    <TripleDropdown label="MHS team game planning" id="inputId" name="inputName" required options={options} max_count={8} />
                    <TripleDropdown label="EMR mapping" id="C_C_visit" name="C_C_visit" required options={options} />
                    <TripleDropdown label="EMR searches" id="QI_template" name="QI_template" required options={options} />
                    <TripleDropdown label="EMR data collection" id="Service_templates" name="Service_templates" required options={options} />
                    <TripleDropdown label="EMR data entry" id="inputId" name="inputName" required options={options} />
                </div>
                <div className="emr-column">
                    <TripleDropdown label="Meeting - C&C" id="inputId" name="inputName" required options={options} />
                    <TripleDropdown label="Meeting - New Member" id="inputId" name="inputName" required options={options} />
                    <TripleDropdown label="Meeting - CII/CPAR" id="inputId" name="inputName" required options={options} />
                    <TripleDropdown label="Meeting - QI" id="inputId" name="inputName" required options={options} />
                    <TripleDropdown label="Material dropoff" id="inputId" name="inputName" required options={options} />
                    <TripleDropdown label="Clinic Activity - other" id="inputId" name="inputName" required options={options} />
                </div>
            </div>
        </main>
    );
};

export default EMRForm;