import React, { useState, useContext } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Header from './components/Header';
import amplifyconfig from './amplifyconfiguration.json';
import './App.css';
import { AppContext } from './AppContext';

import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

Amplify.configure(amplifyconfig);

function Notes() {

    const [startDate, setStartDate] = useState(new Date());
    const { updateFormData } = useContext(AppContext);
    const navigate = useNavigate();

    const handleDateChange = (date) => {
        setStartDate(date);
        updateFormData({ workDate: date });
    };

    const handleNotesChange = (e) => {
        updateFormData({ notes: e.target.value });
    };

    const goToSummaryPage = () => {
        navigate('/summary');
    };
    return (
        <Authenticator hideSignUp={true}>
            {({ signOut, user }) => (
                <div className="App">
                    <Header signOut={signOut} user={user} />
                    <main className="App-main">
                        <div className="form-group">
                            <label htmlFor="editor">Encounter Notes:</label>
                            <textarea id="notes" name="notes" rows="20" cols="200" className="modern-textarea" onChange={handleNotesChange}>
                                Type here...
                            </textarea>
                        </div>

                        <div className="button-container">
                            <button type="button" className="btn btn-primary" onClick={() => navigate(-1)}>Previous</button>
                            <button type="submit" className="btn btn-primary" onClick={goToSummaryPage}>Next</button>
                        </div>
                    </main>
                </div>
            )}
        </Authenticator>
    );
}

export default withAuthenticator(Notes, { hideSignUp: true });