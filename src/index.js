import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { OneidProvider } from 'react-oneid'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <OneidProvider apiKey="OWg0dI.73HPvF5TXk2JYqg403LGqd" siteDomain="http://localhost:3000">
    <App />
  </OneidProvider>
);

