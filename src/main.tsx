// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from './App';
import './index.css';

import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const container = document.getElementById('root') as HTMLElement;

const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
