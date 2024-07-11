import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { post } from 'aws-amplify/api';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Header from './components/Header';
import EMRForm from './components/EMRFrom';
import EMR from './EMR';
import PCC from './PCC';
import PF from './PF';
import HPF from './HPF';
import AMC from './AMC';
import Summary from './Summary';
import EncounterForm from './components/EncounterForm';
import StakeholderForm from './components/StakeholdersFrom';
import Card from './components/FormCard';
import StakeholdersCard from './components/StakeholdersFormCard';
import EMRFormCard from './components/EMRFormCard';
import amplifyconfig from './amplifyconfiguration.json';
import './App.css';
import NextPage from './components/NextPage';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { AppProvider } from './AppContext'; // Import AppProvider

Amplify.configure(amplifyconfig);


function MainForm() {
    const [showEMRForm, setShowEMRForm] = useState(false);
    const [selectedRole, setSelectedRole] = useState(''); // Add this line

    const navigate = useNavigate();

    const goToSummaryPage = () => {
        navigate('/summary');
    };

    const handleNextClick = () => {
        // setSelectedRole(selectedRole);
        // Navigate based on selected role
        switch (selectedRole) {
            case 'pcc':
                navigate('/pcc');
                break;
            case 'emr':
                navigate('/emr');
                break;
            case 'pf':
                navigate('/pf');
                break;
            case 'hpf':
                navigate('/hpf');
                break;
            case 'amc':
                navigate('/amc');
                break;
            default:
                console.log('Invalid role');
        }
        console.log(selectedRole);

    };

    // const handleSubmit = async (user) => {
    //     try {
    //         const recordId = Math.random().toString(36).substring(2, 15); // Generate a random ID
    //         const timestamp = new Date().toISOString(); // Get the current timestamp

    //         console.log(`Record ID: ${recordId}`);
    //         console.log(`Timestamp: ${timestamp}`);

    //         const apiName = 'submissionAPI';
    //         const path = "/submit";
    //         const Options = {
    //             body: {
    //                 recordId,
    //                 timestamp,
    //                 username: user.username,
    //                 data: {}
    //             },
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         };

    //     } catch (error) {
    //         console.error(error);
    //     }
    // };


    // const handleNextClick = (user) => {
    //     if (showEMRForm) {
    //         navigate('/emr-form');
    //     } else {
    //         handleSubmit(user);
    //     }
    // };

    return (
        <Authenticator hideSignUp={true}>
            {({ signOut, user }) => (
                <div className="App">
                    <Header signOut={signOut} user={user} />
                    <main className="App-main">
                        <Card title="Encounter Information">
                            <EncounterForm selectedRole={selectedRole} />
                        </Card>
                        <StakeholdersCard title="Stakeholders">
                            <StakeholderForm />
                        </StakeholdersCard>
                        <div className="button-container">
                            <button type="button" className="btn btn-primary" onClick={handleNextClick}>Next</button>
                        </div>
                    </main>
                </div>
            )}
        </Authenticator>
    );
}

function App() {
    return (
        <AppProvider>

            <Router>
                <Routes>
                    <Route path="/" element={<MainForm />} />
                    <Route path="/emr" element={<EMR />} />
                    <Route path="/pcc" element={<PCC />} />
                    <Route path="/pf" element={<PF />} />
                    <Route path="/hpf" element={<HPF />} />
                    <Route path="/amc" element={<AMC />} />
                    <Route path="/summary" element={<Summary />} />
                </Routes>
            </Router>
        </AppProvider>

    );
}

export default withAuthenticator(App, { hideSignUp: true });