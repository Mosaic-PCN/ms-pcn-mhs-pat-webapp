import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Header from './components/Header';
import EMRForm from './components/EMRForm';
import EMR from './EMR';
import PCC from './PCC';
import PF from './PF';
import HPF from './HPF';
import AMC from './AMC';
import Summary from './Summary';
import EncounterForm from './components/EncounterForm';
import StakeholderForm from './components/StakeholderForm';
import Card from './components/FormCard';
import StakeholdersCard from './components/StakeholdersFormCard';
import EMRFormCard from './components/EMRFormCard';
import amplifyconfig from './amplifyconfiguration.json';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

Amplify.configure(amplifyconfig);

function MainForm() {
    const [selectedRole, setSelectedRole] = useState('');
    const navigate = useNavigate();

    const handleRoleChange = (role) => {
        setSelectedRole(role);
    };

    const handleNextClick = () => {
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
                console.log(selectedRole);
                console.log('Invalid role');
                break;
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
    );
}

export default withAuthenticator(App, { hideSignUp: true });