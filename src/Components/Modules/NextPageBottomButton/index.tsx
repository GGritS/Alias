import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import style from "./NextPageBottomButton.module.scss";

interface NextPageBottomButtonProps {
  children?: React.ReactNode;
  buttonText: string;
  path: string;
  onClick?: () => void;
}

const noop = () => {};

const NextPageBottomButton: React.FC<NextPageBottomButtonProps> = ({
  children,
  buttonText,
  path,
  onClick = noop,
}) => {
  return (
    <Box className={style.wrapper}>
      {children}

      <Link to={path} className={style.nextPageLink} onClick={onClick}>
        <Button variant="contained" className={style.nextPageButton}>
          {buttonText}
        </Button>
      </Link>
    </Box>
  );
};

export default NextPageBottomButton;
