import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import NextPageBottomButton from "../../NextPageBottomButton";
import SettingsHeader from "../../SettingsHeader";
import ToCenterContent from "../../toCenterContent";
import style from "./GameSettings.module.scss";
import SettingsItem from "./SettingsItem";

interface GameSettingsProps {}

export type settingsItems = {
  header: string;
  subtitle: string;
  presenceOfASlider: boolean;
  presenceOfACounter: boolean;
  presenceOfASwitch: boolean;
};

const settingsItems: settingsItems[] = [
  {
    header: "Количество слов",
    subtitle: "для достижения победы",
    presenceOfASlider: true,
    presenceOfACounter: true,
    presenceOfASwitch: false,
  },
  {
    header: "Время раунда",
    subtitle: "продолжительность в секундах",
    presenceOfASlider: true,
    presenceOfACounter: true,
    presenceOfASwitch: false,
  },
  {
    header: "Штраф за пропуск",
    subtitle: "каждое пропущенное слово отнимает очко",
    presenceOfASlider: false,
    presenceOfACounter: false,
    presenceOfASwitch: true,
  },
];

const GameSettings: React.FC<GameSettingsProps> = () => {
  return (
    <Box className={style.wrapper}>
      <SettingsHeader headerPath="/CreateTeams">Настройки</SettingsHeader>

      <ToCenterContent>
        {settingsItems.map((settingsItem, index) => (
          <div key={index}>
            <SettingsItem />
          </div>
        ))}
      </ToCenterContent>

      <NextPageBottomButton
        path="/Category"
        buttonText="Далее"
      ></NextPageBottomButton>
    </Box>
  );
};

export default GameSettings;
