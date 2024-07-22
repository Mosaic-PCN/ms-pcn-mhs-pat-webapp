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
        serviceLocation: 'Service Location',
        clinicName: 'Clinic Name',
        role: 'Role',
        isPcnMosaicInternal: 'Mosaic PCN - Internal',
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
        CcVisit: 'Documentation - C&C visit',
        QiTemplate: 'Documentation - QI template',
        ServiceTemplates: 'Documentation - Menu of Service templates',
        DocumentationClinicProcesses: 'Documentation - Clinic Processe',
        DocumentationOther: 'Documentation - Other',
        SchedulingAppointments: 'Scheduling appointments',
        LiaiseWithExternalPartnersDirectTime: 'Liaise with external partners - Direct Time',
        LiaiseWithExternalPartnersIndirecTime: 'Liaise with external partners - Indirect Time',
        ProvideOrClinicInquiryberPhysCount: 'Provider or clinic inquiry - Count',
        ProvideOrClinicInquiryberPhysDirectTime: 'Provider or clinic inquiry - Direct Time',
        ProvideOrClinicInquiryberPhysIndirectTIme: 'Provider or clinic inquiry - Indirect Time',
        EmrMappingCount: 'EMR mapping - Count',
        EmrMappingDirectTime: 'EMR mapping - Direct Time',
        EmrMappingIndirectTime: 'EMR mapping - Indirect Time',
        EmrSearchesCount: 'EMR searches - Count',
        EmrSearchesDirectTime: 'EMR searches - Direct Time',
        EmrSearchesIndirectTime: 'EMR searches - Indirect Time',
        EmrDataCollectionCount: 'EMR data collection - Count',
        EmrDataCollectionDirectTime: 'EMR data collection - Direct Time',
        EmrDataCollectionIndirectTime: 'EMR data collection - Indirect Time',
        EmrDataEntryCount: 'EMR data entry - Count',
        EmrDataEntryDirectTime: 'EMR data entry - Direct Time',
        EmrDataEntryIndirectTime: 'EMR data entry - Indirect Time',
        MeetingCCCount: 'Meeting - C&C - Count',
        MeetingCCDirectTime: 'Meeting - C&C - Direct Time',
        MeetingCCIndirectTime: 'Meeting - C&C - Indirect Time',
        MeetingNewMemberCount: 'Meeting - New Member - Count',
        MeetingNewMemberDirectTime: 'Meeting - New Member - Direct Time',
        MeetingNewMemberIndirectTime: 'Meeting - New Member - Indirect Time',
        MeetingCIICPARCount: 'Meeting - CII/CPAR - Count',
        MeetingCIICPARDirectTime: 'Meeting - CII/CPAR - Direct Time',
        MeetingCIICPARIndirectTime: 'Meeting - CII/CPAR - Indirect Time',
        MeetingQICount: 'Meeting - QI - Count',
        MeetingQIDirectTime: 'Meeting - QI - Direct Time',
        MeetingQIIndirectTime: 'Meeting - QI - Indirect Time',
        MaterialDropoffCount: 'Material dropoff - Count',
        MaterialDropoffDirectTime: 'Material dropoff - Direct Time',
        MaterialDropoffIndirectTime: 'Material dropoff - Indirect Time',
        ClinicActivityOtherCount: 'Clinic Activity - other - Count',
        ClinicActivityOtherDirectTime: 'Clinic Activity - other - Direct Time',
        ClinicActivityOtherIndirectTime: 'Clinic Activity - other - Indirect Time',
        RecievingTrainingCount: 'Recieving training - Count',
        RecievingTrainingDirectTime: 'Recieving training - Direct Time',
        RecievingTrainingIndirectTime: 'Recieving training - Indirect Time',
        TrainingMaterialCreation: 'Training material creation',
        TrainingClinicAdminsCount: 'Training clinic administrative staff - Count',
        TrainingClinicAdminsDirectTime: 'Training clinic administrative staff - Direct Time',
        TrainingClinicAdminsIndirectTime: 'Training clinic administrative staff',
        TrainingClinicProvidersCount: 'Training clinic provider - Count - Count',
        TrainingClinicProvidersDirectTime: 'Training clinic provider - Direct Time',
        TrainingClinicProvidersIndirectTime: 'Training clinic provider - Indirect Time',
    };

    const submitData = () => {
        if (Object.keys(formData).length === 0) {
            toast.error('No data to submit. Please fill out the form.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

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
                {
                    Object.keys(formData).filter(key => key !== 'notes').map((key) => {
                        let value = formData[key];
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
                        <div className="notes-container">
                            <h3>Encounter Notes:</h3>
                            <p>{formData.notes}</p>
                        </div>

                    </div>
                    <div className="button-container">
                        <button type="button" className="btn btn-secondary" onClick={goToHomePage}>Home</button>
                        <button type="button" className="btn btn-secondary" onClick={handlePreviousPage}>Previous</button>
                        <button type="submit" className="btn btn-primary" onClick={submitData}>Submit</button>
                    </div>
                    <ToastContainer />
                </div>
            )}
        </Authenticator>
    );
}

export default withAuthenticator(Summary, { hideSignUp: true });