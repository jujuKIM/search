// // index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//       <App />,
// );
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// // import App from './App';
// import reportWebVitals from './reportWebVitals';

// import App from './App'
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );
// // ReactDOM.render(
// //     <React.StrictMode>
// //         <App />
// //     </React.StrictMode>,
// //     document.getElementById('root')
// // );
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
