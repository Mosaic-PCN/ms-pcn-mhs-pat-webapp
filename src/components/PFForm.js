import React, { useState, useContext } from 'react';
import NumberDropdown from './NumberDropdown';
import SelectDropdown from './SelectDropdown';
import TripleDropdown from './TripleDropdown';
import CustomDropdown from './CustomDropdown';
import DoubleDropdown from './DoubleDropdown';
import { AppContext } from '../AppContext';
import './PFForm.css';
import HelpIcon from '../HelpIcon';
import { TooltipProvider } from 'react-tooltip';
import Box from './Box';
import '../TestBox.css';

const PFForm = () => {
    const { formData, updateFormData, fieldExplanations } = useContext(AppContext);
    const handleChange = (field) => (selectedOption) => {
        updateFormData({ [field]: selectedOption.value });
    };

    return (
        <div className="pf-box-container">
            <Box title="Admin Support" className="pf-box1">
                <CustomDropdown
                    label={<>Documentation - C&C visit<HelpIcon id="C_C_visit_help" explanation={fieldExplanations['CcVisit']} /></>}
                    id="C_C_visit"
                    name="CcVisit"
                    place_holder="Indirect Time"
                    onChange={handleChange('CcVisit')}
                    value={formData.CcVisit || ''} max_count={100}
                />
                <CustomDropdown
                    label={<>Documentation - QI template<HelpIcon id="QI_template_help" explanation={fieldExplanations['QiTemplate']} /></>}
                    id="QI_template"
                    name="QiTemplate"
                    place_holder="Indirect Time"
                    onChange={handleChange('QiTemplate')}
                    value={formData.QiTemplate || ''} max_count={100}
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
            <Box title="Clinic Activity" className="pf-box2">
                <TripleDropdown
                    label={<>Meeting - C&C<HelpIcon id="Meeting_C_C_help" explanation={fieldExplanations['MeetingCC']} /></>}
                    id="Meeting_C_C"
                    name="MeetingCC"
                    max_count={20}
                    onChangeCount={handleChange('MeetingCCCount')}
                    onChangeDirectTime={handleChange('MeetingCCDirectTime')}
                    onChangeIndirectTime={handleChange('MeetingCCIndirectTime')}
                />
                <TripleDropdown
                    label={<>Meeting - New Member<HelpIcon id="Meeting_New_Member_help" explanation={fieldExplanations['MeetingNewMember']} /></>}
                    id="Meeting_New_Member"
                    name="MeetingNewMember"
                    max_count={20}
                    onChangeCount={handleChange('MeetingNewMemberCount')}
                    onChangeDirectTime={handleChange('MeetingNewMemberDirectTime')}
                    onChangeIndirectTime={handleChange('MeetingNewMemberIndirectTime')}
                />
                <TripleDropdown
                    label={<>Meeting - CII/CPAR<HelpIcon id="Meeting_CII_CPAR_help" explanation={fieldExplanations['MeetingCIICPAR']} /></>}
                    id="Meeting_CII_CPAR"
                    name="MeetingCIICPAR"
                    max_count={20}
                    onChangeCount={handleChange('MeetingCIICPARCount')}
                    onChangeDirectTime={handleChange('MeetingCIICPARDirectTime')}
                    onChangeIndirectTime={handleChange('MeetingCIICPARIndirectTime')}
                />
                <TripleDropdown
                    label={<>Meeting - QI<HelpIcon id="Meeting_QI_help" explanation={fieldExplanations['MeetingQI']} /></>}
                    id="Meeting_QI"
                    name="MeetingQI"
                    max_count={10}
                    onChangeCount={handleChange('MeetingQICount')}
                    onChangeDirectTime={handleChange('MeetingQIDirectTime')}
                    onChangeIndirectTime={handleChange('MeetingQIIndirectTime')}
                />
                <TripleDropdown
                    label={<>Material dropoff<HelpIcon id="Material_dropoff_help" explanation={fieldExplanations['MaterialDropoff']} /></>}
                    id="Material_dropoff"
                    name="MaterialDropoff"
                    max_count={10}
                    onChangeCount={handleChange('MaterialDropoffCount')}
                    onChangeDirectTime={handleChange('MaterialDropoffDirectTime')}
                    onChangeIndirectTime={handleChange('MaterialDropoffIndirectTime')}
                />
                <TripleDropdown
                    label={<>Clinic Activity - other<HelpIcon id="Clinic_Activity_other_help" explanation={fieldExplanations['ClinicActivityOther']} /></>}
                    id="Clinic_Activity_other"
                    name="ClinicActivityOther"
                    max_count={10}
                    onChangeCount={handleChange('ClinicActivityOtherCount')}
                    onChangeDirectTime={handleChange('ClinicActivityOtherDirectTime')}
                    onChangeIndirectTime={handleChange('ClinicActivityOtherIndirectTime')}
                />
            </Box>
            <Box title="Training Activity" className="pf-box3">
                <TripleDropdown
                    label={<>Recieving training<HelpIcon id="Recieving_training_help" explanation={fieldExplanations['RecievingTraining']} /></>}
                    id="Recieving_training"
                    name="RecievingTraining"
                    max_count={10}
                    onChangeCount={handleChange('RecievingTrainingCount')}
                    onChangeDirectTime={handleChange('BRecievingTrainingDirectTime')}
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
                    label={<>Training clinic administrative staff<HelpIcon id="Training_clinic_administrative_staff_help" explanation={fieldExplanations['TrainingClinicAdminStaff']} /></>}
                    id="Training_clinic_administrative_staff"
                    name="TrainingClinicAdminStaff"
                    max_count={10}
                    onChangeCount={handleChange('TrainingClinicAdminsCount')}
                    onChangeDirectTime={handleChange('TrainingClinicAdminsDirectTime')}
                    onChangeIndirectTime={handleChange('TrainingClinicAdminsIndirectTime')}
                />
                <TripleDropdown
                    label={<>Training clinic providers <HelpIcon id="Provider_or_clinic_inquiry_help" explanation={fieldExplanations['ProvideOrClinicInquiry']} /></>}
                    id="Provider_or_clinic_inquiry"
                    name="ProvideOrClinicInquiry"
                    max_count={100}
                    onChangeCount={handleChange('ProvideOrClinicInquiryCount')}
                    onChangeDirectTime={handleChange('ProvideOrClinicInquiryDirectTime')}
                    onChangeIndirectTime={handleChange('ProvideOrClinicInquiryIndirectTime')}
                />
            </Box>
            <Box title="QI Activity" className="pf-box4">
                <TripleDropdown
                    label={<>QI projects Started <HelpIcon id="QI_projects_Started_help" explanation={fieldExplanations['QIProjectsStarted']} /></>}
                    id="QI_projects_Started"
                    name="QIProjectsStarted"
                    max_count={10}
                    onChangeCount={handleChange('QIProjectsStartedCount')}
                    onChangeDirectTime={handleChange('QIProjectsStartedDirectTime')}
                    onChangeIndirectTime={handleChange('QIProjectsStartedIndirectTime')}
                />
                <TripleDropdown
                    label={<>QI projects adopted<HelpIcon id="QI_projects_adopted_help" explanation={fieldExplanations['QIProjectsAdopted']} /></>}
                    id="QI_projects_adopted"
                    name="QIProjectsAdopted"
                    max_count={10}
                    onChangeCount={handleChange('QIProjectsAdoptedCount')}
                    onChangeDirectTime={handleChange('QIProjectsAdoptedDirectTime')}
                    onChangeIndirectTime={handleChange('QIProjectsAdoptedIndirectTime')}
                />
                <TripleDropdown
                    label={<>QI projects adapted<HelpIcon id="QI_projects_adapted_help" explanation={fieldExplanations['QIProjectsAdapted']} /></>}
                    id="QI_projects_adapted"
                    name="QIProjectsAdapted"
                    max_count={10}
                    onChangeCount={handleChange('QIProjectsAdaptedCount')}
                    onChangeDirectTime={handleChange('QIProjectsAdaptedDirectTime')}
                    onChangeIndirectTime={handleChange('QIProjectsAdaptedIndirectTime')}
                />
                <TripleDropdown
                    label={<>QI projects abandoned<HelpIcon id="Training_clinic_adminins_help" explanation={fieldExplanations['TrainingClinicAdmins']} /></>}
                    id="QI projects abandoned"
                    name="QIProjectsAbandoned"
                    max_count={10}
                    onChangeCount={handleChange('QIProjectsAbandonedCount')}
                    onChangeDirectTime={handleChange('QIProjectsAbandonedDirectTime')}
                    onChangeIndirectTime={handleChange('QIProjectsAbandonedIndirectTime')}
                />
                <TripleDropdown
                    label={<>QI project cancelled<HelpIcon id="QI_project_cancelled_help" explanation={fieldExplanations['QIProjectCancelled']} /></>}
                    id="QI_project_cancelled"
                    name="QIProjectCancelled"
                    max_count={100}
                    onChangeCount={handleChange('QIProjectCancelledCount')}
                    onChangeDirectTime={handleChange('QIProjectCancelledDirectTime')}
                    onChangeIndirectTime={handleChange('QIProjectCancelledIndirectTime')}
                />
            </Box>
        </div >
    );
};

export default PFForm;