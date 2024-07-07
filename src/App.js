import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import Header from './components/Header';
import Card from './components/Card';
import Form from './components/Form';
import DropDown from './components/Dropdown';



Amplify.configure(awsExports);

function App() {
    return (
        <Authenticator hideSignUp={true}>
            {({ signOut, user }) => (
                <div className="App">
                    <Header />
                    <main className="App-main">
                        {user && (
                            <div>
                                <p>Username: {user.username}</p>
                            </div>
                        )}
                        {/* <Card title={cardTitle}> */}
                        <Card title="Encounter Information">

                            <Form />
                        </Card>
                        <button type="submit" className="btn btn-primary">Next</button>


                        <button onClick={signOut}>Sign Out</button>
                    </main>
                </div>
            )}
        </Authenticator>
    );
}


export default withAuthenticator(App, { hideSignUp: true });