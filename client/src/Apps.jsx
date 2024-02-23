// src/App.js
import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Options from './components/Options';
import DrugPortal from './components/DrugPortal';
import DrugConflict from './components/ConflictAnalysis';
import Header from './components/common/header';
import About from './components/About';
// import { withGeolocation,geolocated } from 'react-geolocated';


const App = () => {

  return (
      <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Header/>
          <Routes>
            <Route path='/' element={ <FormComponent />}/>
            <Route path='/options' element={<Options />}/>
            <Route path='/drug_portal' element={<DrugPortal />}/>
            <Route path='/conflict_analysis' element= {<DrugConflict />} />
            <Route path='/About' element= {<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;