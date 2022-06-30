export type Team = {
  teamName: string;
  score: number;
};

export type GuessedWords = {
  word: string;
  isGuessed: boolean;
};

export type GameSetting = {
  numberOfWordsToWin: number;
  roundTime: number;
  penaltyForMissingAWord: boolean;
};

type ArrayOf<T> = Array<T>;

export type GameContextValue = {
  teams: Team[];
  gameSettings: GameSetting;
  wordCategory: ArrayOf<string>;
  activeTeam: string;
  activeWord: string;
  guessedWords: GuessedWords[];
  gameNumber: number;
  roundNumber: number;
  isTimerStarted: boolean;
  isGameStarted: boolean;
  guessedWordCount: number;
  notGuessedWordCount: number;
  isGameEnded: boolean;
  handleGameStart: () => void;
  handleSetNewActiveTeam: () => void;
  handleCorrectWord: (word: string, isGuessed: boolean) => void;
  handleSelectCategory: (category) => void;
  handleSubmitTeams: (teamNames: string[]) => void;
  handleSubmitSettings: (
    numberOfWordsToWin: number,
    roundTime: number,
    penaltyForMissingAWord: boolean
  ) => void;
  stopTimer: () => void;
  countCorrectAndIncorrectAnswers: () => void;
  handleEndRound: (score: number) => void;
  handleChangeGuessedWordFlag: (index: number, value: boolean) => void;
  endGame: (score: number) => void;
};
