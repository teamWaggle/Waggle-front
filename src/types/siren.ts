import type { MemberType } from "@/types/auth";
import type { RecommendationInfoType } from "@/types/story";

export interface SirenType {
	isSuccess: boolean;
	code: number;
	message: string;
	result: SirenResultType;
}

export interface SirenResultType extends SirenTitleType, SirenContentType {
	boardId: number;
	isOwner?: boolean;
	status: string;
}

export interface SirenContentType {
	lostDate: string;
	lostLocate: string;
	content: string;
	petBreed: string;
	petAge: string;
	petGender: string;
	mediaList: string[];
	contact: string;
}

export interface SirenTitleType {
	category: string;
	title: string;
	member: MemberType;
	lostDate: string;
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
	lostDate?: string;
	createdDate: string;
	lostLocate: string;
	category: string;
	member?: MemberType;
	isOwner?: boolean;
	status: string;
	recommendationInfo: RecommendationInfoType;
}
