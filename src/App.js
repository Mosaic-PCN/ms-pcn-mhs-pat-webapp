import './App.css';
import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
// import { fetchUserAttributes } from '@aws-amplify/auth';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator hideSignUp> 
      {({ signOut, user }) => (
        <div className="App">
        <header className="App-header">
          <h1>Welcome to MHS-PAT {user.username}!</h1>
          <button onClick={signOut}>Sign Out</button>
        </header>
      </div>
    )}
    </Authenticator>
  );
}

export default withAuthenticator(App, { hideSignUp: true });