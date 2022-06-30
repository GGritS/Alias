import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeaderType2 from "../../Modules/HeaderType2";
import NextPageBottomButton from "../../Modules/NextPageBottomButton";
import ToCenterContent from "../../Modules/toCenterContent";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

import style from "./TeamRating.module.scss";
import TeamItem from "./TeamItem";
import { useGameContext } from "../../../Contexts/GameContext/GameContextProvider";
import { Navigate, Route } from "react-router-dom";

interface TeamRatingProps {}

// const teams = [
//   {
//     teamName: "team name1",
//     teamScore: 5,
//   },
//   {
//     teamName: "team name2",
//     teamScore: 2,
//   },
// ];

const TeamRating: React.FC<TeamRatingProps> = () => {
  const { gameSettings, activeTeam, gameNumber, roundNumber, teams } =
    useGameContext();

  const submitForm = () => {
    // console.log("TeamRating");
  };
  return (
    <Box className={style.wrapper}>
      <HeaderType2>
        <Box className={style.staticItems}>
          <Box className={style.headerText}>Рейтинг команд</Box>
          <Box className={style.pointsToWin}>
            <SportsScoreIcon className={style.goalLogo} />
            <Box className={style.goalText}>
              {gameSettings.numberOfWordsToWin}
            </Box>
          </Box>
        </Box>
        <Box className={style.teamsWrapper}>
          {teams.map((teamItem, teamIndex) => (
            <TeamItem
              teamName={teamItem.teamName}
              teamScore={teamItem.score}
              key={teamIndex}
            />
          ))}
        </Box>
      </HeaderType2>
      <ToCenterContent>
        <Box className={style.content}>
          <Box className={style.roundText}>
            Раунд {roundNumber} / Игра {gameNumber}
          </Box>
          <Box className={style.readyText}>готовятся к игре</Box>
          <Box className={style.nextTeamText}>{activeTeam}</Box>
        </Box>
      </ToCenterContent>
      <NextPageBottomButton
        path="/GamePage"
        buttonText="Поехали!"
        onClick={submitForm}
      />
    </Box>
  );
};

export default TeamRating;
