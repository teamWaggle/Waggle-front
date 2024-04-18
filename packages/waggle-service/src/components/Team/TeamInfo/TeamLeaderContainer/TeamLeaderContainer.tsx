import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";
import { useTeamInfo } from "@/hooks/team/useTeamInfo";
import { useParamsTeamId } from "@/hooks/useParamsTeamId";

const TeamLeaderContainer = ({ children }: { children: React.ReactNode }) => {
  const teamId = useParamsTeamId();
  const { leader } = useTeamInfo(teamId) || {};
  const { memberId: myId } = useMemberInfoSaveQuery();
  const { memberId: leaderId } = leader;

  return <>{myId === leaderId && children}</>;
};

export default TeamLeaderContainer;
