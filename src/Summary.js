import React, { useContext } from 'react';
import { Amplify } from 'aws-amplify';
import { post } from 'aws-amplify/api';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Header from './components/Header';
import { AppContext } from './AppContext';
import amplifyconfig from './amplifyconfiguration.json';
import './Summary.css'; // Import the updated Summary.css

Amplify.configure(amplifyconfig);

const Summary = () => {
    const { formData } = useContext(AppContext);

    return (
        <Authenticator hideSignUp={true}>
            {({ signOut, user }) => (
                <div className="App">
                    <Header signOut={signOut} user={user} />
                    <div className="summary-container">
                        <h2>Summary</h2>
                        <p><strong>Date:</strong> {formData.workDate && formData.workDate.toString()}</p>
                        <p><strong>Role:</strong> {formData.role}</p>
                        <p><strong>Notes:</strong> {formData.notes}</p>
                        {/* Add more fields as needed */}
                    </div>
                </div>
            )}
        </Authenticator>
    );
}

export default withAuthenticator(Summary, { hideSignUp: true });