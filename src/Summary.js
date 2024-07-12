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
    // const { formData, resetFormData } = useContext(AppContext);
    // const { resetFormData } = useContext(AppContext);
    // const formData = location.state?.formData || {};
    // const navigate = useNavigate();

    const fieldLabels = {
        workDate: 'Date',
        clinicName: 'Clinic Name',
        role: 'Role',
        sessionType: 'Session Type',
        meetingType: 'Meeting Type',
        orgTime: 'Org Time',
        notes: 'Encounter Notes',
        memberPhysMHSP: 'Member phys MHSP',
        memberPhysGen: 'Member phys General',
        nonMemberPhys: 'Non-Member Phys',
        NpMhsp: 'NP - MHSP',
        NpGen: 'NP - General',
        moe: 'MOA',
        clinMgr: 'CLIN MGR',
        clinOwn: 'CLIN OWN',
        pccMosaic: 'PCC - Mosaic',
        pccClinic: 'PCC - Clinic',
        pf: 'PF',
        emrs: 'EMRs',
        hpf: 'HPF',
        memberCoord: 'Membership Coordinator',
        mdt: 'MDT',
        dyad: 'Dyad',
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

    const renderSummary = () => {
        return Object.keys(formData).map((key) => {
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
        });
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