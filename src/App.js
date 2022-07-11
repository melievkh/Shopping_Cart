import React from 'react';
import Navbar from './containers/Navbar/Navbar';
import Products from './Pages/Products/Products';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import EditProducts from './Pages/Dashboard/EditProducts/EditProducts';
import AdminRoutes from './components/PrivateRoute/AdminRoutes';
import Orders from './Pages/Dashboard/Orders/Orders';

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

      <Route path="/admin" element={<AdminRoutes />}>
        <Route index element={<Orders />} />
        <Route path="edit-products" element={<EditProducts />} />
      </Route>
    </Routes>
  );
}

export default App;
