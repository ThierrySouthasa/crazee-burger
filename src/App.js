import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/login/LoginPage';
import OrderPage from './components/pages/order/OrderPage';
import './App.css';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/order' element={<OrderPage />} />
      </Routes>
    </Router>
  )
};

export default App;

