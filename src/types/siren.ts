import type { MemberType } from "@/types/auth";
import type { RecommendationInfoType } from "@/types/story";

export interface SirenType {
	isSuccess: boolean;
	code: number;
	message: string;
	result: SirenResultType;
}

export interface SirenResultType {
	id?: number;
	title?: string;
	petKind?: string;
	petAge?: number;
	petGender?: string;
	contact?: string;
	lostDate?: string;
	lostLocate?: string;
	content?: string;
	category?: string;
	medias?: string[];
	username?: string;
	profileImg?: string;
	recommendIt?: boolean;
	recommendCount?: number;
}

export interface SirenListType {
	isSuccess: boolean;
	code: number;
	message: number;
	result: SirenListResultType;
}

export interface SirenListResultType {
	sirenList: SirenListInfoType[];
	sirenCount: number;
	isFirst: boolean;
	isLast: boolean;
}

export interface SirenListInfoType {
	boardId: number;
	title: string;
	thumbnail: string;
	lostDate: string;
	createdDate?: string;
	lostLocate: string;
	category?: string;
	member?: MemberType;
	isOwner?: boolean;
	status?: string;
	recommendationInfo: RecommendationInfoType;
}
