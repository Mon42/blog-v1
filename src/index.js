import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BG from "./componets/BG/BG";
import ChallengesMain from "./componets/Challenges/ChallengesMain";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*Adding the routes on Index code */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="bg" element={<BG />} />
        <Route path="challengesmain" element={<ChallengesMain />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
