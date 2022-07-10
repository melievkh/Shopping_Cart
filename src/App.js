import React from 'react';
import Navbar from './containers/Navbar/Navbar';
import Products from './Pages/Products/Products';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import { Admin } from './Pages/Dashboard/Admin';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import CreateProds from './Pages/Dashboard/CreateProds/CreateProds';
import ExistProducts from './Pages/Dashboard/ExistProducts/ExistProducts';

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
      <Route path="/" element={<Main />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/create" element={<CreateProds />} />
        <Route path="/existprods" element={<ExistProducts />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}

export default App;
