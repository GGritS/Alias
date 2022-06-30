import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import style from "./ManuallyRenameTeam.module.scss";

interface ManuallyRenameTeamProps {}

const ManuallyRenameTeam: React.FC<ManuallyRenameTeamProps> = () => {
  const [teamNameLength, setTeamNameLength] = useState(0);
  return (
    <Box className={style.wrapper}>
      <Box className={style.content}>
        <Box className={style.headerText}>Название команды:</Box>
        <TextField
          label="Standard"
          variant="standard"
          fullWidth
          className={style.input}
          size="medium"
        />
        <Box className={style.counter}>{teamNameLength}/30</Box>
        <Box className={style.buttonsWrapper}>
          <Button variant="text" className={style.button}>
            Отмена
          </Button>
          <Button
            variant="text"
            className={style.button}
            sx={{ marginLeft: "20px" }}
          >
            Ок
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ManuallyRenameTeam;
