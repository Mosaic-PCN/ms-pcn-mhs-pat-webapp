import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { post } from 'aws-amplify/api';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Header from './components/Header';
import AMCForm from './components/AMCFrom';
import amplifyconfig from './amplifyconfiguration.json';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import AMCCard from './components/AMCFormCard';

Amplify.configure(amplifyconfig);

function AMC() {

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
                        <AMCCard title="Activity Membership Coordinator">
                            <AMCForm />
                        </AMCCard>
                        <div className="button-container">
                            <button type="button" className="btn btn-primary" onClick={goToHomePage}>Previous</button>
                            <button type="Submit" className="btn btn-primary" onClick={goToNotesPage}>Next</button>
                        </div>
                    </main>
                </div>
            )}
        </Authenticator>
    );
}

export default withAuthenticator(AMC, { hideSignUp: true });