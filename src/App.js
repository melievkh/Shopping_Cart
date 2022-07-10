import React from 'react';
import Navbar from './containers/Navbar/Navbar';
import Products from './Pages/Products/Products';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import { Admin } from './Pages/Dashboard/Admin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CreateProducts from './Pages/Dashboard/CreateProducts/CreateProducts';
import EditProducts from './Pages/Dashboard/EditProducts/EditProducts';

function Home() {
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
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/admin" element={<Admin />} />
        <Route path="/create-products" element={<CreateProducts />} />
        <Route path="/edit-products" element={<EditProducts />} />
      </Route>
    </Routes>
  );
}

export default App;
