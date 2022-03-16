import React, {useState} from "react";

import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Common/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  const [message, setMessage] = useState('');


  const callbackFunction = (childData) => {
        setMessage(childData);
        console.log('hii',message);
  }
  
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={ <Home parentCallback = {(e)=> callbackFunction(e)} title={message}/> } /> 
          <Route path='/about' element={ <About parentCallback = {(e)=> callbackFunction(e)} title={message}/> } /> 
        </Routes>
      </Router>
    );
  
}

export default App;
