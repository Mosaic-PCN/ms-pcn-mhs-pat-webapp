import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const initialFormData = {

    };

    const [formData, setFormData] = useState(() => {
        const savedData = localStorage.getItem('formData');
        return savedData ? JSON.parse(savedData) : initialFormData;
    });

    const [errors, setErrors] = useState({});

    const updateFormData = (newData) => {
        setFormData(prevData => {
            const updatedData = { ...prevData, ...newData };
            localStorage.setItem('formData', JSON.stringify(updatedData));
            return updatedData;
        });
    };

    const resetFormData = () => {
        setFormData(initialFormData);
        setErrors({});
        localStorage.removeItem('formData');
    };

    const fieldExplanations = {
        memberPhysMHSP: 'Member physicians who are currently participanting MHSP.',
        memberPhysGen: 'Member physicians who are not currently participanting MHSP',
        nonMemberPhys: 'Pphysicians who are not MPCN member.',
        NpMhsp: 'Member nurse practitioner (NP) who are currently participanting MHSP',
        NpGen: 'Member nurse practitioner (NP) who are not currently participanting MHSP',
        MOE: 'Medical office Assistant in any clinic (including Mosaic MOA and MOA from other clinics)',
        clinMgr: 'Clinical manager of primary care clinic',
        clinOwn: 'Clinical owner of primary care clinic',
        pccMosaic: 'Mosaic Primary care coordinator.',
        pccClinic: 'Clinic Primary care coordinator',
        PF: 'Practice Facilatitor Mosaic PCN.',
        EMRS: 'EMR specialist in Mosaic PCN',
        HPF: '',
        memberCoord: 'Membership Coordinator in Mosaic PCN.',
        MDT: 'Multidiciplinary team members in Mosaic PCN',
        DYAD: 'Dyad including another Mosaic staff: PF, PCC, EMRs.',
    };


    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    return (
        // <AppContext.Provider value={{ formData, updateFormData, resetFormData, errors, validateForm }}>
        <AppContext.Provider value={{ formData, updateFormData, resetFormData, errors, fieldExplanations }}>

            {children}
        </AppContext.Provider>
    );
};