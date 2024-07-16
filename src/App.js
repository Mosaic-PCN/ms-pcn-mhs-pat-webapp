import React, { useState, useContext, useEffect } from 'react'; // Import useEffect
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Header from './components/Header';
import { AppContext } from './AppContext';
import EMR from './EMR';
import PCC from './PCC';
import PF from './PF';
import HPF from './HPF';
import AMC from './AMC';
import Notes from './Notes';
import Summary from './Summary';
import EncounterForm from './components/EncounterForm';
import StakeholderForm from './components/StakeholdersFrom';
import Card from './components/FormCard';
import StakeholdersCard from './components/StakeholdersFormCard';
import amplifyconfig from './amplifyconfiguration.json';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { AppProvider } from './AppContext';

Amplify.configure(amplifyconfig);

function MainForm() {
    const { formData, resetFormData } = useContext(AppContext); // Get formData and resetFormData from context
    const [selectedRole, setSelectedRole] = useState(formData.role || '');
    const navigate = useNavigate();

    const handleRoleChange = (selectedRole) => {
        setSelectedRole(selectedRole);
    };

    // useEffect(() => {
    //     // Check selectedRole and navigate on initial render and formData updates
    //     if (selectedRole) {
    //         handleNextClick();
    //     }
    // }, [selectedRole, formData]);

    const handleResetClick = () => {
        resetFormData();
        setSelectedRole('');
        navigate('/');
        // window.localStorage.clear(); // Clear local storage
        window.location.reload(); // Reload the page to reset state and context
    };

    const handleNextClick = () => {
        switch (selectedRole) {
            case 'pcc':
                navigate('/pcc', { state: { formData } });
                break;
            case 'emr':
                navigate('/emr', { state: { formData } });
                break;
            case 'pf':
                navigate('/pf', { state: { formData } });
                break;
            case 'hpf':
                navigate('/hpf', { state: { formData } });
                break;
            case 'amc':
                navigate('/amc', { state: { formData } });
                break;
            default:
                console.log('Invalid role');
        }
        console.log(selectedRole);
    };

    return (
        <Authenticator hideSignUp={true}>
            {({ signOut, user }) => (
                <div className="App">
                    <Header signOut={signOut} user={user} />
                    <main className="App-main">
                        <Card title="Encounter Information">
                            <div className="card-content-wrapper">
                                <EncounterForm onRoleChange={handleRoleChange} />
                            </div>
                        </Card>
                        <StakeholdersCard title="Stakeholders">
                            <StakeholderForm />
                        </StakeholdersCard>
                        <div className="button-container">
                            <button type="button" className="btn btn-secondary" onClick={handleResetClick}>Reset</button>
                            <button type="submit" className="btn btn-primary" onClick={handleNextClick}>Next</button>
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
                    <Route path="/notes" element={<Notes />} />
                </Routes>
            </Router>
        </AppProvider>
    );
}

export default withAuthenticator(App, { hideSignUp: true });