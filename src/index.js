import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Forum from './routes/ForumPage'
import Bikes from './routes/BikePage'
import ContactPage from './routes/ContactPage'
import SignInPage from './routes/SignInPage';
import RegisterPage from './routes/RegisterPage';
import SearchPage from './routes/SearchPage';
import PostbikePage from './routes/PostbikePage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/forum' element={<Forum />} />
      <Route path='/bikes' element={<Bikes />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/signin' element={<SignInPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/postbike' element={<PostbikePage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

