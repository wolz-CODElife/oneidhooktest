import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { OneidProvider } from 'react-oneid'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <OneidProvider apiKey="vxCgAQ==.fUF/4jTXK8FTGqqt31iDUIpMkYXr3y+Lwxy9pMtVW2Y=" siteDomain="http://localhost:3000">
    <App />
  </OneidProvider>
);

