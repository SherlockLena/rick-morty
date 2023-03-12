import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './style/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='442478062930-id7l710p8p6vj6fe67p9p40h7dj9g3ci.apps.googleusercontent.com'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
