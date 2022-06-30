import React from "react";

import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import style from "./SettingsHeader.module.scss";
import { Link } from "react-router-dom";

interface HeaderType1Props {
  children: React.ReactNode;
  headerPath: string;
}

const HeaderType1: React.FC<HeaderType1Props> = ({ children, headerPath }) => {
  return (
    <Box className={style.header}>
      <Box className={style.headerContent}>
        <Link to={headerPath} className={style.headerLink}>
          <ArrowBackIcon className={style.backButton} />
        </Link>
        <Box className={style.headerText}>{children}</Box>
      </Box>
    </Box>
  );
};

export default HeaderType1;
