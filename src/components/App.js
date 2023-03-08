import React from 'react';
import '../styles/App.css';
import Header from './Header';
import Navbar from './Navbar';
import Test from './Test';
import AboutUs from './AboutUs';
import logo from '../assets/images/logo.png';

function App() {
 return (
  
     <div className="container-fluid">
    
        <Header />
        <AboutUs />
        <Navbar />
        <Test />
       
     </div>
     
  
 )
}

export default App;