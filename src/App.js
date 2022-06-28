import React from 'react';
import Navbar from './containers/Navbar/Navbar'
import Quyuq from './Pages/Quyuq/Quyuq';
import Suyuq from './Pages/Suyuq/Suyuq';
import Salat from './Pages/Salat/Salat';
import Ichimlik from './Pages/Ichimlik/Ichimlik';

function App() {
  return (
    <div>
      <Navbar />
      <Suyuq />
      <Quyuq />
      <Salat />
      <Ichimlik />
    </div>
  );
}

export default App;
