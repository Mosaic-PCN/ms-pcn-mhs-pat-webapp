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
        workDate: 'The date of the encounter.',
        location: 'The location where the encounter occurred.',
        clinicName: 'The name of the clinic where the encounter took place.',
        role: 'Your role during the encounter (e.g., EMR, PCC, PF).',
        sessionType: 'Whether the session was virtual or in-person.',
        meetingType: 'The type of meeting (e.g., 1:1, group, non-visit).',
        orgTime: 'Time spent on organization during the encounter.',
        gameTime: 'Time spent on game planning during the encounter.',
        memberPhysMHSP: 'Number of Member Physicians specializing in MHSP.',
        memberPhysGen: 'Number of Member Physicians in General Practice.',
        nonMemberPhys: 'Number of Non-Member Physicians.',
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