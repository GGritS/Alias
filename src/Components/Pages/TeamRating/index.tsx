import { Box } from "@mui/material";
import React from "react";
import HeaderType2 from "../../HeaderType2";
import NextPageBottomButton from "../../NextPageBottomButton";
import ToCenterContent from "../../toCenterContent";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

import style from "./TeamRating.module.scss";
import TeamItem from "./TeamItem";

interface TeamRatingProps {}

const teams = [
  {
    teamName: "team name1",
    teamScore: 5,
  },
  {
    teamName: "team name2",
    teamScore: 2,
  },
];

const TeamRating: React.FC<TeamRatingProps> = () => {
  return (
    <Box className={style.wrapper}>
      <HeaderType2>
        <Box className={style.staticItems}>
          <Box className={style.headerText}>Рейтинг команд</Box>
          <Box className={style.pointsToWin}>
            <SportsScoreIcon className={style.goalLogo} />
            <Box className={style.goalText}>10</Box>
          </Box>
        </Box>
        <Box className={style.teamsWrapper}>
          {teams.map((teamItem, teamIndex) => (
            <TeamItem
              teamName={teamItem.teamName}
              teamScore={teamItem.teamScore}
              key={teamIndex}
            />
          ))}
        </Box>
      </HeaderType2>
      <ToCenterContent>
        <Box className={style.content}>
          <Box className={style.roundText}>
            Раунд (active round)/ Игра (active game)
          </Box>
          <Box className={style.readyText}>готовятся к игре</Box>
          <Box className={style.nextTeamText}>Team Name (Active team)</Box>
        </Box>
      </ToCenterContent>
      <NextPageBottomButton path="/GamePage" buttonText="Поехали!" />
    </Box>
  );
};

export default TeamRating;
