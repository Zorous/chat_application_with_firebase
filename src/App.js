import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Home, Register, Login} from "./pages/index";

import "./style.scss"


function App() {
  return (
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  </Routes>
  );
}

export default App;
