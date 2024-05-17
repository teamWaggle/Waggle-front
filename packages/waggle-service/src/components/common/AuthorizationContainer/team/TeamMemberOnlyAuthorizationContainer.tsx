import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";
import { useTeamInfo } from "@/hooks/api/team/useTeamInfo";
import { useParamsTeamId } from "@/hooks/team/useParamsTeamId";

const TeamMemberOnlyAuthorizationContainer = ({
  children,
  renderLock = "",
}: {
  children: React.ReactNode;
  renderLock?: React.ReactNode;
}) => {
  const teamId = useParamsTeamId();
  const { teamMemberList, teamLeader } = useTeamInfo(teamId);
  const { memberId: myId } = useMemberInfoSaveQuery();
  const isMember = teamMemberList?.some((member) => member.memberId === myId);
  const isLeader = teamLeader?.memberId === myId;
  return <>{isMember && !isLeader ? children : renderLock}</>;
};

export default TeamMemberOnlyAuthorizationContainer;
