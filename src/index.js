import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Forum from './routes/ForumPage'
import MarketplacePage from './routes/MarketplacePage'
import ContactPage from './routes/ContactPage'
import SignInPage from './routes/SignInPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/forum' element={<Forum />} />
      <Route path='/marketplace' element={<MarketplacePage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/signin' element={<SignInPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

