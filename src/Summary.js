import React, { useContext } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Header from './components/Header';
import { AppContext } from './AppContext';
import amplifyconfig from './amplifyconfiguration.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Summary.css';

Amplify.configure(amplifyconfig);

const Summary = () => {
    const { formData, resetFormData } = useContext(AppContext);

    const fieldLabels = {
        workDate: 'Date',
        clinicName: 'Clinic Name',
        role: 'Role',
        sessionType: 'Session Type',
        meetingType: 'Meeting Type',
        orgTime: 'Org Time',
        notes: 'Encounter Notes'
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
                        <button type="button" className="btn btn-primary" onClick={submitData}>Submit</button>
                    </div>
                    <ToastContainer />
                </div>
            )}
        </Authenticator>
    );
}

export default withAuthenticator(Summary, { hideSignUp: true });