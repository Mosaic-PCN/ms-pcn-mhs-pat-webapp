import React, { useState, useContext } from 'react';
import NumberDropdown from './NumberDropdown';
import SelectDropdown from './SelectDropdown';
import TripleDropdown from './TripleDropdown';
import CustomDropdown from './CustomDropdown';
import DoubleDropdown from './DoubleDropdown';
import { AppContext } from '../AppContext';
import HelpIcon from '../HelpIcon';
import { TooltipProvider } from 'react-tooltip';
import './PCCForm.css';

const PCCForm = () => {
    const { formData, updateFormData, fieldExplanations } = useContext(AppContext);

    const yes_no_Options = [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'non' },
    ];

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
    ];

    const handleChange = (field) => (selectedOption) => {
        updateFormData({ [field]: selectedOption.value });
    };

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

    const handleTrainingMaterialCreationOnChangeCount = (selectedOption) => {
        updateFormData({ TrainingMaterialCreationCount: selectedOption.value });
    };

    const handleTrainingMaterialCreationOnChangeDirectTime = (selectedOption) => {
        updateFormData({ TrainingMaterialCreationDirectTime: selectedOption.value });
    };

    const handleTrainingMaterialCreationOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ TrainingMaterialCreationIndirectTime: selectedOption.value });
    };

    const handleBeingTrainedByEMROnChangeCount = (selectedOption) => {
        updateFormData({ TrainingClinicProvidersCount: selectedOption.value });
    };

    const handleBeingTrainedByEMROnChangeDirectTime = (selectedOption) => {
        updateFormData({ TrainingClinicProvidersDirectTime: selectedOption.value });
    };

    const handleBeingTrainedByEMROnChangeInirectTime = (selectedOption) => {
        updateFormData({ TrainingClinicProvidersIndirectTime: selectedOption.value });
    };

    const handleTrainingClinicAdministrativeStaffOnChangeCount = (selectedOption) => {
        updateFormData({ TrainingClinicProvidersCount: selectedOption.value });
    };

    const handleTrainingClinicAdministrativeStaffOnChangeDirectTime = (selectedOption) => {
        updateFormData({ TrainingClinicProvidersDirectTime: selectedOption.value });
    };

    const handleTrainingClinicAdministrativeStaffOnChangeInirectTime = (selectedOption) => {
        updateFormData({ TrainingClinicProvidersIndirectTime: selectedOption.value });
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

    const handlePatientCallsOnChangeCount = (selectedOption) => {
        updateFormData({ ClinicActivityOtherCount: selectedOption.value });
    };

    const handlePatientCallsOnChangeDirectTime = (selectedOption) => {
        updateFormData({ ClinicActivityOtherDirectTime: selectedOption.value });
    };

    const handlePatientCallsOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ ClinicActivityOtherIndirectTime: selectedOption.value });
    };

    const handleNetcareOnChangeCount = (selectedOption) => {
        updateFormData({ ClinicActivityOtherCount: selectedOption.value });
    };

    const handleNetcareOnChangeDirectTime = (selectedOption) => {
        updateFormData({ ClinicActivityOtherDirectTime: selectedOption.value });
    };

    const handleNetcareOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ ClinicActivityOtherIndirectTime: selectedOption.value });
    };

    const handlePanelCleanUpOnChangeCount = (selectedOption) => {
        updateFormData({ ClinicActivityOtherCount: selectedOption.value });
    };

    const handlePanelCleanUpOnChangeDirectTime = (selectedOption) => {
        updateFormData({ ClinicActivityOtherDirectTime: selectedOption.value });
    };

    const handlePanelCleanUpOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ ClinicActivityOtherIndirectTime: selectedOption.value });
    };

    const handleSchedulingPatientAppointment = (selectedOption) => {
        updateFormData({ SchedulingPatientAppointmen: selectedOption.value });
    };

    const handleScreeningOffersPapTest = (selectedOption) => {
        updateFormData({ SchedulingPatientAppointmen: selectedOption.value });
    };

    const handleScreeningOffersMammogram = (selectedOption) => {
        updateFormData({ SchedulingPatientAppointmen: selectedOption.value });
    };

    const handleScreeningOffersColorectal = (selectedOption) => {
        updateFormData({ SchedulingPatientAppointmen: selectedOption.value });
    };

    const handleScreeningOffersAnnualPhysical = (selectedOption) => {
        updateFormData({ SchedulingPatientAppointmen: selectedOption.value });
    };

    const handleScreeningOffersDiabetes = (selectedOption) => {
        updateFormData({ SchedulingPatientAppointmen: selectedOption.value });
    };

    const handleScreeningOffersLipidProfile = (selectedOption) => {
        updateFormData({ SchedulingPatientAppointmen: selectedOption.value });
    };

    const handleScreeningOffersLungCancerTobaccoe = (selectedOption) => {
        updateFormData({ SchedulingPatientAppointmen: selectedOption.value });
    };

    const handleScreeningOffersOthere = (selectedOption) => {
        updateFormData({ SchedulingPatientAppointmen: selectedOption.value });
    };

    const handleScreeningOffersCVRisk = (selectedOption) => {
        updateFormData({ SchedulingPatientAppointmen: selectedOption.value });
    };



    return (
        <main className="container mt-5">
            <div className="pcc-form">
                <div className="pcc-column">
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
                        label={<>Training material creation<HelpIcon id="Training_material_creation_help" explanation={fieldExplanations['TrainingMaterialCreation']} /></>}
                        id="Training_material_creation"
                        name="TrainingMaterialCreation"
                        max_count={10}
                        onChangeCount={handleTrainingMaterialCreationOnChangeCount}
                        onChangeDirectTime={handleTrainingMaterialCreationOnChangeDirectTime}
                        onChangeIndirectTime={handleTrainingMaterialCreationOnChangeIndirectTime}
                    />
                    <TripleDropdown
                        label={<>Being trained by EMR-S<HelpIcon id="Being_trained_EMRS_help" explanation={fieldExplanations['BeingTrainedByEMR']} /></>}
                        id="Being_trained_EMRS"
                        name="BeingTrainedByEMR"
                        max_count={10}
                        onChangeCount={handleBeingTrainedByEMROnChangeCount}
                        onChangeDirectTime={handleBeingTrainedByEMROnChangeDirectTime}
                        onChangeIndirectTime={handleBeingTrainedByEMROnChangeInirectTime}
                    />
                    <TripleDropdown
                        label={<>Training clinic administrative staff<HelpIcon id="Training_clinic_administrative_staff_help" explanation={fieldExplanations['TrainingClinicAdministrativeStaff']} /></>}
                        id="Training_clinic_administrative_staff"
                        name="TrainingClinicAdministrativeStaff"
                        max_count={10}
                        onChangeCount={handleTrainingClinicAdministrativeStaffOnChangeCount}
                        onChangeDirectTime={handleTrainingClinicAdministrativeStaffOnChangeDirectTime}
                        onChangeIndirectTime={handleTrainingClinicAdministrativeStaffOnChangeInirectTime}
                    />
                    <TripleDropdown
                        label={<>Training clinic providers <HelpIcon id="Provider_or_clinic_inquiry_help" explanation={fieldExplanations['ProvideOrClinicInquiry']} /></>}
                        id="Provider_or_clinic_inquiry"
                        name="ProvideOrClinicInquiry"
                        max_count={100}
                        onChangeCount={handleProvideOrClinicInquiryOnChangeCount}
                        onChangeDirectTime={handleProvideOrClinicInquiryOnChangeDirectTime}
                        onChangeIndirectTime={handleProvideOrClinicInquiryOnChangeIndirectTime}
                    />
                </div>
                <div className="pcc-column">
                    <TripleDropdown
                        label={<>Patient calls <HelpIcon id="Patient_calls_help" explanation={fieldExplanations['PatientCalls']} /></>}
                        id="Patient_calls"
                        name="PatientCalls"
                        max_count={100}
                        onChangeCount={handlePatientCallsOnChangeCount}
                        onChangeDirectTime={handlePatientCallsOnChangeDirectTime}
                        onChangeIndirectTime={handlePatientCallsOnChangeIndirectTime}
                    />

                    <TripleDropdown
                        label={<>Netcare <HelpIcon id="Netcare_help" explanation={fieldExplanations['Netcare']} /></>}
                        id="Netcare"
                        name="Netcare"
                        max_count={100}
                        onChangeCount={handleNetcareOnChangeCount}
                        onChangeDirectTime={handleNetcareOnChangeDirectTime}
                        onChangeIndirectTime={handleNetcareOnChangeIndirectTime}
                    />
                    <TripleDropdown
                        label={<>Panel clean up <HelpIcon id="Panel_clean_up_help" explanation={fieldExplanations['PanelCleanUp']} /></>}
                        id="Panel_clean_up"
                        name="PanelCleanUp"
                        max_count={100}
                        onChangeCount={handlePanelCleanUpOnChangeCount}
                        onChangeDirectTime={handlePanelCleanUpOnChangeDirectTime}
                        onChangeIndirectTime={handlePanelCleanUpOnChangeIndirectTime}
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
                <div className="pcc-column">
                    <div className="form-group">
                        <label htmlFor="PCC_Clinic">
                            Scheduling patient appointment <HelpIcon explanation={fieldExplanations.SchedulingPatientAppointmen} />
                        </label>
                        <NumberDropdown
                            className="number-dropdown"
                            id="Scheduling_patient_appointment"
                            name="SchedulingPatientAppointment"
                            required={true}
                            max={10}
                            place_holder="Count"
                            onChange={handleSchedulingPatientAppointment}
                            value={formData.SchedulingPatientAppointment || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="PCC_Clinic">
                            Screening offers - pap test <HelpIcon explanation={fieldExplanations.ScreeningOffersPapTest} />
                        </label>
                        <NumberDropdown
                            className="number-dropdown"
                            id="Screening_offers_pap_test"
                            name="ScreeningOffersPapTest"
                            required={true}
                            max={10}
                            place_holder="Count"
                            onChange={handleScreeningOffersPapTest}
                            value={formData.ScreeningOffersPapTest || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="PCC_Clinic">
                            Screening offers- mammogram <HelpIcon explanation={fieldExplanations.ScreeningOffersMammogram} />
                        </label>
                        <NumberDropdown
                            className="number-dropdown"
                            id="Screening_offers_mammogram"
                            name="ScreeningOffersMammogram"
                            required={true}
                            max={10}
                            place_holder="Count"
                            onChange={handleScreeningOffersMammogram}
                            value={formData.ScreeningOffersMammogram || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="PCC_Clinic">
                            Screening offers - colorectal <HelpIcon explanation={fieldExplanations.ScreeningOffersColorectal} />
                        </label>
                        <NumberDropdown
                            className="number-dropdown"
                            id="Screening_offers_colorectal"
                            name="ScreeningOffersColorectal"
                            required={true}
                            max={10}
                            place_holder="Count"
                            onChange={handleScreeningOffersColorectal}
                            value={formData.ScreeningOffersColorectal || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="PCC_Clinic">
                            Screening offers - annual physical (Cpx) <HelpIcon explanation={fieldExplanations.ScreeningOffersAnnualPhysical} />
                        </label>
                        <NumberDropdown
                            className="number-dropdown"
                            id="Screening_offers_annual_physical"
                            name="ScreeningOffersAnnualPhysical"
                            required={true}
                            max={10}
                            place_holder="Count"
                            onChange={handleScreeningOffersAnnualPhysical}
                            value={formData.ScreeningOffersAnnualPhysical || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="PCC_Clinic">
                            Screening offers - diabetes" <HelpIcon explanation={fieldExplanations.ScreeningOffersDiabetes} />
                        </label>
                        <NumberDropdown
                            className="number-dropdown"
                            id="Screening_offers_diabetesn"
                            name="ScreeningOffersDiabetes"
                            required={true}
                            max={10}
                            place_holder="Count"
                            onChange={handleScreeningOffersDiabetes}
                            value={formData.ScreeningOffersDiabetes || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="PCC_Clinic">
                            Screening offers - lipid profile <HelpIcon explanation={fieldExplanations.ScreeningOffersLipidProfile} />
                        </label>
                        <NumberDropdown
                            className="number-dropdown"
                            id="Screening_offers_lipid_profile"
                            name="ScreeningOffersLipidProfile"
                            required={true}
                            max={10}
                            place_holder="Count"
                            onChange={handleScreeningOffersLipidProfile}
                            value={formData.ScreeningOffersLipidProfile || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="PCC_Clinic">
                            Screening offers - CV risk <HelpIcon explanation={fieldExplanations.ScreeningOffersCVRisk} />
                        </label>
                        <NumberDropdown
                            className="number-dropdown"
                            id="Screening_offers_CV_risk"
                            name="ScreeningOffersCVRisk"
                            required={true}
                            max={10}
                            place_holder="Count"
                            onChange={handleScreeningOffersCVRisk}
                            value={formData.ScreeningOffersCVRisk || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="PCC_Clinic">
                            Screening offers - lung cancer/ tobacco <HelpIcon explanation={fieldExplanations.ScreeningOffersLungCancerTobaccoe} />
                        </label>
                        <NumberDropdown
                            className="number-dropdown"
                            id="Screening_offers_lung cancer_tobaccoe"
                            name="ScreeningOffersLungCancerTobaccoe"
                            required={true}
                            max={10}
                            place_holder="Count"
                            onChange={handleScreeningOffersLungCancerTobaccoe}
                            value={formData.ScreeningOffersLungCancerTobaccoe || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="PCC_Clinic">
                            Screening offers - other <HelpIcon explanation={fieldExplanations.ScreeningOffersOther} />
                        </label>
                        <NumberDropdown
                            className="number-dropdown"
                            id="Screening_offers_other"
                            name="ScreeningOffersOther"
                            required={true}
                            max={10}
                            place_holder="Count"
                            onChange={handleScreeningOffersOthere}
                            value={formData.ScreeningOffersOther || ''} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PCCForm;