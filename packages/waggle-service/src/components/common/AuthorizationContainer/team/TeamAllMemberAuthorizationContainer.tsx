import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";
import { useTeamInfo } from "@/hooks/api/team/useTeamInfo";
import { useParamsTeamId } from "@/hooks/team/useParamsTeamId";

const TeamAllMemberAuthorizationContainer = ({
  children,
  renderLock = "",
}: {
  children: React.ReactNode;
  renderLock?: React.ReactNode;
}) => {
  const teamId = useParamsTeamId();
  const { teamMemberList } = useTeamInfo(teamId);
  const { memberId: myId } = useMemberInfoSaveQuery();
  const isMember = teamMemberList?.some((member) => member.memberId === myId);
  return <>{isMember ? children : renderLock}</>;
};

export default TeamAllMemberAuthorizationContainer;
