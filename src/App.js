import React, { useState, useContext, useEffect, useCallback } from 'react'; // Import useCallback
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import { signOut } from '@aws-amplify/auth';
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

const INACTIVITY_TIMEOUT_MS = 1 * 60 * 1000; // 5 minutes


function MainForm() {
    const { formData, resetFormData } = useContext(AppContext);
    const [selectedRole, setSelectedRole] = useState(formData.role || '');
    const navigate = useNavigate();
    const [timer, setTimer] = useState(null);

    const handleRoleChange = (selectedRole) => {
        setSelectedRole(selectedRole);
    };

    const handleResetClick = () => {
        resetFormData();
        setSelectedRole('');
        navigate('/');
        window.location.reload();
    };

    const handleNextClick = () => {
        if (formData.clinicName === 'Mosaic PCN - Internal') {
            navigate('/notes', { state: { formData } });
        } else {
            switch (selectedRole) {
                case 'PCC':
                    navigate('/pcc', { state: { formData } });
                    break;
                case 'EMRS':
                    navigate('/emr', { state: { formData } });
                    break;
                case 'PF':
                    navigate('/pf', { state: { formData } });
                    break;
                case 'HPF':
                    navigate('/hpf', { state: { formData } });
                    break;
                case 'Membership Coordinator':
                    navigate('/amc', { state: { formData } });
                    break;
                default:
                    console.log('Invalid role');
            }
        }
        console.log(selectedRole);
    };

    // const resetTimer = useCallback(() => {
    //     if (timer) clearTimeout(timer);
    //     setTimer(setTimeout(() => {
    //         handleLogout();
    //     }, 1 * 60 * 1000)); // 5 minutes
    // }, [timer]);

    // useEffect(() => {
    //     window.addEventListener('mousemove', resetTimer);
    //     window.addEventListener('keypress', resetTimer);

    //     resetTimer();

    //     return () => {
    //         window.removeEventListener('mousemove', resetTimer);
    //         window.removeEventListener('keypress', resetTimer);
    //         if (timer) clearTimeout(timer);
    //     };
    // }, [resetTimer]);

    // const handleLogout = useCallback(() => {
    //     signOut()
    //         .then(() => {
    //             console.log('User signed out');
    //             navigate('/');
    //         })
    //         .catch(err => console.log(err));
    // }, [navigate]);

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