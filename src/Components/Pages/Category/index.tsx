import { Box } from "@mui/material";
import React from "react";
import { difficultyLevel } from "../../../Constants/CategoryValues/CategoryValues";
import HeaderType1 from "../../Modules/HeaderType1";
import ToCenterContent from "../../Modules/toCenterContent";
import style from "./Category.module.scss";
import CategoryItem from "./CategoryItem";

interface CategoryProps {}

const Category: React.FC<CategoryProps> = () => {
  return (
    <Box className={style.wrapper}>
      <HeaderType1 headerPath="/GameSettings">Категории</HeaderType1>
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
