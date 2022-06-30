import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useGameContext } from "../../../Contexts/GameContext/GameContextProvider";
import HeaderType2 from "../../Modules/HeaderType2";
import NextPageBottomButton from "../../Modules/NextPageBottomButton";
import ToCenterContent from "../../Modules/toCenterContent";
import TeamItem from "../TeamRating/TeamItem";

import style from "./PointsScore.module.scss";
import ScoreItem from "./ScoreItem";

interface PointsScoreProps {}

const PointsScore: React.FC<PointsScoreProps> = () => {
  const {
    guessedWords,
    gameSettings,
    guessedWordCount,
    notGuessedWordCount,
    activeTeam,
    handleEndRound,
    endGame,
    teams,
  } = useGameContext();

  const [score, setScore] = useState(0);

  const [nextPageLink, setNextPageLink] = useState("/TeamRating");

  useEffect(() => {
    const activeTeamIndex = teams.findIndex(
      (team) => activeTeam === team.teamName
    );
    if (
      teams[activeTeamIndex].score + score >=
      gameSettings.numberOfWordsToWin
    ) {
      setNextPageLink("/WinPage");
    } else setNextPageLink("/TeamRating");
  });

  const countTheScore = (thePresenceOfFine: boolean) => {
    if (!thePresenceOfFine) {
      setScore(guessedWordCount);
      return guessedWordCount;
    } else {
      setScore(guessedWordCount - notGuessedWordCount);
      return guessedWordCount - notGuessedWordCount;
    }
  };

  useEffect(() => {
    countTheScore(gameSettings.penaltyForMissingAWord);
  });

  const submitForm = () => {
    const activeTeamIndex = teams.findIndex(
      (team) => activeTeam === team.teamName
    );
    if (
      teams[activeTeamIndex].score + score >=
      gameSettings.numberOfWordsToWin
    ) {
      endGame(score);
    } else {
      handleEndRound(score);
    }
  };
  return (
    <Box className={style.wrapper}>
      <HeaderType2>
        <Box className={style.staticItems}>
          <Box className={style.headerText}>Набранные очки</Box>
        </Box>
        <Box className={style.teamsWrapper}>
          <TeamItem teamName={activeTeam} teamScore={score} />
        </Box>
      </HeaderType2>
      <ToCenterContent>
        <Box className={style.content}>
          {guessedWords.map((scoreItem, scoreIndex) => (
            <div key={scoreIndex}>
              <ScoreItem
                word={scoreItem.word}
                isGuessed={scoreItem.isGuessed}
                index={scoreIndex}
              />
            </div>
          ))}
        </Box>
      </ToCenterContent>

      <NextPageBottomButton
        path={nextPageLink}
        buttonText="Продолжить"
        onClick={submitForm}
      />
    </Box>
  );
};

export default PointsScore;
