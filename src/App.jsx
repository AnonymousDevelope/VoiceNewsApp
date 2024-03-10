/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { Navbar } from "./components";
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import { Dashboard, Team } from "./pages";
function App() {
  return (
    <>
      {/* navbar */}
      <div className="mx-auto lg:w-[100%]">
        <Navbar />
        <main className="mx-auto mt-10  px-2 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
