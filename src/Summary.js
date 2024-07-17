import React, { useState, useContext } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Header from './components/Header';
import { AppContext } from './AppContext';
import amplifyconfig from './amplifyconfiguration.json';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './Summary.css';

Amplify.configure(amplifyconfig);

const Summary = () => {
    const { formData, resetFormData } = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();

    const fieldLabels = {
        workDate: 'Date',
        serviceLocation: 'Service Location',  // Updated key to 'location'
        clinicName: 'Clinic Name',
        role: 'Role',
        isPcnMosaicInternal: 'PCN Mosaic Internal',
        sessionType: 'Session Type',
        meetingType: 'Meeting Type',
        orgTime: 'Org Time',
        gameTime: 'Game Plan Time',
        notes: 'Encounter Notes',
        memberPhysMHSP: 'Member phys MHSP',
        memberPhysGen: 'Member phys General',
        nonMemberPhys: 'Non-Member Phys',
        NpMhsp: 'NP - MHSP',
        NpGen: 'NP - General',
        MOE: 'MOA',
        clinMgr: 'CLIN MGR',
        clinOwn: 'CLIN OWN',
        pccMosaic: 'PCC - Mosaic',
        pccClinic: 'PCC - Clinic',
        PF: 'PF',
        EMRS: 'EMRS',
        HPF: 'HPF',
        memberCoord: 'Membership Coordinator',
        MDT: 'MDT',
        DYAD: 'DYAD',
    };

    const submitData = () => {
        toast.success('Data submitted successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        resetFormData();
    };

    const handlePreviousPage = () => {
        navigate(-1);
    };

    const goToHomePage = () => {
        navigate('/');
    };

    const renderSummary = () => {
        return (
            <div className="summary-list">
                {Object.keys(formData).map((key) => {
                    let value = formData[key];

                    // Format the date
                    if (key === 'workDate' && value) {
                        value = new Date(value).toLocaleDateString();
                    }

                    return (
                        <p key={key}>
                            <strong>{fieldLabels[key] || key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value.toString()}
                        </p>
                    );
                })}
            </div>
        );
    };

    return (
        <Authenticator hideSignUp={true}>
            {({ signOut, user }) => (
                <div className="App">
                    <Header signOut={signOut} user={user} />
                    <div className="summary-container">
                        <h2>Summary</h2>
                        {renderSummary()}
                    </div>
                    <div className="button-container">
                        {/* <button type="button" className="btn btn-primary" onClick={() => navigate(-1)}>Previous</button> */}
                        <button type="button" className="btn btn-primary" onClick={goToHomePage}>Home</button>
                        <button type="button" className="btn btn-primary" onClick={handlePreviousPage}>Previous</button>
                        <button type="submit" className="btn btn-primary" onClick={submitData}>Submit</button>
                    </div>
                    <ToastContainer />
                </div>
            )}
        </Authenticator>
    );
}

export default withAuthenticator(Summary, { hideSignUp: true });