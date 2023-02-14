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
import RefundRequests from "./app/RefundRequests/RefundRequests";
import TradespersonRequests from "./app/Tradespersons/TradespersonRequests";
import ScheduledJobs from "./app/ScheduledJobs/ScheduledJobs";
import CompletedJobs from "./app/CompletedJobs/CompletedJobs";


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
        <Route path="/refund-requests" exact element={<RefundRequests />} />
        <Route path="/tradesperson-requests" exact element={<TradespersonRequests />} />
        <Route path="/scheduled-jobs" exact element={<ScheduledJobs />} />
        <Route path="/completed-jobs" exact element={<CompletedJobs />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
