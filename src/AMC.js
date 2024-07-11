import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { post } from 'aws-amplify/api';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// import awsExports from './aws-exports';
import Header from './components/Header';
import AMCForm from './components/AMCFrom';
// import awsconfig from "./aws-exports";
import amplifyconfig from './amplifyconfiguration.json';
import './App.css';
import NextPage from './components/NextPage';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import AMCCard from './components/AMCFormCard';

Amplify.configure(amplifyconfig);

function AMC() {

    const navigate = useNavigate();

    const goToSummaryPage = () => {
        navigate('/summary');
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
                            <button type="button" className="btn btn-primary" onClick={goToSummaryPage}>Next</button>
                        </div>

                    </main>
                </div>
            )}
        </Authenticator>
    );
}

export default withAuthenticator(AMC, { hideSignUp: true });