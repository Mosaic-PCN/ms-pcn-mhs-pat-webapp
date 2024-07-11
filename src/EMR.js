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

Amplify.configure(amplifyconfig);

function EMR() {

    const navigate = useNavigate();

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
                            <EMRForm />
                        </EMRCard>
                    </main>
                    <div className="button-container">
                        <button type="button" className="btn btn-primary" onClick={goToHomePage}>Previous</button>
                        <button type="Submit" className="btn btn-primary" onClick={goToNotesPage}>Next</button>
                    </div>
                </div>
            )}
        </Authenticator>
    );
}


export default withAuthenticator(EMR, { hideSignUp: true });