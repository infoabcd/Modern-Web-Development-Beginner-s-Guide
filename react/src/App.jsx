import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound'
import LoginPage from './pages/Login';
import Admin from './pages/Admin';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Login' element={<LoginPage />} />
            <Route path='/Admin' element={<Admin />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;