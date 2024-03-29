// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from './components/TopBar';
import About from './components/About';
import Contact from './components/Contact';
import Policy from './components/Policy';
import NavBar from './components/NavBar';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import Register from './screens/Register';
import Login from './screens/Login';
import AdminScreen from './screens/AdminScreen';
import OrderScreen from './screens/OrderScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopBar />
        <NavBar />
      </div>
      <Routes>
        <Route path="/admin/*" element={<AdminScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/orders" element={<OrderScreen />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
