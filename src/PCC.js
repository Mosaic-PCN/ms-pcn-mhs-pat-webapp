import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { post } from 'aws-amplify/api';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// import awsExports from './aws-exports';
import Header from './components/Header';
import EMRForm from './components/EMRFrom';
import EncounterForm from './components/EncounterForm';
import StakeholderForm from './components/StakeholdersFrom';
import Card from './components/FormCard';
import StakeholdersCard from './components/StakeholdersFormCard';
import EMRFormCard from './components/EMRFormCard';
// import awsconfig from "./aws-exports";
import amplifyconfig from './amplifyconfiguration.json';
import './App.css';
import NextPage from './components/NextPage';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import EMRCard from './components/EMRFormCard';


Amplify.configure(amplifyconfig);

function PCC() {


    return (
        <Authenticator hideSignUp={true}>
            {({ signOut, user }) => (
                <div className="App">
                    <Header signOut={signOut} user={user} />
                    <main className="App-main">

                        <EMRCard title="PCC">
                            <EMRForm />
                        </EMRCard>

                    </main>
                </div>
            )}
        </Authenticator>
    );
}

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<MainForm />} />
//                 <Route path="/emr-form" element={<EMRForm />} />
//                 <Route path="/next" element={<EMRForm />} />
//             </Routes>
//         </Router>
//     );
// }

export default withAuthenticator(PCC, { hideSignUp: true });