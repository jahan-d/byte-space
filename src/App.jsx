import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
