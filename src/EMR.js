import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { post } from 'aws-amplify/api';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Header from './components/Header';
import EMRForm from './components/EMRFrom';
import amplifyconfig from './amplifyconfiguration.json';
import './App.css';
import NextPage from './components/NextPage';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import EMRCard from './components/EMRFormCard';
import HelpModal from './components/HelpModal'; // Import HelpModal


Amplify.configure(amplifyconfig);

function EMR() {

    const navigate = useNavigate();
    const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

    // const goToSummaryPage = () => {
    //     navigate('/summary');
    // };

    const goToNotesPage = () => {
        navigate('/notes');
    };

    const goToHomePage = () => {
        navigate('/');
    };

    return (
        <Authenticator hideSignUp={true}>
            {({ signOut, user }) => (
                <div className="App">
                    <Header signOut={signOut} user={user} />
                    <main className="App-main">
                        <EMRCard title="EMR">
                            <div className="card-content-wrapper">
                                <EMRForm />
                            </div>
                        </EMRCard>
                        <div className="button-container">
                            <button type="button" className="btn btn-secondary" onClick={goToHomePage}>Previous</button>
                            <button type="Submit" className="btn btn-primary" onClick={goToNotesPage}>Next</button>
                        </div>
                    </main>
                    <HelpModal
                        isOpen={isHelpModalOpen}
                        onRequestClose={() => setIsHelpModalOpen(false)}
                        content={<div>Here you can provide more explanation about the form...</div>}
                    />
                </div>
            )}
        </Authenticator>
    );
}

export default withAuthenticator(EMR, { hideSignUp: true });