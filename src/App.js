import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./app/Home/Home";
import Tradespersons from "./app/Tradespersons/Tradespersons";
import TeamView from "./app/Team/TeamView";
import Revenue from "./app/Revenue/Revenue";
import Marketing from "./app/Marketing/Marketing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="/customers" exact element={<Home />} />
        <Route path="/providers" exact element={<Tradespersons />} />
        <Route path="/team" exact element={<TeamView />} />
        <Route path="/revenue" exact element={<Revenue />} />
        <Route path="/marketing" exact element={<Marketing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
