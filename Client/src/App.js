// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Container} from "react-bootstrap";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from './components/TopBar';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopBar />
        <NavBar />
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </BrowserRouter>

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


  );
}

export default App;
