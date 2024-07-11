import React, { useState } from 'react';
import NumberDropdown from './NumberDropdown';
import SelectDropdown from './SelectDropdown';
import './PCCForm.css';

const PCCForm = () => {

    const yes_no_Options = [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'non' },
    ];

    return (
        <main className="container mt-5">
            <pcc-form>
                <div className="pcc-column">
                    <NumberDropdown className="number-dropdown" label="Member phys MHSP" id="Member_phys_MHSP" name="Member_phys_MHSP" required={true} max={10} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="Member phys General" id="Member_phys_General" name="Member_phys_General" required={true} max={10} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="Non-Member Phys" id="Non_Member_Phys" name="Non_Member_Phys" required={true} max={10} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="NP - MHSP" id="NP_MHSP" name="NP_MHSP" required={true} max={10} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="NP - General" id="NP_General" name="NP_General" required={true} max={10} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="MOA" id="MOA" name="MOA" required={true} max={10} place_holder="Count" />
                </div>
                <div className="pcc-column">
                    <NumberDropdown className="number-dropdown" label="CLIN MGR" id="CLIN_MGR" name="CLIN_MGR" required={true} max={10} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="CLIN OWN" id="CLIN_OWN" name="CLIN_OWN" required={true} max={10} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="PCC - Mosaic" id="PCC_Mosaic" name="PCC_Mosaic" required={true} max={10} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="PCC - Clinic" id="PCC_Clinic" name="PCC_Clinic" required={true} max={10} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="PF" id="PF" name="PF" required={true} max={10} place_holder="Count" />
                </div>
                <div className="pcc-column">
                    <NumberDropdown className="number-dropdown" label="EMRs" id="EMRs" name="EMRs" required={true} max={10} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="HPF" id="HPF" name="HPF" required={true} max={10} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="Membership Coordinator" id="Membership_Coordinator" name="Membership_Coordinator" required={true} max={5} place_holder="Count" />
                    <NumberDropdown className="number-dropdown" label="MDT" id="MDT" name="MDT" required={true} max={10} place_holder="Count" />
                    <SelectDropdown className="select-dropdown" label="Dyad" id="Dyad" name="Dyad" options={yes_no_Options} />
                </div>
            </pcc-form>
        </main>
    );
};

export default PCCForm;