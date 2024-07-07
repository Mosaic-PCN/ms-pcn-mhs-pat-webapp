import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import Header from './components/Header';
import Form from './components/Form';
import Card from './components/FormCard';
import './App.css';

Amplify.configure(awsExports);


function App() {

    const handleNextClick = (user) => {
        const recordId = Math.random().toString(36).substring(2, 15); // Generate a random ID
        const timestamp = new Date().toISOString(); // Get the current timestamp
        const username = user.username; // Get the current username

        console.log(`Record ID: ${recordId}`);
        console.log(`Timestamp: ${timestamp}`);
        console.log(`Username: ${username}`);
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
                            <button type="button" className="btn btn-primary" onClick={() => handleNextClick(user)}>Next</button>                        </div>
                    </main>
                </div>
            )}
        </Authenticator>
    );
}

export default withAuthenticator(App, { hideSignUp: true });