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
	recommendationInfo: RecommendationInfoType;
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
	createdDate: string;
	lostLocate: string;
	category: string;
	status: string;
	recommendationInfo: RecommendationInfoType;
}
