import React, { useState, useContext } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Header from './components/Header';
import PCCForm from './components/PCCFrom';
import amplifyconfig from './amplifyconfiguration.json';
import './App.css';
import { AppContext } from './AppContext';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HelpModal from './components/HelpModal';

Amplify.configure(amplifyconfig);

function PCC() {
    // const { formData } = useContext(AppContext);
    const navigate = useNavigate();
    const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

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
                        <PCCForm />
                        <div className="button-container"> {/* Place the buttons outside the card */}
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

export default withAuthenticator(PCC, { hideSignUp: true });