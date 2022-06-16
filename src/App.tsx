import React from "react";
import MainMenu from "./Components/MainMenu";
import { Routes, Route, Link } from "react-router-dom";
import CreateTeam from "./Components/CreateTeam";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/CreateTeams" element={<CreateTeam />} />
        <Route path="/ErrorPage" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
