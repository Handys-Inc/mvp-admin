import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./app/Home/Home";
import Tradespersons from "./app/Tradespersons";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="/customers" exact element={<Home />} />
        <Route path="/providers" exact element={<Tradespersons />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
