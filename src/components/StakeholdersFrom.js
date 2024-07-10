import React, { useState } from 'react';
import NumberDropdown from './NumberDropdown';
import './StakeholdersForm.css';

const StakeholderForm = () => {
    return (
        <main className="container mt-5">
            <stakeholder-form>
                <div className="column">
                    <NumberDropdown label="Member phys MHSP" id="Member_phys_MHSP" name="Member_phys_MHSP" required={true} max={10} />
                    <NumberDropdown label="Member phys General" id="Member_phys_General" name="Member_phys_General" required={true} max={10} />
                    <NumberDropdown label="Non-Member Phys" id="Non_Member_Phys" name="Non_Member_Phys" required={true} max={10} />
                    <NumberDropdown label="NP - MHSP" id="NP_MHSP" name="NP_MHSP" required={true} max={10} />
                    <NumberDropdown label="NP - General" id="NP_General" name="NP_General" required={true} max={10} />
                    <NumberDropdown label="MOA" id="MOA" name="MOA" required={true} max={10} />
                    <NumberDropdown label="CLIN MGR" id="CLIN_MGR" name="CLIN_MGR" required={true} max={10} />
                    <NumberDropdown label="CLIN OWN" id="CLIN_OWN" name="CLIN_OWN" required={true} max={10} />
                </div>
                <div className="column">
                    <NumberDropdown label="PCC - Mosaic" id="PCC_Mosaic" name="PCC_Mosaic" required={true} max={10} />
                    <NumberDropdown label="PCC - Clinic" id="PCC_Clinic" name="PCC_Clinic" required={true} max={10} />
                    <NumberDropdown label="PF" id="PF" name="PF" required={true} max={10} />
                    <NumberDropdown label="EMRs" id="EMRs" name="EMRs" required={true} max={10} />
                    <NumberDropdown label="HPF" id="HPF" name="HPF" required={true} max={10} />
                    <NumberDropdown label="Membership Coordinator" id="Membership_Coordinator" name="Membership_Coordinator" required={true} max={5} />
                </div>
            </stakeholder-form>
        </main>
    );
};

export default StakeholderForm;