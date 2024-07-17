import React, { useState, useContext } from 'react';
import NumberDropdown from './NumberDropdown';
import SelectDropdown from './SelectDropdown';
import TripleDropdown from './TripleDropdown';
import CustomDropdown from './CustomDropdown';
import DoubleDropdown from './DoubleDropdown';
import { AppContext } from '../AppContext';
import './PCCForm.css';

const PCCForm = () => {
    const { updateFormData } = useContext(AppContext);

    const yes_no_Options = [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'non' },
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
            <div className="pcc-form">
                <div className="pcc-column">
                    <CustomDropdown label="Documentation - C&C visit" id="C_C_visit" name="C_C_visit" required options={options} />
                    <CustomDropdown label="Documentation - QI template" id="QI_template" name="QI_template" required options={options} />
                    <CustomDropdown label="Documentation - Menu of Service templates" id="Service_templates" name="Service_templates" required options={options} />
                    <CustomDropdown label="Documentation - Clinic Processes" id="inputId" name="inputName" required options={options} />
                    <CustomDropdown label="Documentation - Other" id="inputId" name="inputName" required options={options} />
                    <CustomDropdown label="Scheduling appointments" id="inputId" name="inputName" required options={options} />
                    <DoubleDropdown label="Liaise with external partners" id="inputId" name="inputName" required options={options} />
                    <TripleDropdown label="Provider or clinic inquiry" id="inputId" name="inputName" required options={options} max_count={100} />
                    <TripleDropdown label="MHS team game planning" id="inputId" name="inputName" required options={options} max_count={8} />
                    <TripleDropdown className="number-dropdown" label="Being trained by EMR-S" id="EMRs" name="EMRS" required max={10} place_holder="Count" onChange={handleChange('emrs')} />
                    <TripleDropdown className="number-dropdown" label="Training clinic administrative staff" id="HPF" name="HPF" required max={10} place_holder="Count" onChange={handleChange('hpf')} />
                    <TripleDropdown className="number-dropdown" label="Training clinic providers (physician, NP, MDT)" id="Membership_Coordinator" name="Membership_Coordinator" required max={5} place_holder="Count" onChange={handleChange('memberCoord')} />
                </div>
                <div className="pcc-column">
                    <TripleDropdown className="number-dropdown" label="Patient calls" id="EMRs" name="EMRs" required={true} max={10} place_holder="Count" />
                    <TripleDropdown className="number-dropdown" label="Netcare" id="HPF" name="HPF" required={true} max={10} place_holder="Count" />
                    <TripleDropdown className="number-dropdown" label="Panel clean up " id="Membership_Coordinator" name="Membership_Coordinator" required={true} max={5} place_holder="Count" />
                    <TripleDropdown className="number-dropdown" label="Meeting - C&C" id="MDT" name="MDT" required={true} max={10} place_holder="Count" />
                    <TripleDropdown className="select-dropdown" label="Meeting - New Member" id="Dyad" name="Dyad" options={yes_no_Options} />
                    <TripleDropdown className="number-dropdown" label="Meeting - CII/CPAR" id="EMRs" name="EMRS" required={true} max={10} place_holder="Count" />
                    <TripleDropdown className="number-dropdown" label="Netcare" id="HPF" name="HPF" required={true} max={10} place_holder="Count" />
                    <TripleDropdown className="number-dropdown" label="Meeting - QI" id="Membership_Coordinator" name="Membership_Coordinator" required={true} max={5} place_holder="Count" />
                    <TripleDropdown className="number-dropdown" label="Material dropoff" id="MDT" name="MDT" required={true} max={10} place_holder="Count" />
                    <TripleDropdown className="select-dropdown" label="Dyad" id="Dyad" name="Dyad" options={yes_no_Options} />

                </div>
                <div className="pcc-column">
                    <NumberDropdown className="number-dropdown" label="Scheduling patient appointment" id="CLIN_MGR" name="CLIN_MGR" required={true} max={80} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="Screening offers - pap test " id="CLIN_OWN" name="CLIN_OWN" required={true} max={80} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="Screening offers- mammogram" id="PCC_Mosaic" name="PCC_Mosaic" required={true} max={80} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="Screening offers - colorectal" id="PCC_Clinic" name="PCC_Clinic" required={true} max={80} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="Screening offers - annual physical (Cpx)" id="PF" name="PF" required={true} max={80} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="Screening offers - diabetes" id="CLIN_MGR" name="CLIN_MGR" required={true} max={80} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="Screening offers - lipid profile" id="CLIN_OWN" name="CLIN_OWN" required={true} max={80} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="Screening offers - CV risk" id="PCC_Mosaic" name="PCC_Mosaic" required={true} max={80} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="Screening offers - lung cancer/ tobacco" id="PCC_Clinic" name="PCC_Clinic" required={true} max={80} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="Screening offers - other" id="PF" name="PF" required={true} max={80} place_holder="Count" />

                </div>
            </div>
        </main>
    );
};

export default PCCForm;