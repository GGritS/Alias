import { Box } from "@mui/material";
import React from "react";
import SettingsHeader from "../../SettingsHeader";
import ToCenterContent from "../../toCenterContent";
import style from "./Category.module.scss";
import CategoryItem from "./CategoryItem";

interface CategoryProps {}
export type DifficultyItem = {
  title: string;
  subTitle: string;
  exampleWords: string;
  wordCount: number;
  gameWords: string[];
};

const words: string[] = [
  "слово",
  "дорога",
  "алфавит",
  "имя",
  "песок",
  "алмаз",
  "лопата",
];

const difficultyLevel: DifficultyItem[] = [
  {
    title: "Быстрая игра",
    subTitle: "Легкий",
    exampleWords: "кекс, луг, тень",
    wordCount: words.length,
    gameWords: [...words],
  },
  {
    title: "Оптимус",
    subTitle: "Средний",
    exampleWords: "арсенал, интерьер, музыка",
    wordCount: words.length,
    gameWords: [...words],
  },
  {
    title: "Мозговой штурм",
    subTitle: "Сложный",
    exampleWords: "",
    wordCount: words.length,
    gameWords: [...words],
  },
];

const Category: React.FC<CategoryProps> = () => {
  return (
    <Box className={style.wrapper}>
      <SettingsHeader headerPath="/GameSettings">Категории</SettingsHeader>
      <ToCenterContent>
        {difficultyLevel.map((difficultyItem, difficultyIndex) => (
          <div key={difficultyIndex}>
            <CategoryItem difficultyItem={difficultyItem} />
          </div>
        ))}
      </ToCenterContent>
    </Box>
  );
};

export default Category;
