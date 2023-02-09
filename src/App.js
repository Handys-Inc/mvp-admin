import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./app/Home/Home";
import Tradespersons from "./app/Tradespersons/Tradespersons";
import TeamView from "./app/Team/TeamView";
import Revenue from "./app/Revenue/Revenue";
import Marketing from "./app/Marketing/Marketing";
import JobInformation from "./app/JobInformation/JobInformation";
import SupportTickets from "./app/SupportTickets/SupportTickets";
import DisputeResolution from "./app/DisputeResolution/DisputeResolution";


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
        <Route path="/job-info" exact element={<JobInformation />} />
        <Route path="/tickets" exact element={<SupportTickets />} />
        <Route path="/disputes" exact element={<DisputeResolution />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
