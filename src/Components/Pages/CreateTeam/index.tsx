import { Box } from "@mui/material";
import React, { useMemo, useState } from "react";
import SettingsHeader from "../../SettingsHeader";
import style from "./CreateTeam.module.scss";
import TeamNameBlock from "./TeamNameBlock";
import AddIcon from "@mui/icons-material/Add";
import NextPageBottomButton from "../../NextPageBottomButton";
import ToCenterContent from "../../toCenterContent";
import createTeamName from "./createTeamName";

interface CreateTeamProps {}

type StringArray = string;

const namesData = ["team1", "team2"];
const startTeams = ["start team1", "start team2"];

const CreateTeam: React.FC<CreateTeamProps> = () => {
  const [teamsData, setTeamsData] = useState([...namesData]);

  const [usersTeamName, setUsersTeamName] = useState<StringArray[] | []>(() => [
    ...startTeams,
  ]);

  const isMoreThanTwoTeams = useMemo(
    () => usersTeamName.length > 2,
    [usersTeamName]
  );

  // const generateTeamName = () => {
  //   if (!teamsData.length) return "ещё одна команда";
  //   const randomNumber = generateRandomNumber(teamsData.length);

  //   const teamName = teamsData[randomNumber];

  //   const filteredTeamNames = teamsData.filter(
  //     (teamArrayName) => teamArrayName !== teamName
  //   );

  //   setTeamsData(filteredTeamNames);

  //   return teamName;
  // };

  const addTeam = () => {
    const teamName = createTeamName({ teamsData });

    const filteredTeamsData = teamsData.filter(
      (teamData) => teamData !== teamName
    );

    setUsersTeamName(filteredTeamsData);
  };

  const removeTeam = (index: number) => {
    if (usersTeamName[index] !== "ещё одна команда")
      setTeamsData((prev) => [...prev, usersTeamName[index]]);

    setUsersTeamName((prev) =>
      prev.filter((teamName, teamArrayIndex) => teamArrayIndex !== index)
    );
  };

  let prevent = false;
  const timer = 200;

  const automaticallyRenameTeam = (index: number) => {
    const timerId = setTimeout(() => {
      if (!prevent) {
        const teamName = createTeamName({ teamsData });
        const newActiveUsers = usersTeamName.map((activeName, activeIndex) => {
          if (activeIndex === index) {
            setTeamsData((prev) => [...prev, activeName]);
            return (usersTeamName[activeIndex] = teamName);
          } else return activeName;
        });
        setUsersTeamName(newActiveUsers);
      }
    }, timer);

    return () => clearTimeout(timerId);
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
      <ToCenterContent>
        {usersTeamName.map((item, index) => (
          <div key={index}>
            <TeamNameBlock
              moreThanTwoTeams={isMoreThanTwoTeams}
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
      </ToCenterContent>

      <NextPageBottomButton path="/GameSettings" buttonText="Далее">
        <Box className={style.bottomInfoBlock}>
          Для изменения названия команды нажмите на него, для ввода названия
          команды дважды нажмите на него
        </Box>
      </NextPageBottomButton>
    </Box>
  );
};

export default CreateTeam;
