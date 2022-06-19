import { generateRandomNumber } from "../../../Helpers/generateRandomNumber";

interface CreateTeamNameProps {
  teamsData: string[];
}

const createTeamName = ({ teamsData }: CreateTeamNameProps) => {
  if (!teamsData.length) return "ещё одна команда";
  const randomNumber = generateRandomNumber(teamsData.length);

  const teamName = teamsData[randomNumber];

  return teamName;
};

export default createTeamName;
