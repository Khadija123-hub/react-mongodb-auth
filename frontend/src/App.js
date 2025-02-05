import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './composant/Signup';
import Login from './composant/login';
import Home from './composant/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
