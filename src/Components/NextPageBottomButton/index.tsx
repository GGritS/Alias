import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import style from "./NextPageBottomButton.module.scss";

interface NextPageBottomButtonProps {
  children?: React.ReactNode;
  buttonText: string;
  path: string;
  onSubmit?: (index?: string) => void;
}

const NextPageBottomButton: React.FC<NextPageBottomButtonProps> = (props) => {
  const { children, buttonText, path, onSubmit } = props;
  return (
    <Box className={style.bottomAbsoluteWrap}>
      {children}
      <Link to={path} className={style.nextPageLink}>
        <Button variant="contained" className={style.nextPageButton}>
          {buttonText}
        </Button>
      </Link>
    </Box>
  );
};

export default NextPageBottomButton;
