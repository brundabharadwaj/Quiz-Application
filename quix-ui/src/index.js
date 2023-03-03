import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
// import MenuBar from './Components/MenuBar/MenuBar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MenuBar/> */}
    <div style={{display:'flex', justifyContent:'center', height:'350px', width:'100%', marginTop:'5%', overflowY:'none'}}><App /></div>
  </React.StrictMode>
);


reportWebVitals();
