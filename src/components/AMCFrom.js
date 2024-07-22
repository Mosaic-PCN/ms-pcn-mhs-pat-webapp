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

    const handleChange = (field) => (selectedOption) => {
        updateFormData({ [field]: selectedOption.value });
    };

    return (
        <div className="amc-box-container">
            <Box title="Member Services Admin Support" className="amc-box1">
                <TripleDropdown
                    label={<>Administration - physiotherapy program<HelpIcon id="Administration_physiotherapy_programg_help" explanation={fieldExplanations['AdministrationPhysiotherapyProgram']} /></>}
                    id="Administration_physiotherapy_program"
                    name="AdministrationPhysiotherapyProgram"
                    max_count={20}
                    onChangeCount={handleChange('AdministrationPhysiotherapyProgramCount')}
                    onChangeDirectTime={handleChange('AdministrationPhysiotherapyProgramDirectTime')}
                    onChangeIndirectTime={handleChange('AdministrationPhysiotherapyProgramIndirectTime')}
                />
                <TripleDropdown
                    label={<>Administration - ASP<HelpIcon id="Administration_ASP_help" explanation={fieldExplanations['AdministrationASP']} /></>}
                    id="Administration_ASP"
                    name="AdministrationASP"
                    max_count={20}
                    onChangeCount={handleChange('AdministrationASPCount')}
                    onChangeDirectTime={handleChange('AdministrationASPDirectTime')}
                    onChangeIndirectTime={handleChange('AdministrationASPIndirectTime')}
                />
                <TripleDropdown
                    label={<>Administration - AFAD<HelpIcon id="Administration_AFAD_help" explanation={fieldExplanations['AdministrationAFAD']} /></>}
                    id="Administration_AFAD"
                    name="AdministrationAFAD"
                    max_count={20}
                    onChangeCount={handleChange('AdministrationAFADCount')}
                    onChangeDirectTime={handleChange('AdministrationAFADDirectTime')}
                    onChangeIndirectTime={handleChange('AdministrationAFADIndirectTime')}
                />
                <TripleDropdown
                    label={<>Administration - member signup/end date<HelpIcon id="Administration_member_signup_end_date_help" explanation={fieldExplanations['AdministrationMemberSignuEndDate']} /></>}
                    id="Administration_member_signup_end_date"
                    name="AdministrationMemberSignuEndDate"
                    max_count={20}
                    onChangeCount={handleChange('AdministrationMemberSignuEndDateCount')}
                    onChangeDirectTime={handleChange('AdministrationMemberSignuEndDateDirectTime')}
                    onChangeIndirectTime={handleChange('AdministrationMemberSignuEndDateIndirectTime')}
                />
                <TripleDropdown
                    label={<>Administration - quarterly packs<HelpIcon id="Administration_quarterly_packs_help" explanation={fieldExplanations['AdministrationQuarterlyPacks']} /></>}
                    id="Administration_quarterly_packs"
                    name="AdministrationQuarterlyPacks"
                    max_count={20}
                    onChangeCount={handleChange('AdministrationQuarterlyPacksCount')}
                    onChangeDirectTime={handleChange('AdministrationQuarterlyPacksyDirectTime')}
                    onChangeIndirectTime={handleChange('AdministrationQuarterlyPacksIndirectTime')}
                />
                <TripleDropdown
                    label={<>Administration - agreements<HelpIcon id="Administration_agreements_help" explanation={fieldExplanations['AdministrationAgreements']} /></>}
                    id="Administration_agreements"
                    name="AdministrationAgreements"
                    max_count={20}
                    onChangeCount={handleChange('AdministrationAgreementsCount')}
                    onChangeDirectTime={handleChange('AdministrationAgreementsDirectTime')}
                    onChangeIndirectTime={handleChange('AdministrationAgreementsIndirectTime')}
                />
                <TripleDropdown
                    label={<>Administration - other<HelpIcon id="Administration_other_help" explanation={fieldExplanations['AdministrationOther']} /></>}
                    id="Administration_other"
                    name="AdministrationOther"
                    max_count={20}
                    onChangeCount={handleChange('AdministrationOtherCount')}
                    onChangeDirectTime={handleChange('AdministrationOtherDirectTime')}
                    onChangeIndirectTime={handleChange('AdministrationOtherIndirectTime')}
                />
                <TripleDropdown
                    label={<>Documentation - processes<HelpIcon id="Documentation_processes_help" explanation={fieldExplanations['DocumentationProcesses']} /></>}
                    id="Documentation_processes"
                    name="DocumentationProcesses"
                    max_count={20}
                    onChangeCount={handleChange('DocumentationProcessesCount')}
                    onChangeDirectTime={handleChange('DocumentationProcessesDirectTime')}
                    onChangeIndirectTime={handleChange('DocumentationProcessesIndirectTime')}
                />
                <TripleDropdown
                    label={<>Documentation - Other<HelpIcon id="Documentation_Other_help" explanation={fieldExplanations['DocumentationOther']} /></>}
                    id="Documentation_Other"
                    name="DocumentationOther"
                    max_count={20}
                    onChangeCount={handleChange('DocumentationOtherCount')}
                    onChangeDirectTime={handleChange('DocumentationOtherDirectTime')}
                    onChangeIndirectTime={handleChange('DocumentationOtherIndirectTime')}
                />
                <TripleDropdown
                    label={<>Troubleshooting (portal, UptoDate, etc.)<HelpIcon id="Troubleshooting_help" explanation={fieldExplanations['Troubleshooting']} /></>}
                    id="Troubleshooting"
                    name="Troubleshooting"
                    max_count={20}
                    onChangeCount={handleChange('TroubleshootingCount')}
                    onChangeDirectTime={handleChange('TroubleshootingDirectTime')}
                    onChangeIndirectTime={handleChange('TroubleshootingIndirectTime')}
                />
                <TripleDropdown
                    label={<>Maintenance (PCN Admin, member lists, etc.)<HelpIcon id="Maintenance_help" explanation={fieldExplanations['Maintenance']} /></>}
                    id="Maintenance"
                    name="Maintenance"
                    max_count={20}
                    onChangeCount={handleChange('MaintenanceCount')}
                    onChangeDirectTime={handleChange('MaintenanceDirectTime')}
                    onChangeIndirectTime={handleChange('MaintenanceIndirectTime')}
                />
                <TripleDropdown
                    label={<>Member communication<HelpIcon id="Member_communication_help" explanation={fieldExplanations['MemberCommunication']} /></>}
                    id="Member_communication"
                    name="MemberCommunication"
                    max_count={20}
                    onChangeCount={handleChange('MemberCommunicationCount')}
                    onChangeDirectTime={handleChange('MemberCommunicationDirectTime')}
                    onChangeIndirectTime={handleChange('MemberCommunicationIndirectTime')}
                />
                <TripleDropdown
                    label={<>External partner communication (AH, Calgary zone)<HelpIcon id="External_partner_communication_help" explanation={fieldExplanations['ExternalPartnerCommunication']} /></>}
                    id="External_partner_communication"
                    name="ExternalPartnerCommunication"
                    max_count={20}
                    onChangeCount={handleChange('ExternalPartnerCommunicationCount')}
                    onChangeDirectTime={handleChange('ExternalPartnerCommunicationDirectTime')}
                    onChangeIndirectTime={handleChange('ExternalPartnerCommunicationIndirectTime')}
                />
            </Box>
        </div>
    );
};

export default AMCForm;