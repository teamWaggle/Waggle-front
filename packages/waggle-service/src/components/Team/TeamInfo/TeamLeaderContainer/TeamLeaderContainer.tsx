import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";
import { useParamsTeamId } from "@/hooks/team/useParamsTeamId";
import { useTeamInfo } from "@/hooks/team/useTeamInfo";

const TeamLeaderContainer = ({ children }: { children: React.ReactNode }) => {
  const teamId = useParamsTeamId();
  const { leader } = useTeamInfo(teamId) || {};
  const { memberId: myId } = useMemberInfoSaveQuery();
  const { memberId: leaderId } = leader;

  return <>{myId === leaderId && children}</>;
};

export default TeamLeaderContainer;
