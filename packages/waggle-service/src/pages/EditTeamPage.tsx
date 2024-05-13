import { TeamForm } from "@/components/Team";
import { useTeamInfo } from "@/hooks/api/team/useTeamInfo";
import { useParamsTeamId } from "@/hooks/team/useParamsTeamId";
import { MainContainer } from "waggle-design-system";

const EditTeamPage = () => {
  const teamId = useParamsTeamId();
  const { name, description, coverImageUrl, teamColor } = useTeamInfo(teamId);
  return (
    <MainContainer>
      <TeamForm defaultValues={{ name, description, coverImageUrl, teamColor }} />
    </MainContainer>
  );
};

export default EditTeamPage;
