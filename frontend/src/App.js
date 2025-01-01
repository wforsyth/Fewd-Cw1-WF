import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.js';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Search from "./components/Search";

function App() {
  return (
    <>
      <div className="wrapper">
        <Navigation />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
