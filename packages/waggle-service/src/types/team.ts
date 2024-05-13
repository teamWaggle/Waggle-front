import type { DefaultResultType } from "@/types/planning";

export interface TeamResultType extends DefaultResultType {
  teamList: Array<TeamCardType>;
  teamCount: number;
  nextPageParam: number;
}
export interface TeamCardType {
  teamId: number;
  name: string;
  description: string;
  coverImageUrl: string;
  teamColor: TeamColorType;
  teamSize: number;
}

export interface TeamInfoType extends TeamCardType {
  teamLeader: TeamMemberType;
  teamMemberList: Array<TeamMemberType>;
}

export interface TeamMemberType {
  memberId: number;
  userUrl: string;
  nickname: string;
  profileImgUrl: string;
}

export type TeamColorType =
  | "team_1"
  | "team_2"
  | "team_3"
  | "team_4"
  | "team_5"
  | "team_6"
  | "team_7"
  | "team_8";

export interface TeamParticipationListType {
  memberList: Array<TeamMemberType>;
  memberCount: number;
}

export interface EditTeamProps {
  teamId: number;
  formData: FormData;
}
