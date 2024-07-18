import React, { useContext } from 'react';
import NumberDropdown from './NumberDropdown';
import SelectDropdown from './SelectDropdown';
import TripleDropdown from './TripleDropdown';
import CustomDropdown from './CustomDropdown';
import DoubleDropdown from './DoubleDropdown';
import './HPFForm.css';
import { AppContext } from '../AppContext';
import HelpIcon from '../HelpIcon';
import { TooltipProvider } from 'react-tooltip';

const HPFForm = () => {
    const { formData, updateFormData, fieldExplanations } = useContext(AppContext);

    const handleCcVisitChange = (selectedOption) => {
        updateFormData({ CcVisit: selectedOption.value });
    };

    const handleQiTemplateChange = (selectedOption) => {
        updateFormData({ QiTemplate: selectedOption.value });
    };

    const handleServiceTemplatesChange = (selectedOption) => {
        updateFormData({ ServiceTemplates: selectedOption.value });
    };

    const handleDocumentationClinicProcessesChange = (selectedOption) => {
        updateFormData({ DocumentationClinicProcesses: selectedOption.value });
    };

    const handleDocumentationOtherChange = (selectedOption) => {
        updateFormData({ DocumentationOther: selectedOption.value });
    };

    const handleSchedulingAppointmentsChange = (selectedOption) => {
        updateFormData({ SchedulingAppointments: selectedOption.value });
    };

    const handleLiaiseWithExternalPartnersOnChangeDirectTime = (selectedOption) => {
        updateFormData({ LiaiseWithExternalPartnersDirectTime: selectedOption.value });
    };

    const handleLiaiseWithExternalPartnersOnChangeInirectTime = (selectedOption) => {
        updateFormData({ LiaiseWithExternalPartnersIndirectTime: selectedOption.value });
    };

    const handleProvideOrClinicInquiryOnChangeCount = (selectedOption) => {
        updateFormData({ ProvideOrClinicInquiryCount: selectedOption.value });
    };

    const handleProvideOrClinicInquiryOnChangeDirectTime = (selectedOption) => {
        updateFormData({ ProvideOrClinicInquiryDirectTime: selectedOption.value });
    };

    const handleProvideOrClinicInquiryOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ ProvideOrClinicInquiryIndirectTime: selectedOption.value });
    };

    const handleMeetingCCOnChangeCount = (selectedOption) => {
        updateFormData({ MeetingCCCount: selectedOption.value });
    };

    const handleMeetingCCOnChangeDirectTime = (selectedOption) => {
        updateFormData({ MeetingCCDirectTime: selectedOption.value });
    };

    const handleMeetingCCOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ MeetingCCIndirectTime: selectedOption.value });
    };

    const handleMeetingNewMemberOnChangeCount = (selectedOption) => {
        updateFormData({ MeetingNewMemberCount: selectedOption.value });
    };

    const handleMeetingNewMemberOnChangeDirectTime = (selectedOption) => {
        updateFormData({ MeetingNewMemberCDirectTime: selectedOption.value });
    };

    const handleMeetingNewMemberOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ MeetingNewMemberIndirectTime: selectedOption.value });
    };

    const handleMeetingCIICPAROnChangeCount = (selectedOption) => {
        updateFormData({ MeetingCIICPARCount: selectedOption.value });
    };

    const handleMeetingCIICPAROnChangeDirectTime = (selectedOption) => {
        updateFormData({ MeetingCIICPARCDirectTime: selectedOption.value });
    };

    const handleMeetingCIICPAROnChangeIndirectTime = (selectedOption) => {
        updateFormData({ MeetingCIICPARIndirectTime: selectedOption.value });
    };

    const handleMeetingQIOnChangeCount = (selectedOption) => {
        updateFormData({ MeetingQICount: selectedOption.value });
    };

    const handleMeetingQIOnChangeDirectTime = (selectedOption) => {
        updateFormData({ MeetingQIDirectTime: selectedOption.value });
    };

    const handleMeetingQIOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ MeetingQIIndirectTime: selectedOption.value });
    };

    const handleMaterialDropoffOnChangeCount = (selectedOption) => {
        updateFormData({ MaterialDropoffQICount: selectedOption.value });
    };

    const handleMaterialDropoffOnChangeDirectTime = (selectedOption) => {
        updateFormData({ MaterialDropoffDirectTime: selectedOption.value });
    };

    const handleMaterialDropoffOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ MaterialDropoffIndirectTime: selectedOption.value });
    };


    const handleClinicActivityOtherOnChangeCount = (selectedOption) => {
        updateFormData({ ClinicActivityOtherCount: selectedOption.value });
    };

    const handleClinicActivityOtherOnChangeDirectTime = (selectedOption) => {
        updateFormData({ ClinicActivityOtherDirectTime: selectedOption.value });
    };

    const handleClinicActivityOtherOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ ClinicActivityOtherIndirectTime: selectedOption.value });
    };

    const handleRecievingTrainingOnChangeCount = (selectedOption) => {
        updateFormData({ RecievingTrainingCount: selectedOption.value });
    };

    const handleRecievingTrainingOnChangeDirectTime = (selectedOption) => {
        updateFormData({ RecievingTrainingDirectTime: selectedOption.value });
    };

    const handleRecievingTrainingOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ RecievingTrainingIndirectTime: selectedOption.value });
    };

    const handleTrainingMaterialCreationOnChangeCount = (selectedOption) => {
        updateFormData({ TrainingMaterialCreationCount: selectedOption.value });
    };

    const handleTrainingMaterialCreationOnChangeDirectTime = (selectedOption) => {
        updateFormData({ TrainingMaterialCreationDirectTime: selectedOption.value });
    };

    const handleTrainingMaterialCreationOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ TrainingMaterialCreationIndirectTime: selectedOption.value });
    };


    return (
        <main className="container mt-5">
            <div className="hpf-form">
                <div className="hpf-column">
                    <CustomDropdown
                        label={<>Documentation - C&C visit<HelpIcon id="C_C_visit_help" explanation={fieldExplanations['CcVisit']} /></>}
                        id="C_C_visit"
                        name="CcVisit"
                        place_holder="Indirect Time"
                        onChange={handleCcVisitChange}
                        value={formData.CcVisit || ''} max_count={100}
                    />
                    <CustomDropdown
                        label={<>Documentation - QI template<HelpIcon id="QI_template_help" explanation={fieldExplanations['QiTemplate']} /></>}
                        id="QI_template"
                        name="QiTemplate"
                        place_holder="Indirect Time"
                        onChange={handleQiTemplateChange}
                        value={formData.QiTemplate || ''} max_count={100}
                    />
                    <CustomDropdown
                        label={<>Documentation - Menu of Service templates<HelpIcon id="Service_templates_help" explanation={fieldExplanations['ServiceTemplates']} /></>}
                        id="Service_templates"
                        name="ServiceTemplates"
                        place_holder="Indirect Time"
                        onChange={handleServiceTemplatesChange}
                        value={formData.ServiceTemplates || ''}
                    />
                    <CustomDropdown
                        label={<>Documentation - Clinic Processes<HelpIcon id="Documentation_Clinic_Processes_help" explanation={fieldExplanations['DocumentationClinicProcesses']} /></>}
                        id="Documentation_Clinic_Processes"
                        name="DocumentationClinicProcesses"
                        place_holder="Indirect Time"
                        onChange={handleDocumentationClinicProcessesChange}
                        value={formData.orgTime || ''}
                    />
                    <CustomDropdown
                        label={<>Documentation - Other<HelpIcon id="Documentation_Other_help" explanation={fieldExplanations['DocumentationOther']} /></>}
                        id="Documentation_Other"
                        name="DocumentationOther"
                        place_holder="Indirect Time"
                        onChange={handleDocumentationOtherChange}
                        value={formData.DocumentationOther || ''}
                    />
                    <CustomDropdown
                        label={<>Scheduling appointments<HelpIcon id="Scheduling_appointments_help" explanation={fieldExplanations['SchedulingAppointments']} /></>}
                        id="Scheduling_appointments"
                        name="SchedulingAppointments"
                        place_holder="Indirect Time"
                        onChange={handleSchedulingAppointmentsChange}
                        value={formData.SchedulingAppointments || ''}
                    />
                    <DoubleDropdown
                        label={<>Liaise with external partners<HelpIcon id="Liaise_with_external_partners_help" explanation={fieldExplanations['LiaiseWithExternalPartners']} /></>}
                        id="Liaise_with_external_partners"
                        name="LiaiseWithExternalPartners"
                        onChangeDirectTime={handleLiaiseWithExternalPartnersOnChangeDirectTime}
                        onChangeIndirectTime={handleLiaiseWithExternalPartnersOnChangeInirectTime}
                    />
                    <TripleDropdown
                        label={<>Provider or clinic inquiry<HelpIcon id="Provider_or_clinic_inquiry_help" explanation={fieldExplanations['ProvideOrClinicInquiry']} /></>}
                        id="Provider_or_clinic_inquiry"
                        name="ProvideOrClinicInquiry"
                        max_count={100}
                        onChangeCount={handleProvideOrClinicInquiryOnChangeCount}
                        onChangeDirectTime={handleProvideOrClinicInquiryOnChangeDirectTime}
                        onChangeIndirectTime={handleProvideOrClinicInquiryOnChangeIndirectTime}
                    />
                </div>
                <div className="hpf-column">
                    <TripleDropdown
                        label={<>Meeting - C&C<HelpIcon id="Meeting_C_C_help" explanation={fieldExplanations['MeetingCC']} /></>}
                        id="Meeting_C_C"
                        name="MeetingCC"
                        max_count={20}
                        onChangeCount={handleMeetingCCOnChangeCount}
                        onChangeDirectTime={handleMeetingCCOnChangeDirectTime}
                        onChangeIndirectTime={handleMeetingCCOnChangeIndirectTime}
                    />
                    <TripleDropdown
                        label={<>Meeting - New Member<HelpIcon id="Meeting_New_Member_help" explanation={fieldExplanations['MeetingNewMember']} /></>}
                        id="Meeting_New_Member"
                        name="MeetingNewMember"
                        max_count={20}
                        onChangeCount={handleMeetingNewMemberOnChangeCount}
                        onChangeDirectTime={handleMeetingNewMemberOnChangeDirectTime}
                        onChangeIndirectTime={handleMeetingNewMemberOnChangeIndirectTime}
                    />
                    <TripleDropdown
                        label={<>Meeting - CII/CPAR<HelpIcon id="Meeting_CII_CPAR_help" explanation={fieldExplanations['MeetingCIICPAR']} /></>}
                        id="Meeting_CII_CPAR"
                        name="MeetingCIICPAR"
                        max_count={20}
                        onChangeCount={handleMeetingCIICPAROnChangeCount}
                        onChangeDirectTime={handleMeetingCIICPAROnChangeDirectTime}
                        onChangeIndirectTime={handleMeetingCIICPAROnChangeIndirectTime}
                    />

                    <TripleDropdown
                        label={<>Meeting - QI<HelpIcon id="Meeting_QI_help" explanation={fieldExplanations['MeetingQI']} /></>}
                        id="Meeting_QI"
                        name="MeetingQI"
                        max_count={10}
                        onChangeCount={handleMeetingQIOnChangeCount}
                        onChangeDirectTime={handleMeetingQIOnChangeDirectTime}
                        onChangeIndirectTime={handleMeetingQIOnChangeIndirectTime}
                    />
                    <TripleDropdown
                        label={<>Material dropoff<HelpIcon id="Material_dropoff_help" explanation={fieldExplanations['MaterialDropoff']} /></>}
                        id="Material_dropoff"
                        name="MaterialDropoff"
                        max_count={10}
                        onChangeCount={handleMaterialDropoffOnChangeCount}
                        onChangeDirectTime={handleMaterialDropoffOnChangeDirectTime}
                        onChangeIndirectTime={handleMaterialDropoffOnChangeIndirectTime}
                    />
                    <TripleDropdown
                        label={<>Clinic Activity - other<HelpIcon id="Clinic_Activity_other_help" explanation={fieldExplanations['ClinicActivityOther']} /></>}
                        id="Clinic_Activity_other"
                        name="ClinicActivityOther"
                        max_count={10}
                        onChangeCount={handleClinicActivityOtherOnChangeCount}
                        onChangeDirectTime={handleClinicActivityOtherOnChangeDirectTime}
                        onChangeIndirectTime={handleClinicActivityOtherOnChangeIndirectTime}
                    />

                </div>
                <div className="hpf-column">
                </div>
            </div>
        </main>
    );
};

export default HPFForm;