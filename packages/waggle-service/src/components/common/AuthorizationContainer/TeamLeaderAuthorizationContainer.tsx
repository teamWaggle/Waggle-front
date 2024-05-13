import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";
import { useParamsTeamId } from "@/hooks/team/useParamsTeamId";
import { useTeamInfo } from "@/hooks/api/team/useTeamInfo";

const TeamLeaderAuthorizationContainer = ({ children }: { children: React.ReactNode }) => {
  const teamId = useParamsTeamId();
  const { teamLeader } = useTeamInfo(teamId) || {};
  const { memberId: myId } = useMemberInfoSaveQuery();
  const { memberId: leaderId } = teamLeader;

  return <>{myId === leaderId && children}</>;
};

export default TeamLeaderAuthorizationContainer;
