import React from 'react';
import Products from './Pages/Products/Products';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import EditProducts from './Pages/Dashboard/EditProducts/EditProducts';
import AdminRoutes from './components/PrivateRoute/AdminRoutes';
import Orders from './Pages/Dashboard/Orders/Orders';
import { useSelector } from 'react-redux';
import Navbar from './components/Layout/Navbar/Navbar';
import Footer from './components/Layout/Footer/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Products />
      <Footer/>
    </>
  );
}

function App() {
  const userRole = useSelector((state) => state.user.role);
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {userRole === 'admin' && (
        <Route path="/admin" element={<AdminRoutes />}>
          <Route index element={<Orders />} />
          <Route path="edit-products" element={<EditProducts />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;
