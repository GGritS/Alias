import { Box } from "@mui/material";
import React from "react";

import style from "./HeaderType2.module.scss";

interface HeaderType2Props {
  children: React.ReactNode;
}

const HeaderType2: React.FC<HeaderType2Props> = ({ children }) => {
  return (
    <Box className={style.wrapper}>
      <Box className={style.content}>{children}</Box>
    </Box>
  );
};

export default HeaderType2;
