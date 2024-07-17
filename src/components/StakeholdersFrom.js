import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContext';
import NumberDropdown from './NumberDropdown';
import SelectDropdown from './SelectDropdown';
import './StakeholdersForm.css';

const StakeholderForm = () => {
    const { formData, updateFormData } = useContext(AppContext);
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
            <stakeholders-form>
                <div className="stakeholders-column">
                    <NumberDropdown className="number-dropdown" label="Member phys MHSP" id="Member_phys_MHSP" name="memberPhysMHSP" required={true} max={50} place_holder="Count" onChange={handleMemberPhysMhspChange} value={formData.memberPhysMHSP || ''} />
                    <NumberDropdown className="number-dropdown" label="Member phys General" id="Member_phys_General" name="memberPhysGen" required={true} max={50} place_holder="Count" onChange={handleMemberPhysGenChange} value={formData.memberPhysGen || ''} />
                    <NumberDropdown className="number-dropdown" label="Non-Member Phys" id="Non_Member_Phys" name="nonMemberPhys" required={true} max={10} place_holder="Count" onChange={handleNonMemberChange} value={formData.nonMemberPhys || ''} />
                    <NumberDropdown className="number-dropdown" label="NP - MHSP" id="NP_MHSP" name="NpMhsp" required={true} max={10} place_holder="Count" onChange={handleNpMhspChange} value={formData.NpMhsp || ''} />
                    <NumberDropdown className="number-dropdown" label="NP - General" id="Np_Gen" name="NpGen" required={true} max={10} place_holder="Count" onChange={handleNpGenChange} value={formData.NpGen || ''} />
                    <NumberDropdown className="number-dropdown" label="MOA" id="MOA" name="MOE" required={true} max={10} place_holder="Count" onChange={handleMOAChange} value={formData.MOE || ''} />
                </div>
                <div className="stakeholders-column">
                    <NumberDropdown className="number-dropdown" label="CLIN MGR" id="CLIN_MGR" name="clinMgr" required={true} max={10} place_holder="Count" onChange={handleClinMgrChange} value={formData.clinMgr || ''} />
                    <NumberDropdown className="number-dropdown" label="CLIN OWN" id="CLIN_OWN" name="clinOwn" required={true} max={10} place_holder="Count" onChange={handleClinOwnChange} value={formData.clinOwn || ''} />
                    <NumberDropdown className="number-dropdown" label="PCC - Mosaic" id="PCC_Mosaic" name="pccMosaic" required={true} max={10} place_holder="Count" onChange={handlePccMosaicChange} value={formData.pccMosaic || ''} />
                    <NumberDropdown className="number-dropdown" label="PCC - Clinic" id="PCC_Clinic" name="pccClinic" required={true} max={10} place_holder="Count" onChange={handleNPccClinicChange} value={formData.pccClinic || ''} />
                    <NumberDropdown className="number-dropdown" label="PF" id="PF" name="PF" required={true} max={10} place_holder="Count" onChange={handlePfChange} value={formData.PF || ''} />
                </div>
                <div className="stakeholders-column">
                    <NumberDropdown className="number-dropdown" label="EMRS" id="EMRs" name="EMRS" required={true} max={10} place_holder="Count" onChange={handleEmrsChange} value={formData.EMRS || ''} />
                    <NumberDropdown className="number-dropdown" label="HPF" id="HPF" name="HPF" required={true} max={10} place_holder="Count" onChange={handleHpfChange} value={formData.HPF || ''} />
                    <NumberDropdown className="number-dropdown" label="Membership Coordinator" id="Membership_Coordinator" name="memberCoord" required={true} max={5} place_holder="Count" onChange={handleMemberCoordinatorChange} value={formData.memberCoord || ''} />
                    <NumberDropdown className="number-dropdown" label="MDT" id="MDT" name="MDT" required={true} max={10} place_holder="Count" onChange={handleMdtChange} value={formData.MDT || ''} />
                    <SelectDropdown className="select-dropdown" label="Dyad" id="Dyad" name="Dyad" options={yes_no_Options} onChange={handleDyadChange} value={formData.Dyad || ''} />
                </div>
            </stakeholders-form>
        </main>
    );
};

export default StakeholderForm;