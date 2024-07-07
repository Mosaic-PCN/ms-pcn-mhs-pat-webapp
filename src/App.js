import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import Header from './components/Header';
import Form from './components/Form';
import Card from './components/FormCard';

Amplify.configure(awsExports);

function App() {
    return (
        <Authenticator hideSignUp={true}>
            {({ signOut, user }) => (
                <div className="App">
                    <Header signOut={signOut} user={user} />
                    <main className="App-main">
                        <Card title="Encounter Information">
                            <Form />
                        </Card>
                        <button type="button" className="btn btn-primary">Previous</button>
                        <button type="submit" className="btn btn-primary">Next</button>
                    </main>
                </div>
            )}
        </Authenticator>
    );
}

export default withAuthenticator(App, { hideSignUp: true });