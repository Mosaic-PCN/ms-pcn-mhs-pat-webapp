import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import Header from './components/Header';

Amplify.configure(awsExports);

function App() {
    return (
        <Authenticator>
            {({ signOut, user }) => (
                <div className="App">
                    <Header />
                    <header className="App-header">
                        {user && (
                            <div>
                                <p>Username: {user.username}</p>
                                <button onClick={signOut}>Sign Out</button>
                            </div>
                        )}
                    </header>
                </div>
            )}
        </Authenticator>
    );
}

export default withAuthenticator(App, { hideSignUp: true });