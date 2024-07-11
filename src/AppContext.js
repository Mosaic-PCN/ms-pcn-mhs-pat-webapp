import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [formData, setFormData] = useState(() => {
        const savedData = localStorage.getItem('formData');
        return savedData ? JSON.parse(savedData) : {};
    });

    const updateFormData = (data) => {
        setFormData((prevData) => {
            const newData = { ...prevData, ...data };
            localStorage.setItem('formData', JSON.stringify(newData));
            return newData;
        });
    };

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    return (
        <AppContext.Provider value={{ formData, updateFormData }}>
            {children}
        </AppContext.Provider>
    );
};