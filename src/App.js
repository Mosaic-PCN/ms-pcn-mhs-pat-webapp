import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { post } from 'aws-amplify/api';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// import awsExports from './aws-exports';
import Header from './components/Header';
import EMRForm from './components/EMRFrom';
import EncounterForm from './components/EncounterForm';
import StakeholderForm from './components/StakeholdersFrom';
import Card from './components/FormCard';
import StakeholdersCard from './components/StakeholdersFormCard';
import EMRFormCard from './components/EMRFormCard';
// import awsconfig from "./aws-exports";
import amplifyconfig from './amplifyconfiguration.json';
import './App.css';
import NextPage from './components/NextPage';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';


Amplify.configure(amplifyconfig);

function MainForm() {
    const [showEMRForm, setShowEMRForm] = useState(false);
    const navigate = useNavigate();

    const goToNextPage = () => {
        navigate('/next');
    };

    const handleSubmit = async (user) => {
        try {
            const recordId = Math.random().toString(36).substring(2, 15); // Generate a random ID
            const timestamp = new Date().toISOString(); // Get the current timestamp

            console.log(`Record ID: ${recordId}`);
            console.log(`Timestamp: ${timestamp}`);

            const apiName = 'submissionAPI';
            const path = "/submit";
            const Options = {
                body: {
                    recordId,
                    timestamp,
                    username: user.username,
                    data: {}
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            };

        } catch (error) {
            console.error(error);
        }
    };

    const handleRoleChange = (selectedRole) => {
        if (selectedRole === 'pcc') {
            setShowEMRForm(true);
        } else {
            setShowEMRForm(false);
        }
    };

    const handleNextClick = (user) => {
        if (showEMRForm) {
            navigate('/emr-form');
        } else {
            handleSubmit(user);
        }
    };

    return (
        <Authenticator hideSignUp={true}>
            {({ signOut, user }) => (
                <div className="App">
                    <Header signOut={signOut} user={user} />
                    <main className="App-main">
                        <Card title="Encounter Information">
                            <EncounterForm onRoleChange={handleRoleChange} />
                        </Card>
                        <StakeholdersCard title="Stakeholders">
                            <StakeholderForm />
                        </StakeholdersCard>
                        <div className="button-container">
                            <button type="button" className="btn btn-primary" onClick={goToNextPage}>Next</button>
                        </div>
                    </main>
                </div>
            )}
        </Authenticator>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainForm />} />
                <Route path="/emr-form" element={<EMRForm />} />
                <Route path="/next" element={<EMRForm />} />
            </Routes>
        </Router>
    );
}

export default withAuthenticator(App, { hideSignUp: true });