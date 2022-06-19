import { Box } from "@mui/material";
import React from "react";
import style from "./ToCenterContent.module.scss";

interface toCenterContentProps {
  children: React.ReactNode;
}

const ToCenterContent: React.FC<toCenterContentProps> = ({ children }) => {
  return (
    <Box className={style.wrapper}>
      <Box className={style.content}>{children}</Box>
    </Box>
  );
};

export default ToCenterContent;
