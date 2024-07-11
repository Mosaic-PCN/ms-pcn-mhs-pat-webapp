import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Header from './components/Header';
import EMR from './EMR';
import PCC from './PCC';
import PF from './PF';
import HPF from './HPF';
import AMC from './AMC';
import Summary from './Summary';
import EncounterForm from './components/EncounterForm';
import StakeholderForm from './components/StakeholdersFrom';
import Card from './components/FormCard';
import StakeholdersCard from './components/StakeholdersFormCard';
import amplifyconfig from './amplifyconfiguration.json';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { AppProvider } from './AppContext'; // Import AppProvider

Amplify.configure(amplifyconfig);

function Notes() {

    return (
        <Authenticator hideSignUp={true}>
            {({ signOut, user }) => (
                <div className="App">
                    <Header signOut={signOut} user={user} />
                    <main className="App-main">
                        <div className="form-group">
                            <label htmlFor="editor">Encounter Notes:</label>
                            <textarea id="notes" name="notes" rows="30" cols="60" className="modern-textarea" onChange={handleNotesChange}>
                                Type here...
                            </textarea>
                        </div>

                        <div className="button-container">
                            <button type="submit" className="btn btn-primary" onClick={handleNextClick}>Next</button>
                        </div>
                    </main>
                </div>
            )}
        </Authenticator>
    );
}

export default withAuthenticator(Notes, { hideSignUp: true });