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
import HPFCard from './components/HPFFormCard';
import HPFForm from './components/HPFForm';


Amplify.configure(amplifyconfig);

function HPF() {

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
                        <HPFCard title="HPF">
                            <HPFForm />
                        </HPFCard>
                        <div className="button-container">
                            <button type="button" className="btn btn-primary" onClick={goToSummaryPage}>Next</button>
                        </div>
                    </main>
                </div>
            )}
        </Authenticator>
    );
}


export default withAuthenticator(HPF, { hideSignUp: true });