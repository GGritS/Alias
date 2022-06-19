import { Box } from "@mui/material";
import React from "react";
import HeaderType2 from "../../HeaderType2";
import NextPageBottomButton from "../../NextPageBottomButton";
import ToCenterContent from "../../toCenterContent";
import TeamItem from "../TeamRating/TeamItem";

import style from "./PointsScore.module.scss";
import ScoreItem from "./ScoreItem";

interface PointsScoreProps {}

const guessedWords = [
  { word: "slovo", isGuessed: true },
  { word: "slovo2", isGuessed: false },
  { word: "slovo3", isGuessed: true },
  { word: "slovo4", isGuessed: false },
  { word: "slovo5", isGuessed: false },
  { word: "slovo6", isGuessed: true },
];

const PointsScore: React.FC<PointsScoreProps> = () => {
  return (
    <Box className={style.wrapper}>
      <HeaderType2>
        <Box className={style.staticItems}>
          <Box className={style.headerText}>Набранные очки</Box>
        </Box>
        <Box className={style.teamsWrapper}>
          <TeamItem teamName="test" teamScore={3} />
        </Box>
      </HeaderType2>
      <ToCenterContent>
        <Box className={style.content}>
          {guessedWords.map((scoreItem, scoreIndex) => (
            <div key={scoreIndex}>
              <ScoreItem
                word={scoreItem.word}
                isGuessed={scoreItem.isGuessed}
              />
            </div>
          ))}
        </Box>
      </ToCenterContent>

      <NextPageBottomButton path="/TeamRating" buttonText="Продолжить" />
    </Box>
  );
};

export default PointsScore;
