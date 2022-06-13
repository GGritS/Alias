import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import style from "./MainMenu.module.scss";
import mainMenuPicture from "./../../images/mainMenuPicture.jpeg";

interface MainMenuProps {}

const MainMenu: React.FC<MainMenuProps> = () => {
  return (
    <Box className={style.wrapper}>
      <Box className={style.logoWrap}>
        <Box className={style.logoBlockWrap}>
          <Box className={style.logoBlocText}>Alias</Box>
        </Box>

        <Box
          component="img"
          alt="House photo"
          src={mainMenuPicture}
          className={style.mainMenuPicture}
        />
      </Box>

      <Box className={style.buttonBlock}>
        <Link to="/CreateTeams" className={style.linkWrap}>
          <Button variant="contained" className={style.button}>
            Новая игра
          </Button>
        </Link>
        <Link to="/GameRules" className={style.linkWrap}>
          <Button variant="contained" className={style.button}>
            Правила
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default MainMenu;
