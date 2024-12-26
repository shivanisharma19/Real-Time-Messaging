import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ContactsContext } from './store/contactStore'
import { contacts } from './common/data/contacts'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ContactsContext.Provider value={contacts}>
      <App />
    </ContactsContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
