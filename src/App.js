import './App.css';
import Navbar from "./components/Navbar.js";
import { Recent } from './components/Recent.js';
import Home from './components/Home.js';
import {Route, Routes } from "react-router-dom";
import About from './components/About.js';
import Contact from './components/Contact.js';
import Help from './components/Help.js';
import Admin from './components/Admin.js';


function App() {
  
  return (
  <>
    <Navbar title = "Welcome"/>
    <Recent/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/help' element={<Help/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
    </Routes>
  </>
  );
}

export default App;
