import React, { useState, useContext } from 'react';
import NumberDropdown from './NumberDropdown';
import SelectDropdown from './SelectDropdown';
import TripleDropdown from './TripleDropdown';
import CustomDropdown from './CustomDropdown';
import DoubleDropdown from './DoubleDropdown';
import { AppContext } from '../AppContext';
import HelpIcon from '../HelpIcon';
import { TooltipProvider } from 'react-tooltip';
import Box from './Box';
import '../TestBox.css';
import './PCCForm.css';

const PCCForm = () => {
    const { formData, updateFormData, fieldExplanations } = useContext(AppContext);

    const handleChange = (field) => (selectedOption) => {
        updateFormData({ [field]: selectedOption.value });
    };

    return (
        <div className="pcc-box-container">
            <Box title="Admin Support" className="pcc-box1">
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
                    value={formData.DocumentationClinicProcesses || ''}
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
            <Box title="Clinic Activity" className="pcc-box2">
                <TripleDropdown
                    label={<>Patient calls <HelpIcon id="Patient_calls_help" explanation={fieldExplanations['PatientCalls']} /></>}
                    id="Patient_calls"
                    name="PatientCalls"
                    max_count={100}
                    onChangeCount={handleChange('PatientCallsCount')}
                    onChangeDirectTime={handleChange('PatientCallsDirectTime')}
                    onChangeIndirectTime={handleChange('PatientCallsIndirectTime')}
                />
                <TripleDropdown
                    label={<>Netcare <HelpIcon id="Netcare_help" explanation={fieldExplanations['Netcare']} /></>}
                    id="Netcare"
                    name="Netcare"
                    max_count={100}
                    onChangeCount={handleChange('NetcareCount')}
                    onChangeDirectTime={handleChange('NetcareDirectTime')}
                    onChangeIndirectTime={handleChange('NetcareIndirectTime')}
                />
                <TripleDropdown
                    label={<>Panel clean up <HelpIcon id="Panel_clean_up_help" explanation={fieldExplanations['PanelCleanUp']} /></>}
                    id="Panel_clean_up"
                    name="PanelCleanUp"
                    max_count={100}
                    onChangeCount={handleChange('PanelCleanUpCount')}
                    onChangeDirectTime={handleChange('PanelCleanUpDirectTime')}
                    onChangeIndirectTime={handleChange('PanelCleanUpIndirectTime')}
                />
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
                <NumberDropdown
                    label={<>Scheduling patient appointment<HelpIcon id="Scheduling_patient_appointment_help" explanation={fieldExplanations['SchedulingPatientAppointmen']} /></>}
                    id="Scheduling_patient_appointment"
                    name="SchedulingPatientAppointment"
                    required={true}
                    max={10}
                    place_holder="Count"
                    onChange={handleChange('SchedulingPatientAppointment')}
                    value={formData.SchedulingPatientAppointment || ''}
                />
                <NumberDropdown
                    label={<>Screening offers - pap test<HelpIcon id="Screening_offers_pap_test_help" explanation={fieldExplanations['ScreeningOffersPapTest']} /></>}
                    id="Screening_offers_pap_test"
                    name="ScreeningOffersPapTest"
                    required={true}
                    max={10}
                    place_holder="Count"
                    onChange={handleChange('ScreeningOffersPapTest')}
                    value={formData.ScreeningOffersPapTest || ''}
                />
                <NumberDropdown
                    label={<>Screening offers- mammogram<HelpIcon id="Screening_offers_mammogram_help" explanation={fieldExplanations['ScreeningOffersMammogram']} /></>}
                    id="Screening_offers_mammogram"
                    name="ScreeningOffersMammogram"
                    required={true}
                    max={10}
                    place_holder="Count"
                    onChange={handleChange('ScreeningOffersMammogram')}
                    value={formData.ScreeningOffersMammogram || ''}
                />
                <NumberDropdown
                    label={<>Screening offers - colorectal<HelpIcon id="Screening_offers_colorectal_help" explanation={fieldExplanations['ScreeningOffersColorectal']} /></>}
                    id="Screening_offers_colorectal"
                    name="ScreeningOffersColorectal"
                    required={true}
                    max={10}
                    place_holder="Count"
                    onChange={handleChange('ScreeningOffersColorectal')}
                    value={formData.ScreeningOffersColorectal || ''}
                />
                <NumberDropdown
                    label={<>Screening offers - annual physical (Cpx)<HelpIcon id="Screening_offers_annual_physical_help" explanation={fieldExplanations['ScreeningOffersAnnualPhysical']} /></>}
                    id="Screening_offers_annual_physical"
                    name="ScreeningOffersAnnualPhysical"
                    required={true}
                    max={10}
                    place_holder="Count"
                    onChange={handleChange('ScreeningOffersAnnualPhysical')}
                    value={formData.ScreeningOffersAnnualPhysical || ''}
                />
                <NumberDropdown
                    label={<>Screening offers - diabetes<HelpIcon id="Screening_offers_diabetesn_help" explanation={fieldExplanations['ScreeningOffersDiabetes']} /></>}
                    id="Screening_offers_diabetesn"
                    name="ScreeningOffersDiabetes"
                    required={true}
                    max={10}
                    place_holder="Count"
                    onChange={handleChange('ScreeningOffersDiabetes')}
                    value={formData.ScreeningOffersDiabetes || ''}
                />
                <NumberDropdown
                    label={<>Screening offers - lipid profile<HelpIcon id="Screening_offers_lipid_profile_help" explanation={fieldExplanations['ScreeningOffersLipidProfile']} /></>}
                    className="number-dropdown"
                    id="Screening_offers_lipid_profile"
                    name="ScreeningOffersLipidProfile"
                    required={true}
                    max={10}
                    place_holder="Count"
                    onChange={handleChange('ScreeningOffersLipidProfile')}
                    value={formData.ScreeningOffersLipidProfile || ''}
                />
                <NumberDropdown
                    label={<>Screening offers - CV risk<HelpIcon id="Screening_offers_CV_risk_help" explanation={fieldExplanations['ScreeningOffersCVRisk']} /></>}
                    id="Screening_offers_CV_risk"
                    name="ScreeningOffersCVRisk"
                    required={true}
                    max={10}
                    place_holder="Count"
                    onChange={handleChange('ScreeningOffersCVRisk')}
                    value={formData.ScreeningOffersCVRisk || ''}
                />
                <NumberDropdown
                    label={<>Screening offers - lung cancer/ tobacco <HelpIcon id="Screening_offers_lung_help" explanation={fieldExplanations['ScreeningOffersLungCancerTobaccoe']} /></>}
                    id="Screening_offers_lung cancer_tobaccoe"
                    name="ScreeningOffersLungCancerTobaccoe"
                    required={true}
                    max={10}
                    place_holder="Count"
                    onChange={handleChange('ScreeningOffersLungCancerTobaccoe')}
                    value={formData.ScreeningOffersLungCancerTobaccoe || ''}
                />
                <NumberDropdown
                    label={<> Screening offers - other<HelpIcon id="Screening_offers_other_help" explanation={fieldExplanations['ScreeningOffersOther']} /></>}
                    id="Screening_offers_other"
                    name="ScreeningOffersOther"
                    required={true}
                    max={10}
                    place_holder="Count"
                    onChange={handleChange('ScreeningOffersOther')}
                    value={formData.ScreeningOffersOther || ''}
                />
            </Box >
            <Box title="Training Activity" className="pcc-box3">
                <CustomDropdown
                    label={<>Training material creation<HelpIcon id="Training_material_creation_help" explanation={fieldExplanations['TrainingMaterialCreation']} /></>}
                    id="Training_material_creation"
                    name="TrainingMaterialCreation"
                    place_holder="Indirect Time"
                    onChange={handleChange('TrainingMaterialCreation')}
                    value={formData.TrainingMaterialCreation || ''}
                />
                <TripleDropdown
                    label={<>Being trained by EMR-S<HelpIcon id="Being_trained_EMRS_help" explanation={fieldExplanations['BeingTrainedByEMR']} /></>}
                    id="Being_trained_EMRS"
                    name="BeingTrainedByEMR"
                    max_count={10}
                    onChangeCount={handleChange('BeingTrainedByEMRCount')}
                    onChangeDirectTime={handleChange('BeingTrainedByEMRDirectTime')}
                    onChangeIndirectTime={handleChange('BeingTrainedByEMRIndirectTime')}
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
                    label={<>Training clinic providers <HelpIcon id="Provider_or_clinic_inquiry_help" explanation={fieldExplanations['ProvideOrClinicInquiry']} /></>}
                    id="Provider_or_clinic_inquiry"
                    name="ProvideOrClinicInquiry"
                    max_count={100}
                    onChangeCount={handleChange('ProvideOrClinicInquiryCount')}
                    onChangeDirectTime={handleChange('ProvideOrClinicInquiryDirectTime')}
                    onChangeIndirectTime={handleChange('ProvideOrClinicInquiryIndirectTime')}
                />
            </Box>
        </div >
    );
};

export default PCCForm;