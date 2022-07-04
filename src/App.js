import React from 'react';
import Navbar from './containers/Navbar/Navbar';
import Products from './Pages/Products/Products';
import { Route, Routes } from 'react-router-dom';
import { Admin } from './components/Dashboard/Admin';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';

function Main() {
  return (
    <>
      <Navbar />
      <Products />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/main" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
