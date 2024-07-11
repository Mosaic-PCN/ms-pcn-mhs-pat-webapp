import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const initialFormData = {
        workDate: '',
        clinicName: '',
        role: '',
        sessionType: '',
        meetingType: '',
        orgTime: '',
        notes: ''
    };

    const [formData, setFormData] = useState(() => {
        const savedData = localStorage.getItem('formData');
        return savedData ? JSON.parse(savedData) : initialFormData;
    });

    const updateFormData = (data) => {
        setFormData((prevData) => {
            const newData = { ...prevData, ...data };
            localStorage.setItem('formData', JSON.stringify(newData));
            return newData;
        });
    };

    const resetFormData = () => {
        setFormData(initialFormData);
        localStorage.removeItem('formData');
    };

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    return (
        <AppContext.Provider value={{ formData, updateFormData, resetFormData }}>
            {children}
        </AppContext.Provider>
    );
};