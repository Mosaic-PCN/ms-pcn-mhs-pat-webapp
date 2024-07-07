import React, { useEffect, useState } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import './App.css';

Amplify.configure(awsExports);

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then(user => {
                setUser(user);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to the App</h1>
                {user && (
                    <div>
                        <p>Username: {user.username}</p>
                        <p>Email: {user.attributes.email}</p>
                    </div>
                )}
            </header>
        </div>
    );
}

export default withAuthenticator(App, { hideSignUp: true });