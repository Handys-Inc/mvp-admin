import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./app/Home/Home";
import Tradespersons from "./app/Tradespersons/Tradespersons";
import TeamView from "./app/Team/TeamView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="/customers" exact element={<Home />} />
        <Route path="/providers" exact element={<Tradespersons />} />
        <Route path="/team" exact element={<TeamView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
