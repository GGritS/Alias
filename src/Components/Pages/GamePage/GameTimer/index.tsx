import { Box } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useGameContext } from "../../../../Contexts/GameContext/GameContextProvider";
import style from "./GameTimer.module.scss";

interface GameTimerProps {}

const GameTimer: React.FC<GameTimerProps> = () => {
  const { isTimerStarted, gameSettings, stopTimer } = useGameContext();
  const [time, setTime] = useState<number>(gameSettings.roundTime);

  useMemo(() => {
    if (isTimerStarted) {
      if (time === 0) {
        stopTimer();
      } else {
        setTimeout(() => {
          setTime((prev) => prev - 1);
        }, 1000);
      }
    }
  }, [time, isTimerStarted]);

  return <Box className={style.wrapper}>{time} s</Box>;
};

export default GameTimer;
