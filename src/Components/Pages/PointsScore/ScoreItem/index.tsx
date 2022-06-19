import { Box } from "@mui/material";
import React, { useState } from "react";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";

import style from "./ScoreItemProps.module.scss";

interface ScoreItemProps {
  word: string;
  isGuessed: boolean;
}

const ScoreItem: React.FC<ScoreItemProps> = ({ word, isGuessed }) => {
  const [guessed, setGuessed] = useState(isGuessed);
  return (
    <Box className={style.wrapper}>
      <Box className={style.word}>{word}</Box>
      <Box className={style.likeIconBlock}>
        {guessed ? (
          <ThumbUpOutlinedIcon
            onClick={() => setGuessed(!guessed)}
            className={style.likeIcon}
          />
        ) : (
          <ThumbUpRoundedIcon
            onClick={() => setGuessed(!guessed)}
            className={style.likeIcon}
          />
        )}
      </Box>
    </Box>
  );
};

export default ScoreItem;
