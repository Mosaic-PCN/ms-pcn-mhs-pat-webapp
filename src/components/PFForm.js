import React from 'react';
import NumberDropdown from './NumberDropdown';
import SelectDropdown from './SelectDropdown';
import TripleDropdown from './TripleDropdown';
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
                    <TripleDropdown label="Administration - physiotherapy program" id="C_C_visit" name="C_C_visit" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_direct} label3={label_indirect} />
                    <TripleDropdown label="Administration - ASP" id="QI_template" name="QI_template" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_direct} label3={label_indirect} />
                    <TripleDropdown label="Administration - AFAD" id="Service_templates" name="Service_templates" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_direct} label3={label_indirect} />
                    <TripleDropdown label="Administration - member signup/end date" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_direct} label3={label_indirect} />
                    <TripleDropdown label="Administration - quarterly packs" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_direct} label3={label_indirect} />
                </div>
                <div className="pf-column">
                    <TripleDropdown label="Meeting - C&C" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_direct} label3={label_clinic_prep} />
                    <TripleDropdown label="Meeting - New Member meet and greet" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_clinic_provider} label3={label_clinic_prep} />
                    <TripleDropdown label="Meeting - CII/CPAR" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_clinic_provider} label3={label_clinic_prep} />
                    <TripleDropdown label="Meeting - QI" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_clinic_provider} label3={label_clinic_prep} />
                    <TripleDropdown label="Material dropoff" id="C_C_visit" name="C_C_visit" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_clinic_provider} label3={label_clinic_prep} />
                    <TripleDropdown label="Clinic Activity - other" id="C_C_visit" name="C_C_visit" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_clinic_provider} label3={label_clinic_prep} />

                </div>
                <div className="pf-column">
                    <TripleDropdown label="Troubleshooting (portal, UptoDate, etc.)" id="QI_template" name="QI_template" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_direct} label3={label_indirect} />
                    <TripleDropdown label="Maintenance (PCN Admin, member lists, etc.)" id="Service_templates" name="Service_templates" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_direct} label3={label_indirect} />
                    <TripleDropdown label="Data visualization support" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_direct} label3={label_indirect} />
                    <TripleDropdown label="Member communication" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_direct} label3={label_indirect} />
                    <TripleDropdown label="External partner communication (AH, Calgary zone)" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label_direct} label3={label_indirect} />
                </div>
            </div>
        </main>
    );
};

export default PFForm;