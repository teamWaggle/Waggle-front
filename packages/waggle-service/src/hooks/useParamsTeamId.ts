import { useParams } from "react-router-dom";

export const useParamsTeamId = (): number => {
  const params = useParams();
  const teamId = Number(params.teamId);
  return teamId;
};
