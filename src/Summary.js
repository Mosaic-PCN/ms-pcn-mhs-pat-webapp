import React, { useContext } from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Header from './components/Header';
import { AppContext } from './AppContext';
import amplifyconfig from './amplifyconfiguration.json';
import './Summary.css';

Amplify.configure(amplifyconfig);

const Summary = () => {
    const { formData } = useContext(AppContext);

    const renderSummary = () => {
        return Object.keys(formData).map((key) => (
            <p key={key}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {formData[key].toString()}
            </p>
        ));
    };

    return (
        <Authenticator hideSignUp={true}>
            {({ signOut, user }) => (
                <div className="App">
                    <Header signOut={signOut} user={user} />
                    <div className="summary-container">
                        <h2>Summary</h2>
                        {renderSummary()}
                    </div>
                </div>
            )}
        </Authenticator>
    );
}

export default withAuthenticator(Summary, { hideSignUp: true });