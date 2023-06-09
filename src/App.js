import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup/Signup';
import Login from './components/Login/login';
import Home from './pages/Home';
import MainPage from './pages/MainPage';
import { Product } from './pages/Product';
import { Gallary } from './pages/Gallary';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import VenderSignup from './components/Vender/VenderSignup';
import VenderLogin from './components/Vender/Venderlogin';
import ProductForm from './components/Product/ProductForm';
import ViewProductCart from './components/Product/ViewProductCart';
// import PrivateRoute from './components/auth/PrivateRoute';
import Navbar from './pages/Navbar';
import ProductDetails from './components/Product/ProductDetails';
// import ProductDetails from './components/Product/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<MainPage />} />
          <Route path='/Navbar' element={<Navbar />} />

          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          {/* <Route path="/Product" element={<PrivateRoute component={Product} />} />
          <Route path="/Gallary" element={<PrivateRoute component={Gallary} /> } /> */}
           <Route path="/Product" element= {<Product/>} />
          <Route path="/Gallary" element= {<Gallary /> } />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/ProductForm" element={<ProductForm />} />
          {/* <Route path='/ProductDetails' element={<ProductDetails /> } /> */}
          {/* <Route path='/proudct/:id' element={<ProductDetails/>}/> */}
         
          
          <Route path="/VenderSignup" element={<VenderSignup />} />
          <Route path="/VenderLogin" element={<VenderLogin />} />
          <Route path="/ViewProductCart" element={<ViewProductCart />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
