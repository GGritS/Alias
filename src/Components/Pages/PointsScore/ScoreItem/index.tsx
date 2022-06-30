import { Box } from "@mui/material";
import React, { useEffect } from "react";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";

import style from "./ScoreItemProps.module.scss";
import { useGameContext } from "../../../../Contexts/GameContext/GameContextProvider";

interface ScoreItemProps {
  word: string;
  isGuessed: boolean;
  index: number;
}

const ScoreItem: React.FC<ScoreItemProps> = ({ word, isGuessed, index }) => {
  const { handleChangeGuessedWordFlag, countCorrectAndIncorrectAnswers } =
    useGameContext();

  useEffect(countCorrectAndIncorrectAnswers);

  return (
    <Box className={style.wrapper}>
      <Box className={style.word}>{word}</Box>
      <Box className={style.likeIconBlock}>
        {isGuessed ? (
          <ThumbUpRoundedIcon
            onClick={() => {
              handleChangeGuessedWordFlag(index, !isGuessed);
            }}
            className={style.likeIcon}
          />
        ) : (
          <ThumbUpOutlinedIcon
            onClick={() => {
              handleChangeGuessedWordFlag(index, !isGuessed);
            }}
            className={style.dislikeIcon}
          />
        )}
      </Box>
    </Box>
  );
};

export default ScoreItem;
