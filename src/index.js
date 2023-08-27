import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './header.css';
import Header from './Header';
import Footer from './components/Footer';
import Main from './components/main';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Footer/>
  </React.StrictMode>
);
