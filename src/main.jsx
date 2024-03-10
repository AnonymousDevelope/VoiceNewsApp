import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Team, VoiceNews } from "./pages/index.js";
import "font-awesome/scss/font-awesome.scss";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/voicenews" element={<VoiceNews />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
