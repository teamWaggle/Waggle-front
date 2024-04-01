import type { DefaultResultType } from "@/types/planning";

export interface TeamResultType extends DefaultResultType {
	teamList: Array<TeamCardType>;
	teamCount: number;
}
export interface TeamCardType {
	teamId: number;
	name: string;
	coverImageUrl: string;
	description: string;
	teamSize: number;
	maxTeamSize: number;
	teamColor: TeamColorType;
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
