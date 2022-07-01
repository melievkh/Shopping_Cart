import React from 'react';
import Navbar from './containers/Navbar/Navbar';
import DarkFood from './Pages/darkFood/DarkFood';
import LiquidFood from './Pages/liquidFood/LiquidFood';
import Salad from './Pages/Salad/Salad';
import Drinks from './Pages/drinks/Drinks';
import { Route, Routes } from 'react-router-dom';
import { Admin } from './components/Dashboard/Admin';

function Main() {
  return (
    <>
      <Navbar />
      <LiquidFood />
      <DarkFood />
      <Salad />
      <Drinks />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
