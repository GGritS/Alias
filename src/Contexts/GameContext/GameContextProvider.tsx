import React, { useContext, useEffect, useState } from "react";
import { GameContext } from ".";
import {
  DEFAULT_ROUND_TIME,
  DEFAULT_WORDS_TO_WIN,
  DEFAULT_PENALTY_SETTING,
} from "../../Constants/DefaultValues";
import { generateRandomNumber } from "../../Helpers/generateRandomNumber";
import { RequiredFC } from "../../types/common";
import { GameContextValue, GameSetting, GuessedWords, Team } from "./types";

type A = {
  //   value: number;
};

export const GameContextProvider: RequiredFC<A> = ({ children }) => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [gameSettings, setGameSettings] = useState<GameSetting>({
    numberOfWordsToWin: DEFAULT_WORDS_TO_WIN,
    roundTime: DEFAULT_ROUND_TIME,
    penaltyForMissingAWord: DEFAULT_PENALTY_SETTING,
  });

  const [wordCategory, setWordCategory] = useState<string[]>([]);

  const [activeWord, setActiveWord] = useState<string>("");

  const [guessedWords, setGuessedWords] = useState<GuessedWords[]>([]);

  const [gameNumber, setGameNumber] = useState<number>(1);
  const [roundNumber, setRoundNumber] = useState<number>(1);

  const [activeTeam, setActiveTeam] = useState<string>("");

  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);

  const [guessedWordCount, setGuessedWordCount] = useState(0);
  const [notGuessedWordCount, setNotGuessedWordCount] = useState(0);

  const [isGameEnded, setIsGameEnded] = useState(false);

  const endGame = (score: number) => {
    setIsGameEnded(true);
    addPointsForActiveTeam(score);
  };

  const handleGameStart = () => {
    setIsGameStarted(true);
    setIsTimerStarted(true);
    generateNewWord();
  };

  const stopTimer = () => {
    setIsTimerStarted(false);
  };

  const [activeTeamIndex, setActiveTeamIndex] = useState(0);

  const handleEndRound = (score: number) => {
    let teamIndex = activeTeamIndex;
    setIsGameStarted(false);
    setIsTimerStarted(false);
    setActiveWord("");
    setGuessedWordCount(0);
    setNotGuessedWordCount(0);
    setGuessedWords([]);
    if (teamIndex === teams.length - 1) {
      setActiveTeamIndex(0);
      setRoundNumber((prev) => prev + 1);
      setGameNumber(1);
      setActiveTeam(teams[0].teamName);
      addPointsForActiveTeam(score);
    } else {
      teamIndex += 1;
      setActiveTeamIndex(teamIndex);
      setGameNumber((prev) => prev + 1);
      setActiveTeam(teams[teamIndex].teamName);
      addPointsForActiveTeam(score);
    }
  };

  const handleEndGame = () => {};

  const addPointsForActiveTeam = (points: number) => {
    const newTeams = teams.filter((team) => {
      if (team.teamName === activeTeam)
        return { teamName: team.teamName, score: (team.score += points) };
      else return team;
    });
    setTeams(newTeams);
  };

  const generateNewWord = () => {
    const randomIndex = generateRandomNumber(wordCategory.length);
    const randomWord = wordCategory[randomIndex];

    setActiveWord(randomWord);
  };

  const handleCorrectWord = (word: string, isGuessed: boolean) => {
    setGuessedWords((prev) => [...prev, { word, isGuessed }]);
    generateNewWord();
  };

  const handleSubmitTeams = (teamNames: string[]) => {
    const teamsWithScore = teamNames.map((teamName, index) => {
      return {
        pk: index,
        teamName,
        score: 0,
      };
    });

    setTeams(teamsWithScore);
  };

  const handleSelectCategory = (category: string[]) => {
    setWordCategory(category);
  };

  const handleSetNewActiveTeam = () => {
    setActiveTeam(teams[activeTeamIndex].teamName);
  };

  const handleSubmitSettings = (
    numberOfWordsToWin: number,
    roundTime: number,
    penaltyForMissingAWord: boolean
  ) => {
    setGameSettings({ numberOfWordsToWin, roundTime, penaltyForMissingAWord });
  };

  const countCorrectAndIncorrectAnswers = () => {
    const rightWordsCount = guessedWords.filter(
      (word) => word.isGuessed === true
    ).length;
    setGuessedWordCount(rightWordsCount);
    setNotGuessedWordCount(guessedWords.length - rightWordsCount);
  };

  const handleChangeGuessedWordFlag = (index: number, value: boolean) => {
    const changedGuessedWords = guessedWords.map((word, wordIndex) => {
      if (wordIndex !== index) return word;
      else return { word: word.word, isGuessed: value };
    });
    setGuessedWords(changedGuessedWords);
  };

  const value: GameContextValue = {
    gameSettings,
    roundNumber,
    gameNumber,
    guessedWords,
    activeWord,
    wordCategory,
    teams,
    activeTeam,
    isGameStarted,
    isTimerStarted,
    handleGameStart,
    handleSetNewActiveTeam,
    handleSubmitTeams,
    handleCorrectWord,
    handleSubmitSettings,
    handleSelectCategory,
    stopTimer,
    countCorrectAndIncorrectAnswers,
    guessedWordCount,
    notGuessedWordCount,
    handleEndRound,
    handleChangeGuessedWordFlag,
    endGame,
    isGameEnded,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGameContext = () => {
  const {
    gameSettings,
    roundNumber,
    gameNumber,
    guessedWords,
    activeWord,
    wordCategory,
    teams,
    activeTeam,
    isGameStarted,
    isTimerStarted,
    handleGameStart,
    handleCorrectWord,
    handleSubmitTeams,
    handleSetNewActiveTeam,
    handleSubmitSettings,
    handleSelectCategory,
    stopTimer,
    countCorrectAndIncorrectAnswers,
    guessedWordCount,
    notGuessedWordCount,
    handleEndRound,
    handleChangeGuessedWordFlag,
    endGame,
    isGameEnded,
  } = useContext(GameContext);

  return {
    gameSettings,
    roundNumber,
    gameNumber,
    guessedWords,
    activeWord,
    wordCategory,
    teams,
    activeTeam,
    isGameStarted,
    isTimerStarted,
    handleGameStart,
    handleSubmitTeams,
    handleCorrectWord,
    handleSetNewActiveTeam,
    handleSubmitSettings,
    handleSelectCategory,
    stopTimer,
    countCorrectAndIncorrectAnswers,
    guessedWordCount,
    notGuessedWordCount,
    handleEndRound,
    handleChangeGuessedWordFlag,
    endGame,
    isGameEnded,
  };
};
