import logo from './logo.svg';
import './App.css';
import User from './components/User';
import { useState,useEffect,useMemo ,useRef} from 'react';
import Demo from './components/Demo';
import './style.css'
import {Button} from 'react-bootstrap'
import {BrowserRouter as Router,Route,Link,Routes,Switch, BrowserRouter} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {

  return (
   <div  >
<h1> Home Page</h1>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/home' element={<Home/>}/>
  <Route path='/About' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  
</Routes>
</BrowserRouter>

     
    </div>
  );
}



export default App;
