import React, { useContext } from 'react';
import TripleDropdown from './TripleDropdown';
import CustomDropdown from './CustomDropdown';
import DoubleDropdown from './DoubleDropdown';
import { AppContext } from '../AppContext';
import HelpIcon from '../HelpIcon';
import { TooltipProvider } from 'react-tooltip';

import './EMRForm.css';

const EMRForm = () => {
    const { formData, updateFormData, fieldExplanations } = useContext(AppContext);

    const yes_no_Options = [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
    ];

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
    ];


    const handleCcVisitChange = (selectedOption) => {
        updateFormData({ serviceLocation: selectedOption.value });
    };

    const handleQiTemplateChange = (selectedOption) => {
        updateFormData({ serviceLocation: selectedOption.value });
    };

    const handleServiceTemplatesChange = (selectedOption) => {
        updateFormData({ serviceLocation: selectedOption.value });
    };

    const handleDocumentationClinicProcessesChange = (selectedOption) => {
        updateFormData({ serviceLocation: selectedOption.value });
    };

    const handleDocumentationOtherChange = (selectedOption) => {
        updateFormData({ serviceLocation: selectedOption.value });
    };

    const handleSchedulingAppointmentsChange = (selectedOption) => {
        updateFormData({ serviceLocation: selectedOption.value });
    };

    const handleLiaiseWithExternalPartnersChange = (selectedOption) => {
        updateFormData({ serviceLocation: selectedOption.value });
    };

    const handleProvideOrClinicInquiryChange = (selectedOption) => {
        updateFormData({ serviceLocation: selectedOption.value });
    };

    const handleEmrMappingChange = (selectedOption) => {
        updateFormData({ serviceLocation: selectedOption.value });
    };

    const handleEmrSearchesChange = (selectedOption) => {
        updateFormData({ serviceLocation: selectedOption.value });
    };

    const handleEmrDataCollectionChange = (selectedOption) => {
        updateFormData({ serviceLocation: selectedOption.value });
    };

    const handleEmrDataEntryChange = (selectedOption) => {
        updateFormData({ serviceLocation: selectedOption.value });
    };

    const handleMeetingCCChange = (selectedOption) => {
        updateFormData({ serviceLocation: selectedOption.value });
    };

    const handleMeetingNewMemberChange = (selectedOption) => {
        updateFormData({ serviceLocation: selectedOption.value });
    };

    const handleMeetingCIICPARChange = (selectedOption) => {
        updateFormData({ serviceLocation: selectedOption.value });
    };

    const handleMeetingMeetingQIChange = (selectedOption) => {
        updateFormData({ serviceLocation: selectedOption.value });
    };

    return (
        <main className="container mt-5">
            <div className="emr-form">
                <TooltipProvider>
                    <div className="emr-column">
                        <CustomDropdown label={<>Documentation - C&C visit<HelpIcon id="C_C_visit_help" explanation={fieldExplanations['CcVisit']} /></>} id="C_C_visit" name="CcVisit" place_holder="Indirect Time" onChange={handleCcVisitChange} required value={formData.CcVisit || ''} />
                        <CustomDropdown label={<>Documentation - QI template<HelpIcon id="QI_template_help" explanation={fieldExplanations['QiTemplate']} /></>} id="QI_template" name="QiTemplate" place_holder="Indirect Time" onChange={handleQiTemplateChange} required value={formData.QiTemplate || ''} />
                        <CustomDropdown label={<>Documentation - Menu of Service templates<HelpIcon id="Service_templates_help" explanation={fieldExplanations['ServiceTemplates']} /></>} id="Service_templates" name="ServiceTemplates" place_holder="Indirect Time" onChange={handleServiceTemplatesChange} required value={formData.ServiceTemplates || ''} />
                        <CustomDropdown label={<>Documentation - Clinic Processes<HelpIcon id="Documentation_Clinic_Processes_help" explanation={fieldExplanations['DocumentationClinicProcesses']} /></>} id="Documentation_Clinic_Processes" name="DocumentationClinicProcesses" place_holder="Indirect Time" onChange={handleDocumentationClinicProcessesChange} required value={formData.orgTime || ''} />
                        <CustomDropdown label={<>Documentation - Other<HelpIcon id="Documentation_Other_help" explanation={fieldExplanations['DocumentationOther']} /></>} id="Documentation_Other" name="DocumentationOther" place_holder="Indirect Time" onChange={handleDocumentationOtherChange} required value={formData.DocumentationOther || ''} />
                        <CustomDropdown label={<>Scheduling appointments<HelpIcon id="Scheduling_appointments_help" explanation={fieldExplanations['SchedulingAppointments']} /></>} id="Scheduling_appointments" name="SchedulingAppointments" place_holder="Indirect Time" onChange={handleSchedulingAppointmentsChange} required value={formData.SchedulingAppointments || ''} />
                        <DoubleDropdown label={<>Liaise with external partners<HelpIcon id="Liaise_with_external_partners_help" explanation={fieldExplanations['LiaiseWithExternalPartners']} /></>} id="Liaise_with_external_partners" name="LiaiseWithExternalPartners" options={options} />
                        <TripleDropdown label={<>Provider or clinic inquiry<HelpIcon id="Provider_or_clinic_inquiry_help" explanation={fieldExplanations['ProvideOrClinicInquiry']} /></>} id="Provider_or_clinic_inquiry" name="ProvideOrClinicInquiry" options={options} max_count={100} />
                    </div>
                    <div className="emr-column">
                        <TripleDropdown label={<>EMR mapping<HelpIcon id="EMR_mapping_help" explanation={fieldExplanations['EmrMapping']} /></>} id="EMR_mapping" name="EmrMapping" options={options} />
                        <TripleDropdown label={<>EMR searches<HelpIcon id="EMR_searches_help" explanation={fieldExplanations['EmrSearches']} /></>} id="EMR_searches" name="EmrSearches" options={options} />
                        <TripleDropdown label={<>EMR data collection<HelpIcon id="EMR_data_collection_help" explanation={fieldExplanations['EmrDataCollection']} /></>} id="EMR_data_collection" name="EmrDataCollection" options={options} />
                        <TripleDropdown label={<>EMR data entry<HelpIcon id="EMR_data_entry" explanation={fieldExplanations['EmrDataEntry']} /></>} id="EMR_data_entry" name="EmrDataEntry" options={options} />
                        <TripleDropdown label={<>Meeting - C&C<HelpIcon id="Meeting_C_C_help" explanation={fieldExplanations['MeetingCC']} /></>} id="Meeting_C_C" name="MeetingCC" />
                        <TripleDropdown label={<>Meeting - New Member<HelpIcon id="Meeting_New_Member_help" explanation={fieldExplanations['MeetingNewMember']} /></>} id="Meeting_New_Member" name="MeetingNewMember" />
                        <TripleDropdown label={<>Meeting - CII/CPAR<HelpIcon id="Meeting_CII_CPAR_help" explanation={fieldExplanations['MeetingCIICPAR']} /></>} id="Meeting_CII_CPAR" name="MeetingCIICPAR" />
                    </div>
                    <div className="emr-column">
                        <TripleDropdown label={<>Meeting - QI<HelpIcon id="Meeting_QI_help" explanation={fieldExplanations['MeetingQI']} /></>} id="Meeting_QI" name="MeetingQI" />
                        <TripleDropdown label={<>Material dropoff<HelpIcon id="Material_dropoff_help" explanation={fieldExplanations['MaterialDropoff']} /></>} id="Material_dropoff" name="MaterialDropoff" />
                        <TripleDropdown label={<>Clinic Activity - other<HelpIcon id="Clinic_Activity_other_help" explanation={fieldExplanations['ClinicActivityOther']} /></>} id="Clinic_Activity_other" name="ClinicActivityOther" />
                        <TripleDropdown label={<>Recieving training<HelpIcon id="Recieving_training_help" explanation={fieldExplanations['RecievingTraining']} /></>} id="Recieving_training" name="RecievingTraining" />
                        <TripleDropdown label={<>Training material creation<HelpIcon id="Training_material_creation_help" explanation={fieldExplanations['TrainingMaterialCreation']} /></>} id="Training_material_creation" name="TrainingMaterialCreation" />
                        <TripleDropdown label={<>Training clinic administrative staff<HelpIcon id="Training_clinic_adminins_help" explanation={fieldExplanations['TrainingClinicAdmins']} /></>} id="Training_clinic_adminins" name="TrainingClinicAdmins" />
                        <TripleDropdown label={<>Training clinic providers (physician, NP, MDT)<HelpIcon id="Training_clinic_providers_help" explanation={fieldExplanations['TrainingClinicProviders']} /></>} id="Training_clinic_providers" name="TrainingClinicProviders" />
                    </div>
                </TooltipProvider>

            </div>
        </main >
    );
};

export default EMRForm;