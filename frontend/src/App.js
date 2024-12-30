import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.js';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Register from "./components/Register";

function App() {
  return (
    <>
      <div className="wrapper">
        <Navigation />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path ="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
