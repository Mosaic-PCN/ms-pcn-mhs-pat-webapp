import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';

import { Image } from '@aws-amplify/ui-react';

export const DefaultImageExample = () => {
  return (
    <Image
      src="./pcc.jpeg"
    />
  );
};


Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


