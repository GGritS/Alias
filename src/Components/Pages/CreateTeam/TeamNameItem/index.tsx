import { Box } from "@mui/system";
import React from "react";
import style from "./TeamNameBlock.module.scss";
import CloseIcon from "@mui/icons-material/Close";

interface TeamNameItemProps {
  children: React.ReactNode;
  index: number;
  moreThanTwoTeams: boolean;
  removeTeam: (index: number) => void;
  automaticallyRenameTeam: (index: number) => void;
  manuallyRenameTeam: () => void;
}

const TeamNameItem: React.FC<TeamNameItemProps> = ({
  children,
  index,
  moreThanTwoTeams,
  removeTeam,
  automaticallyRenameTeam,
  manuallyRenameTeam,
}) => {
  return (
    <Box className={style.wrapper}>
      <Box
        className={style.teamNameText}
        onClick={() => automaticallyRenameTeam(index)}
        onDoubleClick={manuallyRenameTeam}
      >
        {children}
      </Box>
      {moreThanTwoTeams && (
        <CloseIcon
          className={style.removeTeamIcon}
          titleAccess="removeTeam"
          onClick={() => removeTeam(index)}
        />
      )}
    </Box>
  );
};

export default TeamNameItem;
