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
        <AppContext.Provider value={{ formData, updateFormData, resetFormData, errors }}>

            {children}
        </AppContext.Provider>
    );
};