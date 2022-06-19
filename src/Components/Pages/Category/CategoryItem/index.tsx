import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { DifficultyItem } from "..";
import style from "./CategoryItem.module.scss";

interface CategoryItemProps {
  difficultyItem: DifficultyItem;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ difficultyItem }) => {
  const { title, subTitle, exampleWords, wordCount } = difficultyItem;
  return (
    <Link to="/TeamRating" className={style.wrapper}>
      <Box className={style.categoryHeader}>
        <Box className={style.title}>{title}</Box>
        <Box className={style.subTitle}>{subTitle}</Box>
      </Box>
      <Box className={style.categoryContent}>
        <Box className={style.exampleWords}>{exampleWords}</Box>
        <Box className={style.wordCount}>{wordCount}</Box>
      </Box>
    </Link>
  );
};

export default CategoryItem;
