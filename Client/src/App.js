// import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import {Container} from "react-bootstrap";
import {BrowserRouter, Route, Routes } from "react-router-dom";
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
>>>>>>> c0081b5 (tweaks)
import TopBar from './components/TopBar';
import About from './components/About';
import Contact from './components/Contact';
import Policy from './components/Policy';
<<<<<<< HEAD
=======
import NavBar from './components/NavBar';
>>>>>>> c0081b5 (tweaks)

function App() {
  return (
    <BrowserRouter>
      <div className="App">
<<<<<<< HEAD
      <TopBar />
    </div>
    <Routes>
      <Route path = "/about" element={<About/>} />
      <Route path = "/contact" element={<Contact/>} />
      <Route path = "/policy" element={<Policy/>} />
    </Routes>
    </BrowserRouter>
    
    
=======
        <TopBar />
        <NavBar />
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </BrowserRouter>


>>>>>>> c0081b5 (tweaks)
  );
}

export default App;
