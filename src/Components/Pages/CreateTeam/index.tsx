import { Box } from "@mui/material";
import React, { useMemo, useState } from "react";
import HeaderType1 from "../../Modules/HeaderType1";
import style from "./CreateTeam.module.scss";
import TeamNameItem from "./TeamNameItem";
import AddIcon from "@mui/icons-material/Add";
import { generateRandomNumber } from "../../../Helpers/generateRandomNumber";
import NextPageBottomButton from "../../Modules/NextPageBottomButton";
import ToCenterContent from "../../Modules/toCenterContent";
import { useGameContext } from "../../../Contexts/GameContext/GameContextProvider";

interface CreateTeamProps {}

type StringArray = string;

const namesData = ["team1", "team2"];
const startTeams = ["start team1", "start team2"];

const CreateTeam: React.FC<CreateTeamProps> = () => {
  const { handleSubmitTeams } = useGameContext();

  const [teamsData, setTeamsData] = useState([...namesData]);

  const [usersTeamName, setUsersTeamName] = useState<StringArray[] | []>(() => [
    ...startTeams,
  ]);

  const isMoreThanTwoTeams = useMemo(
    () => usersTeamName.length > 2,
    [usersTeamName]
  );

  const generateTeamName = () => {
    if (!teamsData.length) return "ещё одна команда";
    const randomNumber = generateRandomNumber(teamsData.length);

    const teamName = teamsData[randomNumber];
    setTeamsData((prev) =>
      prev.filter((teamArrayName) => teamArrayName !== teamName)
    );

    return teamName;
  };

  const handleAddTeam = () => {
    const teamName = generateTeamName();
    setUsersTeamName((prevTeam) => [...prevTeam, teamName]);
  };
  const handleRemoveTeam = (index: number) => {
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
        const teamName = generateTeamName();
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

  const handleSubmitForm = () => {
    handleSubmitTeams(usersTeamName);
  };

  return (
    <Box className={style.wrapper}>
      <HeaderType1 headerPath="/">Команды</HeaderType1>
      <ToCenterContent>
        {usersTeamName.map((item, index) => (
          <div key={index}>
            <TeamNameItem
              moreThanTwoTeams={isMoreThanTwoTeams}
              removeTeam={handleRemoveTeam}
              index={index}
              automaticallyRenameTeam={automaticallyRenameTeam}
              manuallyRenameTeam={manuallyRenameTeam}
            >
              {item}
            </TeamNameItem>
          </div>
        ))}
        <Box className={style.addTeamBlock} onClick={handleAddTeam}>
          <AddIcon className={style.addTeamIcon} />
        </Box>
      </ToCenterContent>

      <NextPageBottomButton
        path="/GameSettings"
        buttonText="Далее"
        onClick={handleSubmitForm}
      >
        <Box className={style.bottomInfoBlock}>
          Для изменения названия команды нажмите на него.
        </Box>
      </NextPageBottomButton>
    </Box>
  );
};

export default CreateTeam;
