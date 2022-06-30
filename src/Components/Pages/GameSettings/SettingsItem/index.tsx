import { Switch } from "@mui/material";
import { Box } from "@mui/system";
import React, { ChangeEvent, useEffect, useState } from "react";
import { settingsItems } from "../../../../Constants/GameSettingsValues/GameSettingsValues";
import style from "./SettingsItem.module.scss";

interface SettingsItemProps {
  settingsItem: settingsItems;
  penaltyForMissingAWord: boolean;
  setPenaltyForMissingAWord: React.Dispatch<React.SetStateAction<boolean>>;
  amountWordsToWin: number;
  setAmountWordsToWin: React.Dispatch<React.SetStateAction<number>>;
  amountSeconds: number;
  setAmountSeconds: React.Dispatch<React.SetStateAction<number>>;
}

const SettingsItem: React.FC<SettingsItemProps> = ({
  settingsItem,
  penaltyForMissingAWord,
  setPenaltyForMissingAWord,

  amountWordsToWin,
  setAmountWordsToWin,
  amountSeconds,
  setAmountSeconds,
}) => {
  const {
    title,
    subtitle,
    presenceOfARangeInput,
    rangeInputSettings,
    presenceOfACounter,
  } = settingsItem;

  return (
    <Box className={style.wrapper}>
      <Box className={style.headerWrapper}>
        <Box className={style.textWrap}>
          <Box className={style.title}>{title}</Box>
          <Box className={style.subTitle}>{subtitle}</Box>
        </Box>
        {presenceOfACounter ? (
          <Box className={style.amount}>
            {rangeInputSettings.maxValue === 200
              ? amountWordsToWin
              : amountSeconds}
          </Box>
        ) : (
          <Box>
            <Switch
              onClick={() => setPenaltyForMissingAWord((prev) => !prev)}
            />
          </Box>
        )}
      </Box>
      {presenceOfARangeInput && (
        <Box className={style.inputRangeWrapper}>
          {rangeInputSettings.maxValue === 200 ? (
            <input
              step={5}
              type="range"
              max={rangeInputSettings?.maxValue}
              min={rangeInputSettings?.minValue}
              value={amountWordsToWin}
              onChange={(e) => setAmountWordsToWin(+e.target.value)}
              className={style.inputRange}
            />
          ) : (
            <input
              step={5}
              type="range"
              max={rangeInputSettings?.maxValue}
              min={rangeInputSettings?.minValue}
              value={amountSeconds}
              onChange={(e) => setAmountSeconds(+e.target.value)}
              className={style.inputRange}
            />
          )}
        </Box>
      )}
    </Box>
  );
};

export default SettingsItem;
