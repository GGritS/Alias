import { Box, Button } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import SettingsHeader from "../SettingsHeader";
import style from "./CreateTeam.module.scss";
import TeamNameBlock from "./TeamNameBlock";
import AddIcon from "@mui/icons-material/Add";
import { generateRandomNumber } from "../../Helpers/generateRandomNumber";

interface CreateTeamProps {}

type StringArray = string;

const namesData = ["team1", "team2"];
const startTeams = ["start team1", "start team2"];

const CreateTeam: React.FC<CreateTeamProps> = () => {
  const [teamsData, setTeamsData] = useState([...namesData]);

  const [usersTeamName, setUsersTeamName] = useState<StringArray[] | []>(() => [
    ...startTeams,
  ]);
  const [moreThanTwoTeams, setMoreThanTwoTeams] = useState<boolean>(false);

  const generateTeamName = () => {
    if (!teamsData.length) return "ещё одна команда";
    const randomNumber = generateRandomNumber(teamsData.length);

    const teamName = teamsData[randomNumber];
    setTeamsData((prev) =>
      prev.filter((teamArrayName) => teamArrayName !== teamName)
    );

    return teamName;
  };

  const addTeam = () => {
    if (usersTeamName.length >= 2) setMoreThanTwoTeams(true);
    const teamName = generateTeamName();
    setUsersTeamName((prevTeam) => [...prevTeam, teamName]);
  };
  const removeTeam = (index: number) => {
    if (usersTeamName.length <= 3) setMoreThanTwoTeams(false);
    setTeamsData((prev) => [...prev, usersTeamName[index]]);
    setUsersTeamName((prev) =>
      prev.filter((teamName, teamArrayIndex) => teamArrayIndex !== index)
    );
  };

  let prevent = false;
  const timer = 200;

  const automaticallyRenameTeam = (index: number) => {
    setTimeout(() => {
      if (!prevent) {
        const teamName = generateTeamName();
        const newActiveUsers = usersTeamName.map((activeName, activeIndex) => {
          if (activeIndex === index) {
            setTeamsData((prev) => [...prev, activeName]);
            return (usersTeamName[activeIndex] = teamName);
          }
          // return
          else return activeName;
        });
        setUsersTeamName(newActiveUsers);
      }
    }, timer);
  };
  const manuallyRenameTeam = () => {
    prevent = true;
    console.log("double click");
    setTimeout(() => {
      prevent = false;
    }, timer);
  };

  return (
    <Box className={style.wrapper}>
      <SettingsHeader headerPath="/">Команды</SettingsHeader>
      <Box className={style.teamsNamesWrapper}>
        <Box className={style.teamsNamesContent}>
          {usersTeamName.map((item, index) => (
            <div key={index}>
              <TeamNameBlock
                moreThanTwoTeams={moreThanTwoTeams}
                removeTeam={removeTeam}
                index={index}
                automaticallyRenameTeam={automaticallyRenameTeam}
                manuallyRenameTeam={manuallyRenameTeam}
              >
                {item}
              </TeamNameBlock>
            </div>
          ))}
          <Box className={style.addTeamBlock} onClick={addTeam}>
            <AddIcon className={style.addTeamIcon} />
          </Box>
        </Box>
      </Box>
      <Box className={style.bottomAbsoluteWrap}>
        <Box className={style.bottomInfoBlock}>
          Для старта нужно две команды
        </Box>
        <Link to="/gameSettings" className={style.nextPageLink}>
          <Button variant="contained" className={style.nextPageButton}>
            Далее
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default CreateTeam;
