import { createContext } from "react";
import { GameContextValue } from "./types";

// const initialGameContextValue: GameContextValue = {
//   teams: [],
//   gameSettings: {
//     numberOfWordsToWin: 0,
//     roundTime: 0,
//     penaltyForMissingAWord: false,
//   },
//   wordCategory: [],
//   activeTeam: "",
//   activeWord: "",
//   guessedWords: [],
//   game: {
//     roundNumber: 0,
//     gameNumber: 0,
//   },
// };

export const GameContext = createContext<GameContextValue>(
  {} as GameContextValue
);
