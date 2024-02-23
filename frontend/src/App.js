import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Students from './components/Students';
import Manage from './components/Manage';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import React from 'react';

 
function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
    <Navigation />
    <Routes>  
        <Route exact path="/" element={<Home/>} /> 
        <Route exact path="/students" element={<Students/>} /> 
        <Route exact path="/manage" element={<Manage/>} /> 
        
    </Routes> 
    </BrowserRouter>
   

    </div>
  );
}

export default App;
