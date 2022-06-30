import { Box } from "@mui/material";
import React, { FC } from "react";
import { useGameContext } from "../../../Contexts/GameContext/GameContextProvider";

import style from "./WinPageProps.module.scss";

interface WinPageProps {}

const WinPage: FC<WinPageProps> = () => {
  const { teams, activeTeam } = useGameContext();
  const winTeamIndex = teams.findIndex((team) => team.teamName === activeTeam);
  const winTeam = teams[winTeamIndex];
  const losingTeams = teams.filter((team) => team.teamName !== activeTeam);
  return (
    <Box className={style.wrapper}>
      <Box className={style.content}>
        <Box className={style.winnerBlockWrap}>
          <Box className={style.winTeamName}>{winTeam.teamName}</Box>
          <Box>{winTeam.score}</Box>
        </Box>
        <Box className={style.teamsBlock}>
          {losingTeams.map((team, index) => (
            <Box className={style.teamItem} key={index}>
              <Box className={style.losingTeamName}>{team.teamName}</Box>
              <Box className={style.losingTeamScore}>{team.score}</Box>
            </Box>
          ))}
        </Box>
        <Box className={style.playMoreLinkBlock}>
          <a href="/" className={style.playMoreLink}>
            Играть ещё!
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default WinPage;
