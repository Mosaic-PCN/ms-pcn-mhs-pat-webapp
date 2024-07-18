import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Header from './components/Header';
import amplifyconfig from './amplifyconfiguration.json';
import './App.css';
import NextPage from './components/NextPage';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import PFCard from './components/PFFormCard';
import PFForm from './components/PFForm';


Amplify.configure(amplifyconfig);

function PF() {

    const navigate = useNavigate();

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
                        <PFCard title="PF">
                            <PFForm />
                        </PFCard>
                        <div className="button-container">
                            <button type="button" className="btn btn-secondary" onClick={goToHomePage}>Previous</button>
                            <button type="Submit" className="btn btn-primary" onClick={goToNotesPage}>Next</button>
                        </div>
                    </main>
                </div>
            )}
        </Authenticator>
    );
}


export default withAuthenticator(PF, { hideSignUp: true });