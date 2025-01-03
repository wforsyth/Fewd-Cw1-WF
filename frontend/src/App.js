import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.js';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="wrapper d-flex flex-column min-vh-100">
        <Navigation />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/schedule' element={<Schedule />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}
export default App;
