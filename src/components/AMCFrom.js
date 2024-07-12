import React from 'react';
import NumberDropdown from './NumberDropdown';
import SelectDropdown from './SelectDropdown';
import TripleDropdown from './TripleDropdown';
import './AMCForm.css';

const AMCForm = () => {

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
    const label2 = "Direct Time";
    const label3 = "Indirect Time";

    return (
        <main className="container mt-5">
            <div className="amc-form">
                <div className="amc-column">
                    <TripleDropdown label="Administration - physiotherapy program" id="C_C_visit" name="C_C_visit" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label2} label3={label3} />
                    <TripleDropdown label="Administration - ASP" id="QI_template" name="QI_template" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label2} label3={label3} />
                    <TripleDropdown label="Administration - AFAD" id="Service_templates" name="Service_templates" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label2} label3={label3} />
                    <TripleDropdown label="Administration - member signup/end date" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label2} label3={label3} />
                    <TripleDropdown label="Administration - quarterly packs" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label2} label3={label3} />
                </div>
                <div className="amc-column">
                    <TripleDropdown label="Administration - agreements (MAA, MHSP, NP, physio)" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label2} label3={label3} />
                    <TripleDropdown label="Administration - other" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label2} label3={label3} />
                    <TripleDropdown label="Documentation - processes" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label2} label3={label3} />
                    <TripleDropdown label="Documentation - Other" id="C_C_visit" name="C_C_visit" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label2} label3={label3} />
                </div>
                <div className="amc-column">
                    <TripleDropdown label="Troubleshooting (portal, UptoDate, etc.)" id="QI_template" name="QI_template" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label2} label3={label3} />
                    <TripleDropdown label="Maintenance (PCN Admin, member lists, etc.)" id="Service_templates" name="Service_templates" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label2} label3={label3} />
                    <TripleDropdown label="Data visualization support" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label2} label3={label3} />
                    <TripleDropdown label="Member communication" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label2} label3={label3} />
                    <TripleDropdown label="External partner communication (AH, Calgary zone)" id="inputId" name="inputName" required={true} options1={options1} options2={options2} options3={options3} label1={label1} label2={label2} label3={label3} />
                </div>
            </div>
        </main>
    );
};

export default AMCForm;