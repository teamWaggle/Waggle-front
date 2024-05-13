import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";
import { useTeamInfo } from "@/hooks/api/team/useTeamInfo";
import { useParamsTeamId } from "@/hooks/team/useParamsTeamId";

const TeamMemberAuthorizationContainer = ({ children }: { children: React.ReactNode }) => {
  const teamId = useParamsTeamId();
  const { teamMemberList, teamLeader } = useTeamInfo(teamId);
  const { memberId: myId } = useMemberInfoSaveQuery();
  const isMember = teamMemberList?.some((member) => member.memberId === myId);
  const isLeader = teamLeader?.memberId === myId;
  return <>{isMember && !isLeader && children}</>;
};
export default TeamMemberAuthorizationContainer;
