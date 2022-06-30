import { Box } from "@mui/material";
import React from "react";

interface ErrorPageProps {}

const ErrorPage: React.FC<ErrorPageProps> = () => {
  return (
    <Box>
      Error
      <br />
      если при создании комоненты (useEffect) gameSettingsFlag = false то
      редирект сюда
    </Box>
  );
};

export default ErrorPage;
