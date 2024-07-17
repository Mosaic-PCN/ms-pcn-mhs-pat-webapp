import React, { useContext } from 'react';
import TripleDropdown from './TripleDropdown';
import CustomDropdown from './CustomDropdown';
import DoubleDropdown from './DoubleDropdown';
import { AppContext } from '../AppContext';
import HelpIcon from '../HelpIcon';
import { TooltipProvider } from 'react-tooltip';

import './EMRForm.css';

const EMRForm = () => {
    const { updateFormData, fieldExplanations } = useContext(AppContext);

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
                <TooltipProvider>

                    <div className="emr-column">
                        <CustomDropdown label={<>Documentation - C&C visit<HelpIcon id="C_C_visit_help" explanation={fieldExplanations['C_C_visit']} /></>} id="C_C_visit" name="C_C_visit" place_holder="Indirect Time" />
                        <CustomDropdown label={<>Documentation - QI template<HelpIcon id="QI_template_help" explanation={fieldExplanations['QI_template']} /></>} id="QI_template" name="QI_template" place_holder="Indirect Time" />
                        <CustomDropdown label="Documentation - Menu of Service templates" id="Service_templates" name="Service_templates" place_holder="Indirect Time" />
                        <CustomDropdown label="Documentation - Clinic Processes" id="inputId" name="inputName" place_holder="Indirect Time" />
                        <CustomDropdown label="Documentation - Other" id="inputId" name="inputName" place_holder="Indirect Time" />
                        <CustomDropdown label="Scheduling appointments" id="inputId" name="inputName" place_holder="Indirect Time" />
                        <DoubleDropdown label="Liaise with external partners" id="inputId" name="inputName" options={options} />
                        <TripleDropdown label="Provider or clinic inquiry" id="inputId" name="inputName" options={options} max_count={100} />

                    </div>
                    <div className="emr-column">
                        <TripleDropdown label="EMR mapping" id="C_C_visit" name="C_C_visit" options={options} />
                        <TripleDropdown label="EMR searches" id="QI_template" name="QI_template" options={options} />
                        <TripleDropdown label="EMR data collection" id="Service_templates" name="Service_templates" options={options} />
                        <TripleDropdown label="EMR data entry" id="inputId" name="inputName" options={options} />
                        <TripleDropdown label="Meeting - C&C" id="inputId" name="inputName" />
                        <TripleDropdown label="Meeting - New Member" id="inputId" name="inputName" />
                        <TripleDropdown label="Meeting - CII/CPAR" id="inputId" name="inputName" />
                    </div>
                    <div className="emr-column">
                        <TripleDropdown label="Meeting - QI" id="inputId" name="inputName" />
                        <TripleDropdown label="Material dropoff" id="inputId" name="inputName" />
                        <TripleDropdown label="Clinic Activity - other" id="inputId" name="inputName" />
                        <TripleDropdown label="Recieving training" id="inputId" name="inputName" />
                        <TripleDropdown label="Training material creation" id="inputId" name="inputName" />
                        <TripleDropdown label="Training clinic administrative staff" id="inputId" name="inputName" />
                        <TripleDropdown label="Training clinic providers (physician, NP, MDT)" id="inputId" name="inputName" />
                    </div>
                </TooltipProvider>

            </div>
        </main >
    );
};

export default EMRForm;