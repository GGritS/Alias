import React, { useEffect } from "react";
import MainMenu from "../Pages/MainMenu";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateTeam from "../Pages/CreateTeam";
import ErrorPage from "../Pages/ErrorPage";
import GameSettings from "../Pages/GameSettings";
import Category from "../Pages/Category";
import GameRules from "../Pages/GameRules";
import TeamRating from "../Pages/TeamRating";
import PointsScore from "../Pages/PointsScore";
import GamePage from "../Pages/GamePage";
import WinPage from "../Pages/WinPage";
import { useGameContext } from "../../Contexts/GameContext/GameContextProvider";

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
      <Route path="/GamePage" element={<GamePage />} />
      <Route path="/WinPage" element={<WinPage />} />

      <Route path="/ErrorPage" element={<ErrorPage />} />
    </Routes>
  );
};

export default Root;
