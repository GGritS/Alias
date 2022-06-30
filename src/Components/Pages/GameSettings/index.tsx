import { Box } from "@mui/material";
import React, { useState } from "react";
import NextPageBottomButton from "../../Modules/NextPageBottomButton";
import HeaderType1 from "../../Modules/HeaderType1";
import ToCenterContent from "../../Modules/toCenterContent";
import style from "./GameSettings.module.scss";
import SettingsItem from "./SettingsItem";
import { useGameContext } from "../../../Contexts/GameContext/GameContextProvider";
import { settingsItems } from "../../../Constants/GameSettingsValues/GameSettingsValues";
import {
  DEFAULT_ROUND_TIME,
  DEFAULT_PENALTY_SETTING,
  DEFAULT_WORDS_TO_WIN,
} from "../../../Constants/DefaultValues";

interface GameSettingsProps {}

const GameSettings: React.FC<GameSettingsProps> = () => {
  const { handleSubmitSettings, handleSetNewActiveTeam } = useGameContext();
  const [amountWordsToWin, setAmountWordsToWin] =
    useState<number>(DEFAULT_WORDS_TO_WIN);
  const [amountSeconds, setAmountSeconds] =
    useState<number>(DEFAULT_ROUND_TIME);
  const [penaltyForMissingAWord, setPenaltyForMissingAWord] = useState<boolean>(
    DEFAULT_PENALTY_SETTING
  );

  const handleSubmitForm = () => {
    handleSubmitSettings(
      amountWordsToWin,
      amountSeconds,
      penaltyForMissingAWord
    );
    handleSetNewActiveTeam();
  };

  return (
    <Box className={style.wrapper}>
      <HeaderType1 headerPath="/CreateTeams">Настройки</HeaderType1>

      <ToCenterContent>
        {settingsItems.map((settingsItem, index) => (
          <div key={index}>
            <SettingsItem
              settingsItem={settingsItem}
              penaltyForMissingAWord={penaltyForMissingAWord}
              setPenaltyForMissingAWord={setPenaltyForMissingAWord}
              amountWordsToWin={amountWordsToWin}
              setAmountWordsToWin={setAmountWordsToWin}
              amountSeconds={amountSeconds}
              setAmountSeconds={setAmountSeconds}
            />
          </div>
        ))}
      </ToCenterContent>

      <NextPageBottomButton
        path="/Category"
        buttonText="Далее"
        onClick={handleSubmitForm}
      ></NextPageBottomButton>
    </Box>
  );
};

export default GameSettings;
