import './App.css';
import Navbar from "./components/Navbar.js";
import { BrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = BrowserRouter([
    {
      path:"/",
      element : <Home/>
    },
    {
      path:"/about",
      element : <About/>
    },
    {
      path : "/contact",
      element : <Contact/>
    }
  ]);

  return (
  <>
    <RouterProvider router={router}/>
    <Navbar/>
  </>
  );
}

export default App;
