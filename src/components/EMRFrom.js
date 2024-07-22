import React, { useContext } from 'react';
import TripleDropdown from './TripleDropdown';
import CustomDropdown from './CustomDropdown';
import DoubleDropdown from './DoubleDropdown';
import { AppContext } from '../AppContext';
import HelpIcon from '../HelpIcon';
import { TooltipProvider } from 'react-tooltip';
import Box from './Box';
import '../TestBox.css';
import './EMRForm.css';

const EMRForm = () => {
    const { formData, updateFormData, fieldExplanations } = useContext(AppContext);

    const yes_no_Options = [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
    ];

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

    const handleEmrMappingOnChangeCount = (selectedOption) => {
        updateFormData({ EmrMappingCount: selectedOption.value });
    };

    const handleEmrMappingOnChangeDirectTime = (selectedOption) => {
        updateFormData({ EmrMappingDirectTime: selectedOption.value });
    };

    const handleEmrMappingOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ EmrMappingIndirectTime: selectedOption.value });
    };

    const handleEmrSearchesOnChangeCount = (selectedOption) => {
        updateFormData({ EmrSearchesCount: selectedOption.value });
    };

    const handleEmrSearchesOnChangeDirectTime = (selectedOption) => {
        updateFormData({ EmrSearchesDirectTime: selectedOption.value });
    };

    const handleEmrSearchesOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ EmrSearchesIndirectTime: selectedOption.value });
    };

    const handleEmrDataCollectionOnChangeCount = (selectedOption) => {
        updateFormData({ EmrDataCollectionCount: selectedOption.value });
    };

    const handleEmrDataCollectionOnChangeDirectTime = (selectedOption) => {
        updateFormData({ EmrDataCollectionDirectTime: selectedOption.value });
    };

    const handleEmrDataCollectionOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ EmrDataCollectionIndirectTime: selectedOption.value });
    };

    const handleEmrDataEntryOnChangeCount = (selectedOption) => {
        updateFormData({ EmrDataEntryCount: selectedOption.value });
    };

    const handleEmrDataEntryOnChangeDirectTime = (selectedOption) => {
        updateFormData({ EmrDataEntryDirectTime: selectedOption.value });
    };

    const handleEmrDataEntryOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ EmrDataEntryIndirectTime: selectedOption.value });
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

    const handleMaterialDropoffOnChangeDirectTime = (selectedOption) => {
        updateFormData({ MaterialDropoffDirectTime: selectedOption.value });
    };

    const handleMaterialDropoffOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ MaterialDropoffIndirectTime: selectedOption.value });
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

    const handleTrainingMaterialCreationChange = (selectedOption) => {
        updateFormData({ TrainingMaterialCreation: selectedOption.value });
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

    return (
        <div className="emr-box-container">
            <Box title="Admin Support" className="emr-box1">
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

            </Box>
            <Box title="Clinic Activity" className="emr-box2">
                <TripleDropdown
                    label={<>EMR mapping<HelpIcon id="EMR_mapping_help" explanation={fieldExplanations['EmrMapping']} /></>}
                    id="EMR_mapping"
                    name="EmrMapping"
                    max_count={20}
                    onChangeCount={handleEmrMappingOnChangeCount}
                    onChangeDirectTime={handleEmrMappingOnChangeDirectTime}
                    onChangeIndirectTime={handleEmrMappingOnChangeIndirectTime}
                />
                <TripleDropdown
                    label={<>EMR searches<HelpIcon id="EMR_searches_help" explanation={fieldExplanations['EmrSearches']} /></>}
                    id="EMR_searches"
                    name="EmrSearches"
                    max_count={20}
                    onChangeCount={handleEmrSearchesOnChangeCount}
                    onChangeDirectTime={handleEmrSearchesOnChangeDirectTime}
                    onChangeIndirectTime={handleEmrSearchesOnChangeIndirectTime}
                />
                <TripleDropdown
                    label={<>EMR data collection<HelpIcon id="EMR_data_collection_help" explanation={fieldExplanations['EmrDataCollection']} /></>}
                    id="EMR_data_collection"
                    name="EmrDataCollection"
                    max_count={20}
                    onChangeCount={handleEmrDataCollectionOnChangeCount}
                    onChangeDirectTime={handleEmrDataCollectionOnChangeDirectTime}
                    onChangeIndirectTime={handleEmrDataCollectionOnChangeIndirectTime}
                />
                <TripleDropdown
                    label={<>EMR data entry<HelpIcon id="EMR_data_entry" explanation={fieldExplanations['EmrDataEntry']} /></>}
                    id="EMR_data_entry"
                    name="EmrDataEntry"
                    max_count={20}
                    onChangeCount={handleEmrDataEntryOnChangeCount}
                    onChangeDirectTime={handleEmrDataEntryOnChangeDirectTime}
                    onChangeIndirectTime={handleEmrDataEntryOnChangeIndirectTime}
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

                <DoubleDropdown
                    label={<>Meeting - C&C<HelpIcon id="Meeting_C_C_help" explanation={fieldExplanations['MeetingCC']} /></>}
                    id="Meeting_C_C"
                    name="MeetingCC"
                    onChangeDirectTime={handleMeetingCCOnChangeDirectTime}
                    onChangeIndirectTime={handleMeetingCCOnChangeIndirectTime}
                />
                <DoubleDropdown
                    label={<>Meeting - CII/CPAR<HelpIcon id="Meeting_CII_CPAR_help" explanation={fieldExplanations['MeetingCIICPAR']} /></>}
                    id="Meeting_CII_CPAR"
                    name="MeetingCIICPAR"
                    onChangeDirectTime={handleMeetingCIICPAROnChangeDirectTime}
                    onChangeIndirectTime={handleMeetingCIICPAROnChangeIndirectTime}
                />
                <DoubleDropdown
                    label={<>Meeting - QI<HelpIcon id="Meeting_QI_help" explanation={fieldExplanations['MeetingQI']} /></>}
                    id="Meeting_QI"
                    name="MeetingQI"
                    onChangeDirectTime={handleMeetingQIOnChangeDirectTime}
                    onChangeIndirectTime={handleMeetingQIOnChangeIndirectTime}
                />
                <DoubleDropdown
                    label={<>Material dropoff<HelpIcon id="Material_dropoff_help" explanation={fieldExplanations['MaterialDropoff']} /></>}
                    id="Material_dropoff"
                    name="MaterialDropoff"
                    onChangeDirectTime={handleMaterialDropoffOnChangeDirectTime}
                    onChangeIndirectTime={handleMaterialDropoffOnChangeIndirectTime}
                />
                <DoubleDropdown
                    label={<>Clinic Activity - other<HelpIcon id="Clinic_Activity_other_help" explanation={fieldExplanations['ClinicActivityOther']} /></>}
                    id="Clinic_Activity_other"
                    name="ClinicActivityOther"
                    onChangeDirectTime={handleClinicActivityOtherOnChangeDirectTime}
                    onChangeIndirectTime={handleClinicActivityOtherOnChangeIndirectTime}
                />
            </Box>
            <Box title="Training Activity" className="emr-box3">
                <TripleDropdown
                    label={<>Recieving training<HelpIcon id="Recieving_training_help" explanation={fieldExplanations['RecievingTraining']} /></>}
                    id="Recieving_training"
                    name="RecievingTraining"
                    max_count={10}
                    onChangeCount={handleRecievingTrainingOnChangeCount}
                    onChangeDirectTime={handleRecievingTrainingOnChangeDirectTime}
                    onChangeIndirectTime={handleRecievingTrainingOnChangeIndirectTime} />
                <CustomDropdown
                    label={<>Training material creation<HelpIcon id="Training_material_creation_help" explanation={fieldExplanations['TrainingMaterialCreation']} /></>}
                    id="Training_material_creation"
                    name="TrainingMaterialCreation"
                    place_holder="Indirect Time"
                    onChange={handleTrainingMaterialCreationChange}
                    value={formData.TrainingMaterialCreation || ''}
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
            </Box>
        </div >
    );
};

export default EMRForm;