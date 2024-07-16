import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Amplify from 'aws-amplify';
// import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
// import config from './aws-exports';

import { Image } from '@aws-amplify/ui-react';

Amplify.configure(awsExports);

export const DefaultImageExample = () => {
  return (
    <Image
      src="./pcc.jpeg"
    />
  );
};




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


