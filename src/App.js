import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Researching from './components/pages/Researching';
import Batch from './components/pages/Batch'
import Bundle from './components/pages/Bundle'
import Forming from './components/pages/Forming'
import Furnace from './components/pages/Furnace'
import Glazing from './components/pages/Glazing'
import Hse from './components/pages/Hse'
import Lab from './components/pages/Lab'
import Projects from './components/pages/Projects'
import Qc from './components/pages/Qc'
import Storage from './components/pages/Storage'
import Store from './components/pages/Store'
import Overhaul from './components/pages/Overhaul';
import Connector from './components/pages/Connector';
import NewOverhaul from './components/pages/NewOverhaul';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/R&D' element={<Researching/>} /> 
          <Route path='/products' element={<Products/>} />
          <Route path='/Batch' element={<Batch/>} />
          <Route path='/Bundle' element={<Bundle/>} />
          <Route path='/Forming' element={<Forming/>} />
          <Route path='/Furnace' element={<Furnace/>} />
          <Route path='/Glazing' element={<Glazing/>} />
          <Route path='/Hse' element={<Hse/>} />
          <Route path='/Lab' element={<Lab/>} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/Qc' element={<Qc/>} />
          <Route path='/Storage' element={<Storage/>} />
          <Route path='/Store' element={<Store/>} />
          <Route path='/Overhaul' element={<Overhaul/>} />
          <Route path='/Glass_Story' element={<Connector/>} />
          <Route path='/Overhaul1402' element={<NewOverhaul/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;