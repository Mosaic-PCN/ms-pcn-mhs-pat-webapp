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
    return (
        <Authenticator hideSignUp={true}>
            {({ signOut, user }) => (
                <div className="App">
                    <Header signOut={signOut} user={user} />
                    <main className="App-main">
                        <AMCCard title="Activity Membership Coordinator">
                            <AMCForm />
                        </AMCCard>

                    </main>
                </div>
            )}
        </Authenticator>
    );
}

export default withAuthenticator(AMC, { hideSignUp: true });