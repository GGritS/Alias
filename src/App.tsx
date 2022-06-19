import React from "react";
import MainMenu from "./Components/Pages/MainMenu";
import { Routes, Route, Link } from "react-router-dom";
import CreateTeam from "./Components/Pages/CreateTeam";
import ErrorPage from "./Components/Pages/ErrorPage";
import GameSettings from "./Components/Pages/GameSettings";
import Category from "./Components/Pages/Category";
import GameRules from "./Components/Pages/GameRules";
import TeamRating from "./Components/Pages/TeamRating";
import PointsScore from "./Components/Pages/PointsScore";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/CreateTeams" element={<CreateTeam />} />
        <Route path="/GameSettings" element={<GameSettings />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Rules" element={<GameRules />} />
        <Route path="/TeamRating" element={<TeamRating />} />
        <Route path="/PointsScore" element={<PointsScore />} />

        <Route path="/ErrorPage" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
