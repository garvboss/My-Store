import Header from "./Components/Header.js"
import Home from "./Components/Home.js";
import Checkout from "./Components/Checkout.js";
import Login from "./Components/Login.js";
import Add from "./Components/Add.js";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/checkout" element={<><Header/><Checkout/></>} />
      <Route path="/login" element={<><Login/></>} />
      <Route path="/" element={<><Header/><Home/></>} />
      <Route path="/add" element={<><Add /></>} />
      </Routes>
      
      
    </div>
    </Router>
  );
}

export default App;
