import React from 'react';
import ReactDOM from 'react-dom';
import { FirebaseAppProvider } from 'reactfire';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
/* *** */
import App from './App';
import { firebaseConfig } from '@config/firebaseConfig';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FirebaseAppProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
