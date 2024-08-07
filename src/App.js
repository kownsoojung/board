import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Stattion from './pages/station/Station'


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/' element={<Stattion/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
