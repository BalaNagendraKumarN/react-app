import React from "react";

import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Common/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

class App extends React.Component{
  state = { message: "" }

  callbackFunction = (childData) => {
        this.setState({message: childData});
        // console.log('hi', this.state.message);
  }
  
  render() {
    return (
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={ <Home parentCallback = {this.callbackFunction} title={'hi'}/> } /> 
          <Route path='/about' element={ <About parentCallback = {this.callbackFunction} title={'hi'}/> } /> 
        </Routes>
      </Router>
    );
  }
}

export default App;
