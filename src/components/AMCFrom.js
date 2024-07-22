import React, { useContext } from 'react';
import TripleDropdown from './TripleDropdown';
import DoubleDropdown from './DoubleDropdown';
import { AppContext } from '../AppContext';
import HelpIcon from '../HelpIcon';
import { TooltipProvider } from 'react-tooltip';
import Box from './Box';
import '../TestBox.css';
import './AMCForm.css';

const AMCForm = () => {
    const { formData, updateFormData, fieldExplanations } = useContext(AppContext);


    const yes_no_Options = [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'non' },
    ];

    const handleAdministrationPhysiotherapyProgramOnChangeCount = (selectedOption) => {
        updateFormData({ AdministrationPhysiotherapyProgramCount: selectedOption.value });
    };

    const handleTrainingClinicProvidersOnChangeDirectTime = (selectedOption) => {
        updateFormData({ AdministrationPhysiotherapyProgramDirectTime: selectedOption.value });
    };

    const handleTrainingClinicProvidersOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ AdministrationPhysiotherapyProgramIndirectTime: selectedOption.value });
    };

    const handleAdministrationASPOnChangeCount = (selectedOption) => {
        updateFormData({ AdministrationASPCount: selectedOption.value });
    };

    const handleAdministrationASPsOnChangeDirectTime = (selectedOption) => {
        updateFormData({ AdministrationASPDirectTime: selectedOption.value });
    };

    const handleAdministrationASPOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ AdministrationASPIndirectTime: selectedOption.value });
    };

    const handleAdministrationAFADOnChangeCount = (selectedOption) => {
        updateFormData({ AdministrationAFADCount: selectedOption.value });
    };

    const handleAdministrationAFADOnChangeDirectTime = (selectedOption) => {
        updateFormData({ AdministrationAFADDirectTime: selectedOption.value });
    };

    const handleAdministrationAFADOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ AdministrationAFADIndirectTime: selectedOption.value });
    };

    const handleAdministrationMemberSignuEndDateOnChangeCount = (selectedOption) => {
        updateFormData({ AdministrationMemberSignuEndDateCount: selectedOption.value });
    };

    const handleAdministrationMemberSignuEndDateOnChangeDirectTime = (selectedOption) => {
        updateFormData({ AdministrationMemberSignuEndDateDirectTime: selectedOption.value });
    };

    const handleAdministrationMemberSignuEndDateOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ AdministrationMemberSignuEndDateIndirectTime: selectedOption.value });
    };

    const handleAdministrationQuarterlyPacksOnChangeCount = (selectedOption) => {
        updateFormData({ AdministrationMemberSignuEndDateCount: selectedOption.value });
    };

    const handleAdministrationQuarterlyPacksOnChangeDirectTime = (selectedOption) => {
        updateFormData({ AdministrationMemberSignuEndDateDirectTime: selectedOption.value });
    };

    const handleAdministrationQuarterlyPacksOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ AdministrationMemberSignuEndDateIndirectTime: selectedOption.value });
    };

    const handleAdministrationAgreementsOnChangeCount = (selectedOption) => {
        updateFormData({ AdministrationAgreementsCount: selectedOption.value });
    };

    const handleAdministrationAgreementsOnChangeDirectTime = (selectedOption) => {
        updateFormData({ AdministrationAgreementsDirectTime: selectedOption.value });
    };

    const handleAdministrationAgreementsOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ AdministrationAgreementsIndirectTime: selectedOption.value });
    };

    const handleAdministrationOtherOnChangeCount = (selectedOption) => {
        updateFormData({ AdministrationOtherCount: selectedOption.value });
    };

    const handleAdministrationOtherOnChangeDirectTime = (selectedOption) => {
        updateFormData({ AdministrationOtherDirectTime: selectedOption.value });
    };

    const handleAdministrationOtherOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ AdministrationOtherIndirectTime: selectedOption.value });
    };

    const handleDocumentationProcessesOnChangeCount = (selectedOption) => {
        updateFormData({ DocumentationProcessesCount: selectedOption.value });
    };

    const handleDocumentationProcessesOnChangeDirectTime = (selectedOption) => {
        updateFormData({ DocumentationProcessesDirectTime: selectedOption.value });
    };

    const handleDocumentationProcessesOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ DocumentationProcessesIndirectTime: selectedOption.value });
    };

    const handleDocumentationOtherOnChangeCount = (selectedOption) => {
        updateFormData({ DocumentationOtherCount: selectedOption.value });
    };

    const handleDocumentationOtherOnChangeDirectTime = (selectedOption) => {
        updateFormData({ DocumentationOtherDirectTime: selectedOption.value });
    };

    const handleDocumentationOtherOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ DocumentationOtherIndirectTime: selectedOption.value });
    };

    const handleTroubleshootingOnChangeCount = (selectedOption) => {
        updateFormData({ TroubleshootingCount: selectedOption.value });
    };

    const handleTroubleshootingOnChangeDirectTime = (selectedOption) => {
        updateFormData({ TroubleshootingDirectTime: selectedOption.value });
    };

    const handleTroubleshootingOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ TroubleshootingIndirectTime: selectedOption.value });
    };

    const handleMaintenanceOnChangeCount = (selectedOption) => {
        updateFormData({ MaintenanceCount: selectedOption.value });
    };

    const handleMaintenanceOnChangeDirectTime = (selectedOption) => {
        updateFormData({ MaintenanceDirectTime: selectedOption.value });
    };

    const handleMaintenanceOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ MaintenanceIndirectTime: selectedOption.value });
    };

    const handleMemberCommunicationOnChangeCount = (selectedOption) => {
        updateFormData({ MemberCommunicationCount: selectedOption.value });
    };

    const handleMemberCommunicationOnChangeDirectTime = (selectedOption) => {
        updateFormData({ MemberCommunicationDirectTime: selectedOption.value });
    };

    const handleMemberCommunicationOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ MemberCommunicationIndirectTime: selectedOption.value });
    };

    const handleExternalPartnerCommunicationOnChangeCount = (selectedOption) => {
        updateFormData({ ExternalPartnerCommunicationCount: selectedOption.value });
    };

    const handleExternalPartnerCommunicationOnChangeDirectTime = (selectedOption) => {
        updateFormData({ ExternalPartnerCommunicationDirectTime: selectedOption.value });
    };

    const handleExternalPartnerCommunicationOnChangeIndirectTime = (selectedOption) => {
        updateFormData({ ExternalPartnerCommunicationIndirectTime: selectedOption.value });
    };

    return (
        <div className="amc-box-container">
            <Box title="Member Services Admin Support" className="amc-box1">
                <TripleDropdown
                    label={<>Administration - physiotherapy program<HelpIcon id="Administration_physiotherapy_programg_help" explanation={fieldExplanations['AdministrationPhysiotherapyProgram']} /></>}
                    id="Administration_physiotherapy_program"
                    name="AdministrationPhysiotherapyProgram"
                    max_count={20}
                    onChangeCount={handleAdministrationPhysiotherapyProgramOnChangeCount}
                    onChangeDirectTime={handleTrainingClinicProvidersOnChangeDirectTime}
                    onChangeIndirectTime={handleTrainingClinicProvidersOnChangeIndirectTime}
                />
                <TripleDropdown
                    label={<>Administration - ASP<HelpIcon id="Administration_ASP_help" explanation={fieldExplanations['AdministrationASP']} /></>}
                    id="Administration_ASP"
                    name="AdministrationASP"
                    max_count={20}
                    onChangeCount={handleAdministrationASPOnChangeCount}
                    onChangeDirectTime={handleAdministrationASPsOnChangeDirectTime}
                    onChangeIndirectTime={handleAdministrationASPOnChangeIndirectTime}
                />
                <TripleDropdown
                    label={<>Administration - AFAD<HelpIcon id="Administration_AFAD_help" explanation={fieldExplanations['AdministrationAFAD']} /></>}
                    id="Administration_AFAD"
                    name="AdministrationAFAD"
                    max_count={20}
                    onChangeCount={handleAdministrationAFADOnChangeCount}
                    onChangeDirectTime={handleAdministrationAFADOnChangeDirectTime}
                    onChangeIndirectTime={handleAdministrationAFADOnChangeIndirectTime}
                />
                <TripleDropdown
                    label={<>Administration - member signup/end date<HelpIcon id="Administration_member_signup_end_date_help" explanation={fieldExplanations['AdministrationMemberSignuEndDate']} /></>}
                    id="Administration_member_signup_end_date"
                    name="AdministrationMemberSignuEndDate"
                    max_count={20}
                    onChangeCount={handleAdministrationMemberSignuEndDateOnChangeCount}
                    onChangeDirectTime={handleAdministrationMemberSignuEndDateOnChangeDirectTime}
                    onChangeIndirectTime={handleAdministrationMemberSignuEndDateOnChangeIndirectTime}
                />
                <TripleDropdown
                    label={<>Administration - quarterly packs<HelpIcon id="Administration_quarterly_packs_help" explanation={fieldExplanations['AdministrationQuarterlyPacks']} /></>}
                    id="Administration_quarterly_packs"
                    name="AdministrationQuarterlyPacks"
                    max_count={20}
                    onChangeCount={handleAdministrationQuarterlyPacksOnChangeCount}
                    onChangeDirectTime={handleAdministrationQuarterlyPacksOnChangeDirectTime}
                    onChangeIndirectTime={handleAdministrationQuarterlyPacksOnChangeIndirectTime}
                />
                <TripleDropdown
                    label={<>Administration - agreements<HelpIcon id="Administration_agreements_help" explanation={fieldExplanations['AdministrationAgreements']} /></>}
                    id="Administration_agreements"
                    name="AdministrationAgreements"
                    max_count={20}
                    onChangeCount={handleAdministrationAgreementsOnChangeCount}
                    onChangeDirectTime={handleAdministrationAgreementsOnChangeDirectTime}
                    onChangeIndirectTime={handleAdministrationAgreementsOnChangeIndirectTime}
                />
                <TripleDropdown
                    label={<>Administration - other<HelpIcon id="Administration_other_help" explanation={fieldExplanations['AdministrationOther']} /></>}
                    id="Administration_other"
                    name="AdministrationOther"
                    max_count={20}
                    onChangeCount={handleAdministrationOtherOnChangeCount}
                    onChangeDirectTime={handleAdministrationOtherOnChangeDirectTime}
                    onChangeIndirectTime={handleAdministrationOtherOnChangeIndirectTime}
                />
                <TripleDropdown
                    label={<>Documentation - processes<HelpIcon id="Documentation_processes_help" explanation={fieldExplanations['DocumentationProcesses']} /></>}
                    id="Documentation_processes"
                    name="DocumentationProcesses"
                    max_count={20}
                    onChangeCount={handleDocumentationProcessesOnChangeCount}
                    onChangeDirectTime={handleDocumentationProcessesOnChangeDirectTime}
                    onChangeIndirectTime={handleDocumentationProcessesOnChangeIndirectTime}
                />
                <TripleDropdown
                    label={<>Documentation - Other<HelpIcon id="Documentation_Other_help" explanation={fieldExplanations['DocumentationOther']} /></>}
                    id="Documentation_Other"
                    name="DocumentationOther"
                    max_count={20}
                    onChangeCount={handleDocumentationOtherOnChangeCount}
                    onChangeDirectTime={handleDocumentationOtherOnChangeDirectTime}
                    onChangeIndirectTime={handleDocumentationOtherOnChangeIndirectTime}
                />
                <TripleDropdown
                    label={<>Troubleshooting (portal, UptoDate, etc.)<HelpIcon id="Troubleshooting_help" explanation={fieldExplanations['Troubleshooting']} /></>}
                    id="Troubleshooting"
                    name="Troubleshooting"
                    max_count={20}
                    onChangeCount={handleTroubleshootingOnChangeCount}
                    onChangeDirectTime={handleTroubleshootingOnChangeDirectTime}
                    onChangeIndirectTime={handleTroubleshootingOnChangeIndirectTime}
                />
                <TripleDropdown
                    label={<>Maintenance (PCN Admin, member lists, etc.)<HelpIcon id="Maintenance_help" explanation={fieldExplanations['Maintenance']} /></>}
                    id="Maintenance"
                    name="Maintenance"
                    max_count={20}
                    onChangeCount={handleMaintenanceOnChangeCount}
                    onChangeDirectTime={handleMaintenanceOnChangeDirectTime}
                    onChangeIndirectTime={handleMaintenanceOnChangeIndirectTime}
                />
                <TripleDropdown
                    label={<>Member communication<HelpIcon id="Member_communication_help" explanation={fieldExplanations['MemberCommunication']} /></>}
                    id="Member_communication"
                    name="MemberCommunication"
                    max_count={20}
                    onChangeCount={handleMemberCommunicationOnChangeCount}
                    onChangeDirectTime={handleMemberCommunicationOnChangeDirectTime}
                    onChangeIndirectTime={handleMemberCommunicationOnChangeIndirectTime}
                />
                <TripleDropdown
                    label={<>External partner communication (AH, Calgary zone)<HelpIcon id="External_partner_communication_help" explanation={fieldExplanations['ExternalPartnerCommunication']} /></>}
                    id="External_partner_communication"
                    name="ExternalPartnerCommunication"
                    max_count={20}
                    onChangeCount={handleExternalPartnerCommunicationOnChangeCount}
                    onChangeDirectTime={handleExternalPartnerCommunicationOnChangeDirectTime}
                    onChangeIndirectTime={handleExternalPartnerCommunicationOnChangeIndirectTime}
                />
            </Box>
        </div>
    );
};

export default AMCForm;