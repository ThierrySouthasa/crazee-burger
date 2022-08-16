import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import OrderPage from './components/OrderPage';

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

