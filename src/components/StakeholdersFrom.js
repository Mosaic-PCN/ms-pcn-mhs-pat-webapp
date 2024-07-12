import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContext'; // Import context
import NumberDropdown from './NumberDropdown';
import SelectDropdown from './SelectDropdown';
import './StakeholdersForm.css';

const StakeholderForm = () => {
    const { formData, updateFormData } = useContext(AppContext);
    const [startDate, setStartDate] = useState(formData.workDate ? new Date(formData.workDate) : new Date());

    const yes_no_Options = [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'non' },
    ];
    const handleDateChange = (date) => {
        setStartDate(date);
        updateFormData({ workDate: date });
    };

    const handleNumberDropdownChange = (field) => (selectedOption) => {
        updateFormData({ [field]: selectedOption.value });
    };

    const handleSelectDropdownChange = (field) => (selectedOption) => {
        updateFormData({ [field]: selectedOption.value });
    };

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
        updateFormData({ moe: selectedOption.value });
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
        updateFormData({ pf: selectedOption.value });
    };

    const handleEmrsChange = (selectedOption) => {
        updateFormData({ emrs: selectedOption.value });
    };

    const handleHpfChange = (selectedOption) => {
        updateFormData({ hpf: selectedOption.value });
    };

    const handleMemberCoordinatorChange = (selectedOption) => {
        updateFormData({ memberCoord: selectedOption.value });
    };

    const handleMdtChange = (selectedOption) => {
        updateFormData({ mdt: selectedOption.value });
    };

    const handleDyadChange = (selectedOption) => {
        updateFormData({ dyad: selectedOption.value });
    };

    return (
        <main className="container mt-5">
            <stakeholders-form>
                <div className="stakeholders-column">
                    <NumberDropdown className="number-dropdown" label="Member phys MHSP" id="Member_phys_MHSP" name="Member_phys_MHSP" required={true} max={50} place_holder="Count" onChange={handleMemberPhysMhspChange} />
                    <NumberDropdown className="number-dropdown" label="Member phys General" id="Member_phys_General" name="Member_phys_General" required={true} max={50} place_holder="Count" onChange={handleMemberPhysGenChange} />
                    <NumberDropdown className="number-dropdown" label="Non-Member Phys" id="Non_Member_Phys" name="Non_Member_Phys" required={true} max={10} place_holder="Count" onChange={handleNonMemberChange} />
                    <NumberDropdown className="number-dropdown" label="NP - MHSP" id="NP_MHSP" name="NP_MHSP" required={true} max={10} place_holder="Count" onChange={handleNpMhspChange} />
                    <NumberDropdown className="number-dropdown" label="NP - General" id="NP_General" name="NP_General" required={true} max={10} place_holder="Count" onChange={handleNpGenChange} />
                    <NumberDropdown className="number-dropdown" label="MOA" id="MOA" name="MOA" required={true} max={10} place_holder="Count" onChange={handleMOAChange} />
                </div>
                <div className="stakeholders-column">
                    <NumberDropdown className="number-dropdown" label="CLIN MGR" id="CLIN_MGR" name="CLIN_MGR" required={true} max={10} place_holder="Count" onChange={handleClinMgrChange} />
                    <NumberDropdown className="number-dropdown" label="CLIN OWN" id="CLIN_OWN" name="CLIN_OWN" required={true} max={10} place_holder="Count" onChange={handleClinOwnChange} />
                    <NumberDropdown className="number-dropdown" label="PCC - Mosaic" id="PCC_Mosaic" name="PCC_Mosaic" required={true} max={10} place_holder="Count" onChange={handlePccMosaicChange} />
                    <NumberDropdown className="number-dropdown" label="PCC - Clinic" id="PCC_Clinic" name="PCC_Clinic" required={true} max={10} place_holder="Count" onChange={handleNPccClinicChange} />
                    <NumberDropdown className="number-dropdown" label="PF" id="PF" name="PF" required={true} max={10} place_holder="Count" onChange={handlePfChange} />
                </div>
                <div className="stakeholders-column">
                    <NumberDropdown className="number-dropdown" label="EMRs" id="EMRs" name="EMRs" required={true} max={10} place_holder="Count" onChange={handleEmrsChange} />
                    <NumberDropdown className="number-dropdown" label="HPF" id="HPF" name="HPF" required={true} max={10} place_holder="Count" onChange={handleHpfChange} />
                    <NumberDropdown className="number-dropdown" label="Membership Coordinator" id="Membership_Coordinator" name="Membership_Coordinator" required={true} max={5} place_holder="Count" onChange={handleMemberCoordinatorChange} />
                    <NumberDropdown className="number-dropdown" label="MDT" id="MDT" name="MDT" required={true} max={10} place_holder="Count" onChange={handleMdtChange} />
                    <SelectDropdown className="select-dropdown" label="Dyad" id="Dyad" name="Dyad" options={yes_no_Options} onChange={handleDyadChange} />
                </div>
            </stakeholders-form>
        </main>
    );
};

export default StakeholderForm;