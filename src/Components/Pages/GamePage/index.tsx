import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGameContext } from "../../../Contexts/GameContext/GameContextProvider";
import style from "./GamePage.module.scss";
import GameTimer from "./GameTimer";

interface GamePageProps {}

const GamePage: React.FC<GamePageProps> = () => {
  const {
    activeWord,
    handleCorrectWord,
    guessedWords,
    isTimerStarted,
    handleGameStart,
    isGameStarted,
    countCorrectAndIncorrectAnswers,
    guessedWordCount,
    notGuessedWordCount,
  } = useGameContext();

  useEffect(() => {
    countCorrectAndIncorrectAnswers();
  }, [guessedWords]);

  return (
    <Box className={style.wrapper}>
      <Box className={style.content}>
        <Box className={style.header}>
          <Box className={style.teamName}>Team name</Box>
          <Box className={style.wordsCount}>{guessedWordCount}</Box>
          <Box className={style.headerAndFooterText}>Отгадано</Box>
        </Box>
        <Box className={style.main}>
          {!isGameStarted && (
            <Box className={style.startGameBtn} onClick={handleGameStart}>
              Начать!
            </Box>
          )}

          {!isTimerStarted ? (
            <Box className={style.answersBlock}>
              <Link to="/PointsScore">
                <Box
                  className={style.correctAnswer}
                  onClick={() => {
                    handleCorrectWord(activeWord, true);
                  }}
                ></Box>
                <Box
                  className={style.wrongAnswer}
                  onClick={() => {
                    handleCorrectWord(activeWord, false);
                  }}
                ></Box>
              </Link>
            </Box>
          ) : (
            <Box className={style.answersBlock}>
              <Box
                className={style.correctAnswer}
                onClick={() => {
                  handleCorrectWord(activeWord, true);
                }}
              ></Box>
              <Box
                className={style.wrongAnswer}
                onClick={() => {
                  handleCorrectWord(activeWord, false);
                }}
              ></Box>
            </Box>
          )}

          <Box className={style.wordsWrapper}>
            <Box className={style.wordContent}> {activeWord}</Box>
          </Box>
        </Box>
        <Box className={style.footer}>
          <Box className={style.headerAndFooterText}>Пропущено</Box>
          <Box className={style.wordsCount}>{notGuessedWordCount}</Box>
          <Box className={style.timerWrapper}>
            <GameTimer />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GamePage;
