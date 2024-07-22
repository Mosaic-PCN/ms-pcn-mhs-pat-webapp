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

    const handleTrainingClinicAdminsOnChangeCount = (selectedOption) => {
        updateFormData({ TrainingClinicAdminsCount: selectedOption.value });
    };

    const handleTrainingClinicAdminsOnChangeDirectTime = (selectedOption) => {
        updateFormData({ TrainingClinicAdminsDirectTime: selectedOption.value });
    };

    const handleTrainingClinicAdminsOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ TrainingClinicAdminsIndirectTime: selectedOption.value });
    };

    const handleTrainingClinicProvidersOnChangeCount = (selectedOption) => {
        updateFormData({ TrainingClinicProvidersCount: selectedOption.value });
    };

    const handleTrainingClinicProvidersOnChangeDirectTime = (selectedOption) => {
        updateFormData({ TrainingClinicProvidersDirectTime: selectedOption.value });
    };

    const handleTrainingClinicProvidersOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ TrainingClinicProvidersIndirectTime: selectedOption.value });
    };

    const handleQIProjectsStartedOnChangeCount = (selectedOption) => {
        updateFormData({ QIProjectsStartedCount: selectedOption.value });
    };

    const handleQIProjectsStartedOnChangeDirectTime = (selectedOption) => {
        updateFormData({ QIProjectsStartedDirectTime: selectedOption.value });
    };

    const handleQIProjectsStartedOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ QIProjectsStartedIndirectTime: selectedOption.value });
    };

    const handleQIProjectsAdoptedOnChangeCount = (selectedOption) => {
        updateFormData({ QIProjectsAdoptedCount: selectedOption.value });
    };

    const handleQIProjectsAdoptedOnChangeDirectTime = (selectedOption) => {
        updateFormData({ QIProjectsAdoptedDirectTime: selectedOption.value });
    };

    const handleQIProjectsAdoptedOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ QIProjectsAdoptedIndirectTime: selectedOption.value });
    };

    const handleQIProjectCancelledOnChangeCount = (selectedOption) => {
        updateFormData({ QIProjectCancelledCount: selectedOption.value });
    };

    const handleQIProjectCancelledOnChangeDirectTime = (selectedOption) => {
        updateFormData({ QIProjectCancelledDirectTime: selectedOption.value });
    };

    const handleQIProjectCancelledOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ QIProjectCancelledIndirectTime: selectedOption.value });
    };

    const handleQIProjectsAdaptedOnChangeCount = (selectedOption) => {
        updateFormData({ QIProjectsAdaptedCount: selectedOption.value });
    };

    const handleQIProjectsAdaptedOnChangeDirectTime = (selectedOption) => {
        updateFormData({ QIProjectsAdaptedDirectTime: selectedOption.value });
    };

    const handleQIProjectsAdaptedOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ QIProjectsAdaptedIndirectTime: selectedOption.value });
    };

    const handleCollaborationWithEvalPartnersOnChangeCount = (selectedOption) => {
        updateFormData({ CollaborationWithEvalPartnersCount: selectedOption.value });
    };

    const handleCollaborationWithEvalPartnersOnChangeDirectTime = (selectedOption) => {
        updateFormData({ CollaborationWithEvalPartnersDirectTime: selectedOption.value });
    };

    const handleCollaborationWithEvalPartnersOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ CollaborationWithEvalPartnersIndirectTime: selectedOption.value });
    };

    const handleQEnvironmentalScanAnalysisOnChangeCount = (selectedOption) => {
        updateFormData({ EnvironmentalScanAnalysisPartnersCount: selectedOption.value });
    };

    const handleEnvironmentalScanAnalysisOnChangeDirectTime = (selectedOption) => {
        updateFormData({ EnvironmentalScanAnalysisDirectTime: selectedOption.value });
    };

    const handleEnvironmentalScanAnalysisOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ EnvironmentalScanAnalysisIndirectTime: selectedOption.value });
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
                </div>
                <div className="hpf-column">
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
                    <TripleDropdown
                        label={<>Recieving training<HelpIcon id="Recieving_training_help" explanation={fieldExplanations['RecievingTraining']} /></>}
                        id="Recieving_training"
                        name="RecievingTraining"
                        max_count={10}
                        onChangeCount={handleRecievingTrainingOnChangeCount}
                        onChangeDirectTime={handleRecievingTrainingOnChangeDirectTime}
                        onChangeIndirectTime={handleRecievingTrainingOnChangeIndirectTime} />
                    <TripleDropdown
                        label={<>Training material creation<HelpIcon id="Training_material_creation_help" explanation={fieldExplanations['TrainingMaterialCreation']} /></>}
                        id="Training_material_creation"
                        name="TrainingMaterialCreation"
                        max_count={10}
                        onChangeCount={handleTrainingMaterialCreationOnChangeCount}
                        onChangeDirectTime={handleTrainingMaterialCreationOnChangeDirectTime}
                        onChangeIndirectTime={handleTrainingMaterialCreationOnChangeIndirectTime}
                    />
                    <TripleDropdown
                        label={<>Training clinic administrative staff<HelpIcon id="Training_clinic_adminins_help" explanation={fieldExplanations['TrainingClinicAdmins']} /></>}
                        id="Training_clinic_adminins"
                        name="TrainingClinicAdmins"
                        max_count={10}
                        onChangeCount={handleTrainingClinicAdminsOnChangeCount}
                        onChangeDirectTime={handleTrainingClinicAdminsOnChangeDirectTime}
                        onChangeIndirectTime={handleTrainingClinicAdminsOnChangeIndirectTime}
                    />
                    <TripleDropdown
                        label={<>Training clinic providers (physician, NP, MDT)<HelpIcon id="Training_clinic_providers_help" explanation={fieldExplanations['TrainingClinicProviders']} /></>}
                        id="Training_clinic_providers"
                        name="TrainingClinicProviders"
                        max_count={100}
                        onChangeCount={handleTrainingClinicProvidersOnChangeCount}
                        onChangeDirectTime={handleTrainingClinicProvidersOnChangeDirectTime}
                        onChangeIndirectTime={handleTrainingClinicProvidersOnChangeIndirectTime}
                    />
                </div>
                <div className="hpf-column">
                    <TripleDropdown
                        label={<>QI projects Started <HelpIcon id="QI_projects_Started_help" explanation={fieldExplanations['QIProjectsStarted']} /></>}
                        id="QI_projects_Started"
                        name="QIProjectsStarted"
                        max_count={10}
                        onChangeCount={handleQIProjectsStartedOnChangeCount}
                        onChangeDirectTime={handleQIProjectsStartedOnChangeDirectTime}
                        onChangeIndirectTime={handleQIProjectsStartedOnChangeIndirectTime}
                    />
                    <TripleDropdown
                        label={<>QI projects adopted<HelpIcon id="QI_projects_adopted_help" explanation={fieldExplanations['QIProjectsAdopted']} /></>}
                        id="QI_projects_adopted"
                        name="QIProjectsAdopted"
                        max_count={10}
                        onChangeCount={handleQIProjectsAdoptedOnChangeCount}
                        onChangeDirectTime={handleQIProjectsAdoptedOnChangeDirectTime}
                        onChangeIndirectTime={handleQIProjectsAdoptedOnChangeIndirectTime} />
                    <TripleDropdown
                        label={<>QI projects adapted<HelpIcon id="QI_projects_adapted_help" explanation={fieldExplanations['QIProjectsAdapted']} /></>}
                        id="QI_projects_adapted"
                        name="QIProjectsAdapted"
                        max_count={10}
                        onChangeCount={handleQIProjectsAdaptedOnChangeCount}
                        onChangeDirectTime={handleQIProjectsAdaptedOnChangeDirectTime}
                        onChangeIndirectTime={handleQIProjectsAdaptedOnChangeIndirectTime}
                    />
                    <TripleDropdown
                        label={<>QI projects abandoned<HelpIcon id="Training_clinic_adminins_help" explanation={fieldExplanations['TrainingClinicAdmins']} /></>}
                        id="QI projects abandoned"
                        name="QI projects abandoned"
                        max_count={10}
                        onChangeCount={handleTrainingClinicAdminsOnChangeCount}
                        onChangeDirectTime={handleTrainingClinicAdminsOnChangeDirectTime}
                        onChangeIndirectTime={handleTrainingClinicAdminsOnChangeIndirectTime}
                    />
                    <TripleDropdown
                        label={<>QI project cancelled<HelpIcon id="QI_project_cancelled_help" explanation={fieldExplanations['QIProjectCancelled']} /></>}
                        id="QI_project_cancelled"
                        name="QIProjectCancelled"
                        max_count={100}
                        onChangeCount={handleQIProjectCancelledOnChangeCount}
                        onChangeDirectTime={handleQIProjectCancelledOnChangeDirectTime}
                        onChangeIndirectTime={handleQIProjectCancelledOnChangeIndirectTime}
                    />
                    <TripleDropdown
                        label={<>Collaboration with eval partners<HelpIcon id="Collaboration_with_eval_partners_help" explanation={fieldExplanations['CollaborationWithEvalPartners']} /></>}
                        id="Collaboration_with_eval_partners"
                        name="CollaborationWithEvalPartners"
                        max_count={10}
                        onChangeCount={handleCollaborationWithEvalPartnersOnChangeCount}
                        onChangeDirectTime={handleCollaborationWithEvalPartnersOnChangeDirectTime}
                        onChangeIndirectTime={handleCollaborationWithEvalPartnersOnChangeIndirectTime} />
                    <TripleDropdown
                        label={<>Environmental scan/situational analysis<HelpIcon id="Environmental_scan_analysis_help" explanation={fieldExplanations['EnvironmentalScanAnalysis']} /></>}
                        id="Environmental_scan_analysis"
                        name="EnvironmentalScanAnalysis"
                        max_count={10}
                        onChangeCount={handleQEnvironmentalScanAnalysisOnChangeCount}
                        onChangeDirectTime={handleEnvironmentalScanAnalysisOnChangeDirectTime}
                        onChangeIndirectTime={handleEnvironmentalScanAnalysisOnChangeIndirectTime}
                    />
                    <TripleDropdown
                        label={<>Data analysis<HelpIcon id="Data_analysisd_help" explanation={fieldExplanations['DataAnalysis']} /></>}
                        id="Data_analysisd"
                        name="DataAnalysis"
                        max_count={10}
                        onChangeCount={handleTrainingClinicAdminsOnChangeCount}
                        onChangeDirectTime={handleTrainingClinicAdminsOnChangeDirectTime}
                        onChangeIndirectTime={handleTrainingClinicAdminsOnChangeIndirectTime}
                    />
                    <TripleDropdown
                        label={<>Creating evaluation frameworks<HelpIcon id="QI_project_cancelled_help" explanation={fieldExplanations['QIProjectCancelled']} /></>}
                        id="QI_project_cancelled"
                        name="QIProjectCancelled"
                        max_count={100}
                        onChangeCount={handleQIProjectCancelledOnChangeCount}
                        onChangeDirectTime={handleQIProjectCancelledOnChangeDirectTime}
                        onChangeIndirectTime={handleQIProjectCancelledOnChangeIndirectTime}
                    />
                </div>
            </div>
        </main>
    );
};

export default HPFForm;