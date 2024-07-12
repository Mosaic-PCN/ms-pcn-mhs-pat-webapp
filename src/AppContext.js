import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const initialFormData = {
        // workDate: '',
        // clinicName: '',
        // activity: '',
        // sessionType: '',
        // meetingType: '',
        // orgTime: '',
        // gamePlanTime: '',
        // memberPhysMHSP: '',
        // memberPhysGen: '',
        // nonMemberPhys: '',
        // NpMhsp: '',
        // NpGen: '',
        // moe: '',
        // clinMgr: '',
        // clinOwn: '',
        // pccMosaic: '',
        // pccClinic: '',
        // pf: '',
        // emrs: '',
        // hpf: '',
        // memberCoord: '',
        // mdt: '',
        // dyad: '',
        // notes: '',
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
        workDate: 'The date of the encounter.',
        location: 'The location where the encounter occurred.',
        clinicName: 'The name of the clinic where the encounter took place.',
        role: 'Your role during the encounter (e.g., EMR, PCC, PF).',
        sessionType: 'Whether the session was virtual or in-person.',
        meetingType: 'The type of meeting (e.g., 1:1, group, non-visit).',
        orgTime: 'Time spent on organization during the encounter.',
        gamePlanTime: 'Time spent on game planning during the encounter.',
        // ... Add explanations for other fields in your forms ...
        memberPhysMHSP: 'Number of Member Physicians specializing in MHSP.',
        memberPhysGen: 'Number of Member Physicians in General Practice.',
        nonMemberPhys: 'Number of Non-Member Physicians.',
        // ... and so on for the rest of your fields ...
    };

    // const validateForm = () => {
    //     let valid = true;
    //     let errors = {};

    //     if (!formData.workDate) {
    //         valid = false;
    //         errors.workDate = "Date is required";
    //     }
    //     if (!formData.location) {
    //         valid = false;
    //         errors.location = "Location is required";
    //     }
    //     if (!formData.clinicName) {
    //         valid = false;
    //         errors.clinicName = "Clinic Name is required";
    //     }
    //     if (!formData.role) {
    //         valid = false;
    //         errors.role = "Role is required";
    //     }
    //     if (!formData.sessionType) {
    //         valid = false;
    //         errors.sessionType = "Session Type is required";
    //     }
    //     if (!formData.meetingType) {
    //         valid = false;
    //         errors.meetingType = "Meeting Type is required";
    //     }
    //     if (!formData.orgTime) {
    //         valid = false;
    //         errors.orgTime = "Org Time is required";
    //     }
    //     if (!formData.gamePlanTime) {
    //         valid = false;
    //         errors.gamePlanTime = "Game Planning Time is required";
    //     }

    //     setErrors(errors);
    //     return valid;
    // };

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