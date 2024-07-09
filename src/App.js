import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { post } from 'aws-amplify/api';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// import awsExports from './aws-exports';
import Header from './components/Header';
import Form from './components/EncounterForm';
import Card from './components/FormCard';
// import awsconfig from "./aws-exports";
import amplifyconfig from './amplifyconfiguration.json';
import './App.css';
Amplify.configure(amplifyconfig);

function App() {
    const [username, setUsername] = useState('');
    const [data, setData] = useState('')

    const handleSubmit = async (user) => {
        try {
            const recordId = Math.random().toString(36).substring(2, 15); // Generate a random ID
            const timestamp = new Date().toISOString(); // Get the current timestamp

            console.log(`Record ID: ${recordId}`);
            console.log(`Timestamp: ${timestamp}`);

            const apiName = 'submissionAPI'; // Correct API name from aws-exports.js
            const path = "/submit";
            const Options = {
                body: {
                    recordId,
                    timestamp,
                    username: user.username,
                    data
                }, // request body
                headers: {
                    'Content-Type': 'application/json'
                } // OPTIONAL
            };

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Authenticator hideSignUp={true}>
            {({ signOut, user }) => (
                <div className="App">
                    <Header signOut={signOut} user={user} />
                    <main className="App-main">
                        <Card title="Encounter Information">
                            <Form />
                        </Card>
                        <Card title="Stakeholders">
                        </Card>

                        <div className="button-container">
                            <button type="button" className="btn btn-primary">Previous</button>
                            <button type="button" className="btn btn-primary" onClick={() => handleSubmit(user)}>Next</button>
                        </div>
                    </main>
                </div>
            )}
        </Authenticator>
    );
}

export default withAuthenticator(App, { hideSignUp: true });