// src/App.js
import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { post } from 'aws-amplify/api';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
// import awsmobile from './aws-exports';

import Header from './components/Header';
import Form from './components/Form';
import Card from './components/FormCard';
// import awsconfig from "./aws-exports";
// import amplifyconfig from './amplifyconfiguration.json';
import './App.css';
import { generateClient } from 'aws-amplify/api';
import config from './amplifyconfiguration.json';
Amplify.configure(config);

const client = generateClient();

Amplify.configure(awsExports);

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

            const response = await post(apiName, path, Options);
            console.log('POST call succeeded');
            console.log(response);

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