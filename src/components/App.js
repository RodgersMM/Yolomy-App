import React from 'react';
import '../styles/App.css';
import Header from './Header';
import Navbar from './Navbar';
import Test from './Test';
import AboutUs from './AboutUs';
import logo from '../assets/images/logo.png';
import Footer from './Footer';
import ProductList from './ProductList';

function App() {
 return (
  
     <div className="container-fluid">
    
        <Header />
        <ProductList />
        <AboutUs />
        <Footer />
       
       
     </div>
     
  
 )
}

export default App;