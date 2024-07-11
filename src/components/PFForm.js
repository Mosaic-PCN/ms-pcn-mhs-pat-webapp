import React from 'react';
import NumberDropdown from './NumberDropdown';
import SelectDropdown from './SelectDropdown';
import TripleDropdown from './TripleDropdown';
import CustomDropdown from './CustomDropdown';
import './PFForm.css';

const PFForm = () => {

    const yes_no_Options = [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'non' },
    ];

    const options1 = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
    ];

    const options2 = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
    ];

    const options3 = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
    ];

    const label1 = "Count";
    const label_direct = "Direct Time";
    const label_indirect = "Indirect Time";
    const label_clinic_provider = "Time with Provider";
    const label_clinic_prep = "Preparation";

    return (
        <main className="container mt-5">
            <div className="pf-form">
                <div className="pf-column">
                    <CustomDropdown label="Documentation - QI template" id="org_time" name="duration" place_holder="Indirect Time" />
                    <CustomDropdown label="Documentation - Menu of Service templates" id="org_time" name="duration" place_holder="Indirect Time" />
                    <CustomDropdown label="Documentation - Clinic Processes" id="org_time" name="duration" place_holder="Indirect Time" />
                    <CustomDropdown label="Documentation - Other" id="org_time" name="duration" place_holder="Indirect Time" />
                    <CustomDropdown label="Scheduling appointments" id="org_time" name="duration" place_holder="Indirect Time" />
                    <NumberDropdown className="number-dropdown" label="QI projects Started" id="Member_phys_MHSP" name="Member_phys_MHSP" required={true} max={10} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="QI projects adopted" id="Member_phys_MHSP" name="Member_phys_MHSP" required={true} max={10} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="QI projects adapted" id="Member_phys_MHSP" name="Member_phys_MHSP" required={true} max={10} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="QI projects abandoned" id="Member_phys_MHSP" name="Member_phys_MHSP" required={true} max={10} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="QI project cancelled" id="Member_phys_MHSP" name="Member_phys_MHSP" required={true} max={10} place_holder="Count" />
                </div>
                <div className="pf-column pf-column">
                    <TripleDropdown label="Meeting - C&C" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_clinic_provider} label3={label_clinic_prep} />
                    <TripleDropdown label="Meeting - New Member meet and greet" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_clinic_provider} label3={label_clinic_prep} />
                    <TripleDropdown label="Meeting - CII/CPAR" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_clinic_provider} label3={label_clinic_prep} />
                    <TripleDropdown label="Meeting - QI" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_clinic_provider} label3={label_clinic_prep} />
                    <TripleDropdown label="Material dropoff" id="C_C_visit" name="C_C_visit" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_clinic_provider} label3={label_clinic_prep} />
                    <TripleDropdown label="Clinic Activity - other" id="C_C_visit" name="C_C_visit" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_clinic_provider} label3={label_clinic_prep} />
                </div>
                <div className="pf-column">
                    <TripleDropdown label="MHS team game planning" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_direct} label3={label_indirect} />
                    <TripleDropdown label="Provider or clinic inquiry" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_direct} label3={label_indirect} />
                    <TripleDropdown label="Liaise with external partners" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_direct} label3={label_indirect} />
                    <TripleDropdown label="Receiving training" id="QI_template" name="QI_template" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_direct} label3={label_indirect} />
                    <TripleDropdown label="Providing training" id="Service_templates" name="Service_templates" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_direct} label3={label_indirect} />
                    <TripleDropdown label="Training material creation" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_direct} label3={label_indirect} />
                </div>
            </div>
        </main>
    );
};

export default PFForm;