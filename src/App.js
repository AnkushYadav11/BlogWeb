import './App.css';
import Navbar from "./components/Navbar.js";
import Home from './components/Home.js';
import {Route, Routes } from "react-router-dom";
import About from './components/About.js';
import Contact from './components/Contact.js';
import Help from './components/Help.js';


function App() {
  return (
  <>
    <Navbar title = "Welcome"/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/help' element={<Help/>}></Route>
    </Routes>
  </>
  );
}

export default App;
