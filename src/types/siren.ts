import type { CommonResponseBaseType } from "./common";
import type { MemberType } from "@/types/auth";
import type { RecommendationInfoType } from "@/types/story";

export interface SirenType extends CommonResponseBaseType {
	result: SirenResultType;
}

export interface SirenResultType extends SirenTitleType, SirenContentType {
	boardId: number;
	status: string;
}

export interface SirenEditType {
	title: string;
	category: string;
	lostDate: string;
	lostLocate: string;
	content: string;
	petBreed: string;
	petAge: string;
	petGender: string;
	mediaList: string[];
	contact: string;
}

export interface SirenContentType extends RecommendationInfoType {
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
	viewCount: number;
	handleEditSiren?: () => void;
}

export interface SirenListType extends CommonResponseBaseType {
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
