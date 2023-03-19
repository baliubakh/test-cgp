import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.page";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
