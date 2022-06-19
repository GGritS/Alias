import { Box } from "@mui/material";
import React from "react";
import SettingsHeader from "../../SettingsHeader";
import ToCenterContent from "../../toCenterContent";
import style from "./GameRules.module.scss";

interface GameRulesProps {}

const GameRules: React.FC<GameRulesProps> = () => {
  const rules = ["", "", "", ""];
  return (
    <Box className={style.wrapper}>
      <SettingsHeader headerPath="/">Правила</SettingsHeader>
      <ToCenterContent>
        <Box className={style.logoWrap}>
          <Box className={style.logo}>Alias</Box>
        </Box>
        <Box className={style.topText}>
          Увлекательная командная игра для веселой комании
        </Box>
        <Box className={style.rule}>
          1. Задача каждого игрока - объясниить как можно больше слов товарищам
          по команде за ограниченое время;
        </Box>
        <Box className={style.rule}>
          2. Во время объяснения нельзя использовать однокоренные слова,
          озвучивать перевод с иностранных языков;
        </Box>
        <Box className={style.rule}>
          3. Отгаданное слово приносит команде одно очко, а за пропущенное слово
          команда штрафуется (в зависимости от настроек);
        </Box>
        <Box className={style.rule}>
          4. Победителем становится команда, у которой количество очков достигло
          заранее установленого значения.
        </Box>
      </ToCenterContent>
    </Box>
  );
};

export default GameRules;
