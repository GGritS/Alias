import { Box } from "@mui/material";
import React from "react";

import style from "./TeamItem.module.scss";

interface TeamItemProps {
  teamName: string;
  teamScore: number;
}

const TeamItem: React.FC<TeamItemProps> = ({ teamName, teamScore }) => {
  return (
    <Box className={style.wrapper}>
      <Box className={style.teamName}>{teamName}</Box>
      <Box className={style.teamScore}>{teamScore}</Box>
    </Box>
  );
};

export default TeamItem;
