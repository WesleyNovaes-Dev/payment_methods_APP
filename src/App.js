import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Payment } from "./components/Payment";
import { Success } from "./components/Success";
import { Failure } from "./components/Failure";
//import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagamento" element={<Payment />} />
        <Route path="/sucesso" element={<Success />} />
        <Route path="/falha" element={<Failure />} />
      </Routes>
    </Router>
  );
}  
