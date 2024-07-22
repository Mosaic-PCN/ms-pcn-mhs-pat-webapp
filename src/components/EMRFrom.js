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

    const handleChange = (field) => (selectedOption) => {
        updateFormData({ [field]: selectedOption.value });
    };

    return (
        <div className="emr-box-container">
            <Box title="Admin Support" className="emr-box1">
                <CustomDropdown
                    label={<>Documentation - C&C visit<HelpIcon id="C_C_visit_help" explanation={fieldExplanations['CcVisit']} /></>}
                    id="C_C_visit"
                    name="CcVisit"
                    place_holder="Indirect Time"
                    onChange={handleChange('CcVisit')}
                    value={formData.CcVisit || ''}
                />
                <CustomDropdown
                    label={<>Documentation - QI template<HelpIcon id="QI_template_help" explanation={fieldExplanations['QiTemplate']} /></>}
                    id="QI_template"
                    name="QiTemplate"
                    place_holder="Indirect Time"
                    onChange={handleChange('QiTemplate')}
                    value={formData.QiTemplate || ''}
                />
                <CustomDropdown
                    label={<>Documentation - Menu of Service templates<HelpIcon id="Service_templates_help" explanation={fieldExplanations['ServiceTemplates']} /></>}
                    id="Service_templates"
                    name="ServiceTemplates"
                    place_holder="Indirect Time"
                    onChange={handleChange('ServiceTemplates')}
                    value={formData.ServiceTemplates || ''}
                />
                <CustomDropdown
                    label={<>Documentation - Clinic Processes<HelpIcon id="Documentation_Clinic_Processes_help" explanation={fieldExplanations['DocumentationClinicProcesses']} /></>}
                    id="Documentation_Clinic_Processes"
                    name="DocumentationClinicProcesses"
                    place_holder="Indirect Time"
                    onChange={handleChange('DocumentationClinicProcesses')}
                    value={formData.orgTime || ''}
                />
                <CustomDropdown
                    label={<>Documentation - Other<HelpIcon id="Documentation_Other_help" explanation={fieldExplanations['DocumentationOther']} /></>}
                    id="Documentation_Other"
                    name="DocumentationOther"
                    place_holder="Indirect Time"
                    onChange={handleChange('DocumentationOther')}
                    value={formData.DocumentationOther || ''}
                />
                <CustomDropdown
                    label={<>Scheduling appointments<HelpIcon id="Scheduling_appointments_help" explanation={fieldExplanations['SchedulingAppointments']} /></>}
                    id="Scheduling_appointments"
                    name="SchedulingAppointments"
                    place_holder="Indirect Time"
                    onChange={handleChange('SchedulingAppointments')}
                    value={formData.SchedulingAppointments || ''}
                />
                <DoubleDropdown
                    label={<>Liaise with external partners<HelpIcon id="Liaise_with_external_partners_help" explanation={fieldExplanations['LiaiseWithExternalPartners']} /></>}
                    id="Liaise_with_external_partners"
                    name="LiaiseWithExternalPartners"
                    onChangeDirectTime={handleChange('LiaiseWithExternalPartnersDirectTime')}
                    onChangeIndirectTime={handleChange('LiaiseWithExternalPartnersIndirectTime')}
                />
                <TripleDropdown
                    label={<>Provider or clinic inquiry<HelpIcon id="Provider_or_clinic_inquiry_help" explanation={fieldExplanations['ProvideOrClinicInquiry']} /></>}
                    id="Provider_or_clinic_inquiry"
                    name="ProvideOrClinicInquiry"
                    max_count={100}
                    onChangeCount={handleChange('ProvideOrClinicInquiryCount')}
                    onChangeDirectTime={handleChange('ProvideOrClinicInquiryDirectTime')}
                    onChangeIndirectTime={handleChange('ProvideOrClinicInquiryIndirectTime')}
                />
            </Box>
            <Box title="Clinic Activity" className="emr-box2">
                <TripleDropdown
                    label={<>EMR mapping<HelpIcon id="EMR_mapping_help" explanation={fieldExplanations['EmrMapping']} /></>}
                    id="EMR_mapping"
                    name="EmrMapping"
                    max_count={20}
                    onChangeCount={handleChange('PatientCallsCount')}
                    onChangeDirectTime={handleChange('PatientCallsDirectTime')}
                    onChangeIndirectTime={handleChange('PatientCallsIndirectTime')}
                />
                <TripleDropdown
                    label={<>EMR searches<HelpIcon id="EMR_searches_help" explanation={fieldExplanations['EmrSearches']} /></>}
                    id="EMR_searches"
                    name="EmrSearches"
                    max_count={20}
                    onChangeCount={handleChange('PatientCallsCount')}
                    onChangeDirectTime={handleChange('PatientCallsDirectTime')}
                    onChangeIndirectTime={handleChange('PatientCallsIndirectTime')}
                />
                <TripleDropdown
                    label={<>EMR data collection<HelpIcon id="EMR_data_collection_help" explanation={fieldExplanations['EmrDataCollection']} /></>}
                    id="EMR_data_collection"
                    name="EmrDataCollection"
                    max_count={20}
                    onChangeCount={handleChange('PatientCallsCount')}
                    onChangeDirectTime={handleChange('PatientCallsDirectTime')}
                    onChangeIndirectTime={handleChange('PatientCallsIndirectTime')}
                />
                <TripleDropdown
                    label={<>EMR data entry<HelpIcon id="EMR_data_entry" explanation={fieldExplanations['EmrDataEntry']} /></>}
                    id="EMR_data_entry"
                    name="EmrDataEntry"
                    max_count={20}
                    onChangeCount={handleChange('PatientCallsCount')}
                    onChangeDirectTime={handleChange('PatientCallsDirectTime')}
                    onChangeIndirectTime={handleChange('PatientCallsIndirectTime')}
                />
                <TripleDropdown
                    label={<>Meeting - New Member<HelpIcon id="Meeting_New_Member_help" explanation={fieldExplanations['MeetingNewMember']} /></>}
                    id="Meeting_New_Member"
                    name="MeetingNewMember"
                    max_count={20}
                    onChangeCount={handleChange('PatientCallsCount')}
                    onChangeDirectTime={handleChange('PatientCallsDirectTime')}
                    onChangeIndirectTime={handleChange('PatientCallsIndirectTime')}
                />

                <DoubleDropdown
                    label={<>Meeting - C&C<HelpIcon id="Meeting_C_C_help" explanation={fieldExplanations['MeetingCC']} /></>}
                    id="Meeting_C_C"
                    name="MeetingCC"
                    onChangeDirectTime={handleChange('MeetingCCDirectTime')}
                    onChangeIndirectTime={handleChange('MeetingCCIndirectTime')}
                />
                <DoubleDropdown
                    label={<>Meeting - CII/CPAR<HelpIcon id="Meeting_CII_CPAR_help" explanation={fieldExplanations['MeetingCIICPAR']} /></>}
                    id="Meeting_CII_CPAR"
                    name="MeetingCIICPAR"
                    onChangeDirectTime={handleChange('MeetingCIICPARDirectTime')}
                    onChangeIndirectTime={handleChange('MeetingCIICPARIndirectTime')}
                />
                <DoubleDropdown
                    label={<>Meeting - QI<HelpIcon id="Meeting_QI_help" explanation={fieldExplanations['MeetingQI']} /></>}
                    id="Meeting_QI"
                    name="MeetingQI"
                    onChangeDirectTime={handleChange('MeetingQIDirectTime')}
                    onChangeIndirectTime={handleChange('MeetingQIIndirectTime')}
                />
                <DoubleDropdown
                    label={<>Material dropoff<HelpIcon id="Material_dropoff_help" explanation={fieldExplanations['MaterialDropoff']} /></>}
                    id="Material_dropoff"
                    name="MaterialDropoff"
                    onChangeDirectTime={handleChange('MaterialDropoffDirectTime')}
                    onChangeIndirectTime={handleChange('MaterialDropoffIndirectTime')}
                />
                <DoubleDropdown
                    label={<>Clinic Activity - other<HelpIcon id="Clinic_Activity_other_help" explanation={fieldExplanations['ClinicActivityOther']} /></>}
                    id="Clinic_Activity_other"
                    name="ClinicActivityOther"
                    onChangeDirectTime={handleChange('ClinicActivityOtherDirectTime')}
                    onChangeIndirectTime={handleChange('ClinicActivityOtherIndirectTime')}
                />
            </Box>
            <Box title="Training Activity" className="emr-box3">
                <TripleDropdown
                    label={<>Recieving training<HelpIcon id="Recieving_training_help" explanation={fieldExplanations['RecievingTraining']} /></>}
                    id="Recieving_training"
                    name="RecievingTraining"
                    max_count={10}
                    onChangeCount={handleChange('RecievingTrainingCount')}
                    onChangeDirectTime={handleChange('RecievingTrainingDirectTime')}
                    onChangeIndirectTime={handleChange('RecievingTrainingIndirectTime')}
                />
                <CustomDropdown
                    label={<>Training material creation<HelpIcon id="Training_material_creation_help" explanation={fieldExplanations['TrainingMaterialCreation']} /></>}
                    id="Training_material_creation"
                    name="TrainingMaterialCreation"
                    place_holder="Indirect Time"
                    onChange={handleChange('TrainingMaterialCreation')}
                    value={formData.TrainingMaterialCreation || ''}
                />
                <TripleDropdown
                    label={<>Training clinic administrative staff<HelpIcon id="Training_clinic_admins_help" explanation={fieldExplanations['TrainingClinicAdmins']} /></>}
                    id="Training_clinic_admins"
                    name="TrainingClinicAdmins"
                    max_count={10}
                    onChangeCount={handleChange('TrainingClinicAdminsCount')}
                    onChangeDirectTime={handleChange('TrainingClinicAdminsDirectTime')}
                    onChangeIndirectTime={handleChange('TrainingClinicAdminsIndirectTime')}
                />
                <TripleDropdown
                    label={<>Training clinic providers (physician, NP, MDT)<HelpIcon id="Training_clinic_providers_help" explanation={fieldExplanations['TrainingClinicProviders']} /></>}
                    id="Training_clinic_providers"
                    name="TrainingClinicProviders"
                    max_count={100}
                    onChangeCount={handleChange('TrainingClinicProvidersCount')}
                    onChangeDirectTime={handleChange('TrainingClinicProvidersDirectTime')}
                    onChangeIndirectTime={handleChange('TrainingClinicProvidersIndirectTime')}
                />
            </Box>
        </div >
    );
};

export default EMRForm;