import { useMemberInfoSaveQuery } from "@/hooks/api/member/useMemberInfoSaveQuery";
import { useTeamInfo } from "@/hooks/api/team/useTeamInfo";
import { useParamsTeamId } from "@/hooks/team/useParamsTeamId";

const NonMemberPublicOnly = ({ children }: { children: React.ReactNode }) => {
  const teamId = useParamsTeamId();
  const { teamMemberList, isPrivate } = useTeamInfo(teamId);
  const { memberId: myId } = useMemberInfoSaveQuery();
  const isMember = teamMemberList?.some((member) => member.memberId === myId);

  return <>{(!myId || (myId && !isMember)) && !isPrivate ? children : null}</>;
};

export default NonMemberPublicOnly;
