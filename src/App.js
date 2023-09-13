import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import SignupLogin from './components/signuplogin/SignupLogin';
import CourseList from './components/courselist/CourseList';
import Profile from './components/profile/Profile';
import { BrowserRouter, Route, Routes,useLocation } from 'react-router-dom';
import CourseContent from './components/coursecontent/CourseContent';
import Cart from './components/cart/Cart';


function App() {
  const location = useLocation();
  const isMain = location.pathname === '/';

  return (
  
    <BrowserRouter>
    <Header/>
    {!isMain && <Main />}
      <Routes>
        
        < Route path="/" element={<Main/>} />
        < Route path="/profile" element={<Profile/>} />
        <Route path="/course" element={<CourseList/>}/>
        <Route path="/coursecontent" element={<CourseContent/>}/>
        <Route path="/cart" element={<Cart/>}/>

      </Routes>
     
    </BrowserRouter>
    
  );
}

export default App;
