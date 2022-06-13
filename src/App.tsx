import React from "react";
import MainMenu from "./Components/MainMenu";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainMenu />} />
      </Routes>
    </div>
  );
}

export default App;
