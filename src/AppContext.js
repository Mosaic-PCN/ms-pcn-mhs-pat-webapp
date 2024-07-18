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