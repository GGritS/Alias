import React from "react";
import MainMenu from "../Pages/MainMenu";
import { Routes, Route } from "react-router-dom";
import CreateTeam from "../Pages/CreateTeam";
import ErrorPage from "../Pages/ErrorPage";
import GameSettings from "../Pages/GameSettings";
import Category from "../Pages/Category";
import GameRules from "../Pages/GameRules";
import TeamRating from "../Pages/TeamRating";
import PointsScore from "../Pages/PointsScore";

const Root = () => {
  return (
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
  );
};

export default Root;
