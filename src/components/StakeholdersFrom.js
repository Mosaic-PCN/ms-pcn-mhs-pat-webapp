import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContext';
import NumberDropdown from './NumberDropdown';
import SelectDropdown from './SelectDropdown';
import HelpIcon from '../HelpIcon'; // Import the HelpIcon component
import './StakeholdersForm.css';

const StakeholderForm = () => {
    const { formData, updateFormData, fieldExplanations } = useContext(AppContext);
    // const [startDate, setStartDate] = useState(formData.workDate ? new Date(formData.workDate) : new Date());

    const yes_no_Options = [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'non' },
    ];

    const handleMemberPhysMhspChange = (selectedOption) => {
        updateFormData({ memberPhysMHSP: selectedOption.value });
    };

    const handleMemberPhysGenChange = (selectedOption) => {
        updateFormData({ memberPhysGen: selectedOption.value });
    };

    const handleNonMemberChange = (selectedOption) => {
        updateFormData({ nonMemberPhys: selectedOption.value });
    };

    const handleNpMhspChange = (selectedOption) => {
        updateFormData({ NpMhsp: selectedOption.value });
    };

    const handleNpGenChange = (selectedOption) => {
        updateFormData({ NpGen: selectedOption.value });
    };

    const handleMOAChange = (selectedOption) => {
        updateFormData({ MOE: selectedOption.value });
    };

    const handleClinMgrChange = (selectedOption) => {
        updateFormData({ clinMgr: selectedOption.value });
    };

    const handleClinOwnChange = (selectedOption) => {
        updateFormData({ clinOwn: selectedOption.value });
    };

    const handlePccMosaicChange = (selectedOption) => {
        updateFormData({ pccMosaic: selectedOption.value });
    };

    const handleNPccClinicChange = (selectedOption) => {
        updateFormData({ pccClinic: selectedOption.value });
    };

    const handlePfChange = (selectedOption) => {
        updateFormData({ PF: selectedOption.value });
    };

    const handleEmrsChange = (selectedOption) => {
        updateFormData({ EMRS: selectedOption.value });
    };

    const handleHpfChange = (selectedOption) => {
        updateFormData({ HPF: selectedOption.value });
    };

    const handleMemberCoordinatorChange = (selectedOption) => {
        updateFormData({ memberCoord: selectedOption.value });
    };

    const handleMdtChange = (selectedOption) => {
        updateFormData({ MDT: selectedOption.value });
    };

    const handleDyadChange = (selectedOption) => {
        updateFormData({ DYAD: selectedOption.value });
    };

    return (
        <main className="container mt-5">
            <div className="stakeholders-form">
                <div className="stakeholders-column">
                    <div className="form-group">
                        <label htmlFor="Member_phys_MHSP">
                            Member phys MHSP <HelpIcon explanation={fieldExplanations.memberPhysMHSP} />
                        </label>
                        <NumberDropdown className="number-dropdown" id="Member_phys_MHSP" name="memberPhysMHSP" required={true} max={50} place_holder="Count" onChange={handleMemberPhysMhspChange} value={formData.memberPhysMHSP || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Member_phys_General">
                            Member phys General <HelpIcon explanation={fieldExplanations.memberPhysGen} />
                        </label>
                        <NumberDropdown className="number-dropdown" id="Member_phys_General" name="memberPhysGen" required={true} max={50} place_holder="Count" onChange={handleMemberPhysGenChange} value={formData.memberPhysGen || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Non_Member_Phys">
                            Non-Member Phys <HelpIcon explanation={fieldExplanations.nonMemberPhys} />
                        </label>
                        <NumberDropdown className="number-dropdown" id="Non_Member_Phys" name="nonMemberPhys" required={true} max={10} place_holder="Count" onChange={handleNonMemberChange} value={formData.nonMemberPhys || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="NP_MHSP">
                            NP - MHSP <HelpIcon explanation={fieldExplanations.NpMhsp} />
                        </label>
                        <NumberDropdown className="number-dropdown" id="NP_MHSP" name="NpMhsp" required={true} max={10} place_holder="Count" onChange={handleNpMhspChange} value={formData.NpMhsp || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Np_Gen">
                            NP - General <HelpIcon explanation={fieldExplanations.NpGen} />
                        </label>
                        <NumberDropdown className="number-dropdown" id="Np_Gen" name="NpGen" required={true} max={10} place_holder="Count" onChange={handleNpGenChange} value={formData.NpGen || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="MOA">
                            MOA <HelpIcon explanation={fieldExplanations.MOE} />
                        </label>
                        <NumberDropdown className="number-dropdown" id="MOA" name="MOE" required={true} max={10} place_holder="Count" onChange={handleMOAChange} value={formData.MOE || ''} />
                    </div>
                </div>
                <div className="stakeholders-column">
                    <div className="form-group">
                        <label htmlFor="CLIN_MGR">
                            CLIN MGR <HelpIcon explanation={fieldExplanations.clinMgr} />
                        </label>
                        <NumberDropdown className="number-dropdown" id="CLIN_MGR" name="clinMgr" required={true} max={10} place_holder="Count" onChange={handleClinMgrChange} value={formData.clinMgr || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="CLIN_OWN">
                            CLIN OWN <HelpIcon explanation={fieldExplanations.clinOwn} />
                        </label>
                        <NumberDropdown className="number-dropdown" id="CLIN_OWN" name="clinOwn" required={true} max={10} place_holder="Count" onChange={handleClinOwnChange} value={formData.clinOwn || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="PCC_Mosaic">
                            PCC - Mosaic <HelpIcon explanation={fieldExplanations.pccMosaic} />
                        </label>
                        <NumberDropdown className="number-dropdown" id="PCC_Mosaic" name="pccMosaic" required={true} max={10} place_holder="Count" onChange={handlePccMosaicChange} value={formData.pccMosaic || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="PCC_Clinic">
                            PCC - Clinic <HelpIcon explanation={fieldExplanations.pccClinic} />
                        </label>
                        <NumberDropdown className="number-dropdown" id="PCC_Clinic" name="pccClinic" required={true} max={10} place_holder="Count" onChange={handleNPccClinicChange} value={formData.pccClinic || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="PF">
                            PF <HelpIcon explanation={fieldExplanations.PF} />
                        </label>
                        <NumberDropdown className="number-dropdown" id="PF" name="PF" required={true} max={10} place_holder="Count" onChange={handlePfChange} value={formData.PF || ''} />
                    </div>
                </div>
                <div className="stakeholders-column">
                    <div className="form-group">
                        <label htmlFor="EMRs">
                            EMRS <HelpIcon explanation={fieldExplanations.EMRS} />
                        </label>
                        <NumberDropdown className="number-dropdown" id="EMRs" name="EMRS" required={true} max={10} place_holder="Count" onChange={handleEmrsChange} value={formData.EMRS || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="HPF">
                            HPF <HelpIcon explanation={fieldExplanations.HPF} />
                        </label>
                        <NumberDropdown className="number-dropdown" id="HPF" name="HPF" required={true} max={10} place_holder="Count" onChange={handleHpfChange} value={formData.HPF || ''} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Membership_Coordinator">
                            Membership Coordinator <HelpIcon explanation={fieldExplanations.memberCoord} />
                        </label>
                        <NumberDropdown className="number-dropdown" id="Membership_Coordinator" name="memberCoord" required={true} max={5} place_holder="Count" onChange={handleMemberCoordinatorChange} value={formData.memberCoord || ''} />

                    </div>

                    <div className="form-group">
                        <label htmlFor="Membership_Coordinator">
                            MDT <HelpIcon explanation={fieldExplanations.MDT} />
                        </label>
                        <NumberDropdown className="number-dropdown" id="MDT" name="MDT" required={true} max={10} place_holder="Count" onChange={handleMdtChange} value={formData.MDT || ''} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Membership_Coordinator">
                            Dyad <HelpIcon explanation={fieldExplanations.DYAD} />
                        </label>
                        <SelectDropdown className="select-dropdown" id="Dyad" name="Dyad" options={yes_no_Options} onChange={handleDyadChange} value={formData.Dyad || ''} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default StakeholderForm;