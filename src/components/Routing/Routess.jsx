import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ContactsPage from '../pages/ContactsPage';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/HomePage';
import TicketsPage from '../pages/TicketsPage';

const Routess = () => {
    return (
      <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/tickets' element={<TicketsPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
      </div>
    );
};

export default Routess;